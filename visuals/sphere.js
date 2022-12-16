import {BaseVisual} from "./base.js";
import {analyserSize} from "../constants.js";

// export class Sphere extends BaseVisual {
//   constructor(scene) {
//     super(scene);

//     const sphereGeometry = new THREE.SphereGeometry( 2, 32, 32 );
//     const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xcccccc, opacity: 0.3, wireframe: true } );
//     const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
//     sphere.rotation.z = Math.PI / 2;

//     scene.add( sphere );

//     this.sphere = sphere;
//   }

//   move(freqs) {
//     this.sphere.rotation.x += .0005;
//   }
// }


export class Sphere extends BaseVisual {
  constructor(scene) {
    super(scene);

    this.dots = []

    for (let i = 0; i < analyserSize; i++) {
      const geometry = new THREE.SphereGeometry(.03, 32, 16)
      const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
      const dot = new THREE.Mesh( geometry, material );
      this.dots.push(dot)

      this.scene.add(dot);
    }

  }

  renderSingleDot = (freq, i) => {
    this.dots[i].position.set(-4 + i/10, freq/100, 0)

    window.dots = this.dots;
  }

  move = freqs => {
    freqs.forEach(this.renderSingleDot)
  }
}

// export class Sphere extends BaseVisual {
//   constructor(scene) {
//     super(scene)

//     this.scene = scene;
//   }

//   createSphericalVector = f => {
//     const geometry = new THREE.SphereGeometry(10, 10, 10)
//     const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
//     const sphere = new THREE.Mesh( geometry, material );

//     this.scene.add(sphere);
//   }

//   move(freqs) {
//     freqs.forEach(this.createSphericalVector)
//   }
// }