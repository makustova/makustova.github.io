import * as THREE from 'three';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js'
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
import {Light, Sphere, Heart, Flare} from './visuals/index.js'
import {fftSize} from './constants.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setClearAlpha(0);
renderer.setClearColor(0xffff00, 0)
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

scene.add(new THREE.AmbientLight(0xaaaaaa));
scene.background = null;

const audioListener = new THREE.AudioListener();
camera.add( audioListener );
const sound = new THREE.Audio( audioListener );
scene.add( sound );
const audioLoader = new THREE.AudioLoader();
audioLoader.load(
	'audio/issues.mp3',
	function ( audioBuffer ) {
		sound.setBuffer( audioBuffer );
	}
);

document.getElementById('controls').onclick = (event) => {
	if (sound.isPlaying) {
		event.target.style.opacity = .7;
		sound.pause();
		return
	}
	event.target.style.opacity = 0;
	sound.play()
}

window.onresize = function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
};

const analyser = new THREE.AudioAnalyser( sound, fftSize );

const renderScene = new RenderPass( scene, camera );

const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = 0;
bloomPass.strength = 1.5;
bloomPass.radius = 0;

const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bloomPass );

const visuals = [new Light(scene), new Sphere(scene), new Flare(scene)];

let x = 0;
let z = 0;

function animate() {
	requestAnimationFrame( animate );
	camera.position.x =  Math.cos(x) * 2 * Math.PI ;
	camera.position.z =  Math.sin(z) * 2 * Math.PI ;
	camera.lookAt(0, 0, 0)
	x += 0.001
	z += 0.001
  visuals.forEach(v => v.move(analyser.getFrequencyData()))
	composer.render();
}

animate();
