import {BaseVisual} from "./base.js";

export class Sphere extends BaseVisual {
  constructor(scene) {
    super(scene);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( geometry, material );

    scene.add( this.cube );

    console.log(this.cube);
  }

  move() {
    this.cube.rotation.x = freqs[5] / 100;
    this.cube.rotation.y = freqs[100] / 100;
  }
}