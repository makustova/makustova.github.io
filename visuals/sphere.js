import * as THREE from 'three';
import {BaseVisual} from "./base.js";
import {analyserSize} from "../constants.js";

export class Sphere extends BaseVisual {
  constructor(scene) {
    super(scene);

    this.dots = []

    for (let i = 0; i < analyserSize; i++) {
      const geometry = new THREE.SphereGeometry(.02, 32, 16)
      const color = `hsl(${i}, 40%, 40%)`
      const material = new THREE.MeshToonMaterial( { color } );
      const dot = new THREE.Mesh( geometry, material );
      dot.castShadow = true
      this.dots.push(dot)

      this.scene.add(dot);
    }

    window.dotPositions = [];

    for (let i = 0; i < analyserSize; i++) {
      window.dotPositions.push(Math.random() * 100);
    }
  }

  moveSingleDot = (freq, i) => {
    const spherical = new THREE.Spherical(freq/100 + 2, i, window.dotPositions[i])
    const newPosition = new THREE.Vector3();
    newPosition.setFromSpherical(spherical);

    this.dots[i].position.set(...newPosition)

    window.dots = this.dots;
  }

  move = freqs => {
    freqs.forEach(this.moveSingleDot)
  }
}
