import * as THREE from "three";
import Experience from "./Experience.js";

export default class World {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

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

    const directionalLight = new THREE.DirectionalLight("#ffffff", 5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    const testLight = new THREE.PointLight("#0000ff", 10);
    // testLight.castShadow = true;
    testLight.position.set(-1.4, 1.51163, 0.5);
    this.scene.add(testLight);

    const sphereSize = 0.1;
    const pointLightHelper = new THREE.PointLightHelper(testLight, sphereSize);
    scene.add(pointLightHelper);
  }

  resize() {}

  update() {}

  destroy() {}
}
