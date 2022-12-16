import {Light, Sphere} from './visuals/index.js'
import {fftSize} from './constants.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const mouse = [.5, .5]

const onMouseMove = e => {
  mouse[0] = e.clientX / window.innerWidth;
  mouse[1] = e.clientY / window.innerHeight;
}

window.addEventListener( 'mousemove', onMouseMove );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.x = -2;
camera.position.z = 5;

const audioListener = new THREE.AudioListener();
camera.add( audioListener );
const sound = new THREE.Audio( audioListener );
scene.add( sound );
const loader = new THREE.AudioLoader();
loader.load(
	'audio/issues.mp3',
	function ( audioBuffer ) {
		sound.setBuffer( audioBuffer );
		sound.play();
	}
);
const analyser = new THREE.AudioAnalyser( sound, fftSize );

const visuals = [new Light(scene), new Sphere(scene)];

let x = 0;
let z = 0;

function animate() {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
	// camera.translateX(Math.sin(x));
	// camera.translateZ(Math.cos(z));
	x += 0.1
	z += 0.1
  visuals.forEach(v => v.move(analyser.getFrequencyData()))
}

animate();
