import * as THREE from "three";
import {Bubble} from "./Bubble";

document.body.style.margin = "0";
document.body.style.background =
  "radial-gradient(circle, #c2c5fc 0%, white 100%)";

const AMOUNT = 50;

const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const pointLight1 = new THREE.PointLight(0xffffff, 30, 100, 0);
pointLight1.position.set(1, 1, 1);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 30, 100, 0);
pointLight2.position.set(-2, -2, -2);
scene.add(pointLight2);

// scene.background = new THREE.Color(0xefe6f5);

const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 5;
const camera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2,
  (frustumSize * aspect) / 2,
  frustumSize / 2,
  frustumSize / -2,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animateBackground);
const domElement = renderer.domElement;
domElement.style.position = "absolute";
domElement.style.top = "0";
domElement.style.left = "0";
document.body.appendChild(domElement);

const bubbles = Array.from({length: AMOUNT}, () => new Bubble(Math.random()));

bubbles.forEach(bubble => {
  scene.add(bubble.mesh);
});

export function animateBackground() {
  bubbles.forEach(bubble => {
    bubble.mesh.position.add(bubble.direction);
    if (bubble.mesh.position.x > 3 || bubble.mesh.position.x < -3) {
      bubble.direction.x *= -1;
    }
    if (bubble.mesh.position.y > 2 || bubble.mesh.position.y < -2) {
      bubble.direction.y *= -1;
    }
    if (bubble.mesh.position.z > 1 || bubble.mesh.position.z < -1) {
      bubble.direction.z *= -1;
    }
  });

  renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.left = (frustumSize * aspect) / -2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = frustumSize / -2;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
