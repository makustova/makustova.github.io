import * as THREE from 'three';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js'
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import {Light, Sphere, Heart} from './visuals/index.js'
import {fftSize} from './constants.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const audioListener = new THREE.AudioListener();
camera.add( audioListener );
const sound = new THREE.Audio( audioListener );
scene.add( sound );
const loader = new THREE.AudioLoader();

document.body.onclick = () => {
	loader.load(
		'audio/issues.mp3',
		function ( audioBuffer ) {
			sound.setBuffer( audioBuffer );
			sound.play()
		}
	);

}

const analyser = new THREE.AudioAnalyser( sound, fftSize );

const renderScene = new RenderPass( scene, camera );

const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = 0;
bloomPass.strength = 1.5;
bloomPass.radius = 0;

const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bloomPass );

const visuals = [new Light(scene), new Sphere(scene), new Heart(scene)];

let x = 0;
let z = 0;

function animate() {
	requestAnimationFrame( animate );
	camera.position.x =  Math.cos(x) * 2 * Math.PI ;
	camera.position.z =  Math.sin(z) * 2 * Math.PI ;
	camera.lookAt(0, 0, 0)
	x += 0.005
	z += 0.005
  visuals.forEach(v => v.move(analyser.getFrequencyData()))

	composer.render();
}

animate();
