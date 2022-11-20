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
    this.room.model = this.resources.items.roomModel.scene;
    console.log("scene", this.room.model);

    this.scene.add(this.room.model);

    const directionalLight = new THREE.DirectionalLight("#ffffff", 3);
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);
  }

  resize() {}

  update() {}

  destroy() {}
}
