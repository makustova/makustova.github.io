import * as THREE from 'three';
import {Lensflare, LensflareElement} from 'three/addons/objects/Lensflare.js';
import {BaseVisual} from "./base.js";

export class Flare extends BaseVisual {
  constructor(scene) {
    super(scene);

    const textureLoader = new THREE.TextureLoader();

    const flare = textureLoader.load( './3d/textures/flare.png' );
    const flarechen = textureLoader.load( './3d/textures/flarechen.png' );

    this.light = new THREE.PointLight( 0xffffff, 1);
    this.light.color.setHSL(300, 100, 50);
    this.light.position.set(0, 0, 0)
    scene.add( this.light );

    const lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( flare, 700, 0, this.light.color ) );
    lensflare.addElement( new LensflareElement( flarechen, 60, 0.6, this.light.color ) );

    this.light.add( lensflare );
  }

  move(freqs) {
    this.light.color.setHSL(freqs[5], 100, 50);
  }
}
