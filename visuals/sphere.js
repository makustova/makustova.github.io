import {BaseVisual} from "./base.js";

export class Sphere extends BaseVisual {
  constructor(scene) {
    super(scene);

    const sphereGeometry = new THREE.SphereGeometry( 2, 32, 32 );
    const sphereMaterial = new THREE.MeshPhongMaterial( { color: 0xcccccc, opacity: 0.3 } );
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.rotation.z = Math.PI / 2;

    scene.add( sphere );

    this.sphere = sphere;
  }

  move(freqs) {
    this.sphere.rotation.x += freqs[5] / 50000;
  }
}

// export class Sphere extends BaseVisual {
//   constructor(scene) {
//     super(scene)

//     const geometry = new THREE.BufferGeometry();
//     // create a simple square shape. We duplicate the top left and bottom right
//     // vertices because each vertex needs to appear once per triangle.
//     const vertices = new Float32Array( [
//       -1.0, -1.0,  1.0,
//       1.0, -1.0,  1.0,
//       1.0,  1.0,  1.0,

//       1.0,  1.0,  1.0,
//       -1.0,  1.0,  1.0,
//       -1.0, -1.0,  1.0
//     ] );

//     // itemSize = 3 because there are 3 values (components) per vertex
//     geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
//     const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
//     const mesh = new THREE.Mesh( geometry, material );

//     scene.add(mesh);
//   }

//   createSphericalVector(f) {
//     const spherical = new THREE.Spherical(10, f, f/10)
//     const center = new THREE.Vector3();
//     center.setFromSpherical(spherical);

//     const sphere = new THREE.Sphere(center, 1)
//   }

//   move(freqs) {
//   }
// }