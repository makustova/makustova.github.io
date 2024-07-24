import * as THREE from "three";

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

const createBubble = () => {
  const geometry = new THREE.SphereGeometry(Math.random(), 50, 50);

  const material = new THREE.MeshPhysicalMaterial();

  material.color = new THREE.Color(0xffffff);
  material.roughness = 1;
  material.metalness = 1;
  material.iridescence = 1;
  material.clearcoat = 1;
  material.transparent = true;
  material.opacity = 0.3;
  // material.alphaHash = true;
  material.side = THREE.DoubleSide;
  // material.flatShading = true;
  material.vertexColors = true;
  // material.wireframe = true;
  material.reflectivity = 1;
  material.specularColor = new THREE.Color(0x000000);
  material.specularIntensity = 1;
  material.ior = 1.5;
  material.sheenColor = new THREE.Color(0xffffff);

  const bubble = new THREE.Mesh(geometry, material);

  return bubble;
};

const bubble = createBubble();
bubble.position.z = -1;
scene.add(bubble);

export function animate() {
  bubble.position.x = Math.sin(Date.now() / 1000);
  bubble.position.y = Math.cos(Date.now() / 1000);

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
