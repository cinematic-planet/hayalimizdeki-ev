// three.module.js

export class Color {
  constructor(hex) {
    this.hex = hex;
  }
}

export class Scene {
  constructor() {
    this.children = [];
    this.background = null;
  }
  add(obj) {
    this.children.push(obj);
  }
}

export class PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.position = {
      x: 0, y: 0, z: 0,
      set: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    };
  }
  updateProjectionMatrix() {}
}

export class WebGLRenderer {
  constructor(params) {
    this.domElement = document.createElement('canvas');
    this.context = this.domElement.getContext('webgl');
  }
  setSize(width, height) {
    this.domElement.width = width;
    this.domElement.height = height;
  }
  render(scene, camera) {
    // Sahne render simülasyonu (boş)
  }
}

export class PlaneGeometry {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

export class MeshStandardMaterial {
  constructor(params) {
    this.color = params.color;
  }
}

export class Mesh {
  constructor(geometry, material) {
    this.geometry = geometry;
    this.material = material;
    this.rotation = { x: 0, y: 0 };
    this.position = {
      x: 0, y: 0, z: 0,
      set: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    };
  }
}

export class PointLight {
  constructor(color, intensity) {
    this.color = color;
    this.intensity = intensity;
    this.position = {
      x: 0, y: 0, z: 0,
      set: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    };
  }
}
