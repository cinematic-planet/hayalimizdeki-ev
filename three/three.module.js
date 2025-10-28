// three.module.js

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
    this.position = { set: () => {} };
  }
  updateProjectionMatrix() {}
}

export class WebGLRenderer {
  constructor() {
    this.domElement = document.createElement('canvas');
  }
  setSize() {}
  render() {}
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
    this.position = { x: 0, y: 0, z: 0, set: function(x, y, z) { this.x = x; this.y = y; this.z = z; } };
  }
}

export class PointLight {
  constructor(color, intensity) {
    this.color = color;
    this.intensity = intensity;
    this.position = { set: function(x, y, z) { this.x = x; this.y = y; this.z = z; } };
  }
}
