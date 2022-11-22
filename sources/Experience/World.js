import * as THREE from "three";
import Experience from "./Experience.js";

export default class World {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    this.resources.on("groupEnd", (_group) => {
      if (_group.name === "base") {
        this.setRoom();
      }
    });
  }

  setRoom() {
    this.room = {};
    const scene = this.resources.items.roomModel.scene;
    scene.traverse((node) => {
      if (node.isMesh) {
        console.log("node", node);
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    this.room.model = scene;

    this.room.model.tra;
    console.log("scene", this.room.model);

    this.scene.add(this.room.model);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    // directionalLight.position.set(0, 2, 4);
    // directionalLight.castShadow = true;
    // directionalLight.shadow.bias = -0.0005;
    // this.scene.add(directionalLight);

    // if (this.debug) {
    //   const helper = new THREE.DirectionalLightHelper(
    //     directionalLight,
    //     1,
    //     "#ffffff"
    //   );
    //   this.scene.add(helper);
    // }

    const directionalLight2 = new THREE.DirectionalLight("#ffffff", 1);
    directionalLight2.position.set(5, 3.6, 5);
    directionalLight2.castShadow = true;
    directionalLight2.shadow.bias = -0.0004;

    // const light2Target = new THREE.Object3D();
    // light2Target.position.set(0, 2, 4);
    // this.scene.add(light2Target);
    // directionalLight2.target = light2Target;

    this.scene.add(directionalLight2);
    if (this.debug) {
      const helper2 = new THREE.DirectionalLightHelper(
        directionalLight2,
        1,
        "#ffff00"
      );
      this.scene.add(helper2);

      this.debugFolder = this.debug.addFolder("DirectionalLight");
      this.debugFolder.add(directionalLight2.position, "x").min(-5).max(5);
      this.debugFolder.add(directionalLight2.position, "y").min(-5).max(5);
      this.debugFolder.add(directionalLight2.position, "z").min(-5).max(5);
    }

    const accentLight = new THREE.RectAreaLight("#0000FF", 50, 0.7, 0.3);
    accentLight.position.set(-1.4, 1.51163, 0.34);
    accentLight.lookAt(-3, 1.51163, 0.34);
    this.scene.add(accentLight);

    if (this.debug) {
      this.accentLightFolder = this.debug.addFolder("accentLight");
      this.accentLightFolder.add(accentLight.position, "x").min(-5).max(5);
      this.accentLightFolder.add(accentLight.position, "y").min(-5).max(5);
      this.accentLightFolder.add(accentLight.position, "z").min(-5).max(5);
    }

    // const testLight = new THREE.PointLight("#0000ff", 10);
    // // testLight.castShadow = true;
    // testLight.position.set(-1.4, 1.51163, 0.5);
    // this.scene.add(testLight);

    // const sphereSize = 0.1;
    // const pointLightHelper = new THREE.PointLightHelper(testLight, sphereSize);
    // scene.add(pointLightHelper);
  }

  resize() {}

  update() {}

  destroy() {}
}
