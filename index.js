import {Light, Sphere} from './visuals/index.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );

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
const analyser = new THREE.AudioAnalyser( sound, 512 );

const visuals = [new Light(scene), new Sphere(scene)];

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  window.freqs = analyser.getFrequencyData();;
  visuals.forEach(v => v.move())
}

animate();
