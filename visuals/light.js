import {BaseVisual} from "./base.js";

export class Light extends BaseVisual {
  constructor(scene) {
    super(scene);

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add(light);
  }

  move() {
  }
}