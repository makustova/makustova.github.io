import * as THREE from "three";
import { Bubble } from "./Bubble";

const AMOUNT = 10;

const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

const pointLight1 = new THREE.PointLight(0xffffff, 30, 100, 0);
pointLight1.position.set(1, 1, 1);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 30, 100, 0);
pointLight2.position.set(-2, -2, -2);
scene.add(pointLight2);

scene.background = new THREE.Color(0x1a1a1a);

// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
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
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);


const bubbles = Array.from({length: AMOUNT}, () => new Bubble(Math.random()));

bubbles.forEach((bubble) => {
  scene.add(bubble.mesh);
});

export function animate() {
  bubbles.forEach((bubble) => {
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
  })

  renderer.render(scene, camera);
}

let present = true;

window.addEventListener("click", () => {
  if (present) {
    scene.remove(bubble);
    present = false;
  } else {
    scene.add(bubble);
    present = true;
  }
});
