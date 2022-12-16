import {BaseVisual} from "./base.js";

export class Light extends BaseVisual {
  constructor(scene) {
    super(scene);

    this.red = new THREE.PointLight( 0xff0000, 1, 100 );
    this.red.position.set( 3, 3, 3 );

    this.blue = new THREE.PointLight(0x0000ff, 1, 100)
    this.blue.position.set( -1, -1, 2 );

    this.white = new THREE.PointLight(0xffffff, 1, 100)
    this.white.intensity = 100
    this.white.position.set( 0, 0, -5 );

    scene.add(this.red);
    scene.add(this.blue);
    scene.add(this.white)
  }

  move(freqs) {
    // this.red.intensity = freqs[1] / 1000
    // this.blue.intensity = freqs[100] / 1000
  }
}