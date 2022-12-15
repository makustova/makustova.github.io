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

function animate() {
	requestAnimationFrame( animate );
  // camera.position.x = Math.sin( .5 * Math.PI * ( mouse[ 0 ] - .5 ) );
  // camera.position.y = Math.sin( .25 * Math.PI * ( mouse[ 1 ] - .5 ) );
	renderer.render(scene, camera);
  visuals.forEach(v => v.move(analyser.getFrequencyData()))
}

animate();
