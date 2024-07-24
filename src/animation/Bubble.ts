import * as THREE from "three";

export class Bubble {
  mesh: THREE.Mesh;
  geometry: THREE.SphereGeometry;

  constructor(radius: number) {
    this.geometry = new THREE.SphereGeometry(radius, 50, 50);

    const material = new THREE.MeshPhysicalMaterial();

    material.color = new THREE.Color(0xffffff);
    material.roughness = 1;
    material.metalness = 1;
    material.iridescence = 1;
    material.clearcoat = 1;
    material.transparent = true;
    material.opacity = 0.1;
    // material.alphaHash = true;
    material.side = THREE.DoubleSide;
    // material.flatShading = true;
    material.vertexColors = true;
    // material.wireframe = true;
    material.reflectivity = 1;
    // material.specularColor = new THREE.Color(0x000000);
    // material.specularIntensity = 1;
    material.ior = 1.5;
    material.sheenColor = new THREE.Color(0xffffff);

    this.mesh = new THREE.Mesh(this.geometry, material);
  }

  direction = new THREE.Vector3(
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005
  );
}
