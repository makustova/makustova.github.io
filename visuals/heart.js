import * as THREE from 'three';

import {BaseVisual} from "./base.js";

export class Heart extends BaseVisual {
  constructor(scene) {
    super(scene);

    this.light = new THREE.PointLight( 0xffffff, 1 );
    this.light.position.set(0, 0, 0);
    scene.add(this.light);

    const geometry = new THREE.SphereGeometry(0.5, 32, 16)
    const material = new THREE.MeshMatcapMaterial( { color: 0xffffff } );
    const dot = new THREE.Mesh( geometry, material );

    this.scene.add(dot);
  }

  move(freqs) {
    // this.light.intensity = freqs[1] / 1000
  }
}