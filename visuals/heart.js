import * as THREE from 'three';

import {BaseVisual} from "./base.js";

export class Heart extends BaseVisual {
  constructor(scene) {
    super(scene);

    this.light = new THREE.PointLight( 0xffffff, 1, 100 );
    this.light.position.set(0, 0, 0);
    scene.add(this.light);

    this.geometry = new THREE.SphereGeometry(10, 32, 16)
    this.material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
    this.material.emissive = 0xffffff
    this.material.emissiveIntensity = 100
    this.heart = new THREE.Mesh( this.geometry, this.material );
    this.scene.add(this.heart);
  }

  move(freqs) {
    // this.red.intensity = freqs[1] / 1000
    // this.blue.intensity = freqs[100] / 1000
  }
}