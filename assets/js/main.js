import * as THREE from "./three.module.js";
import { MTLLoader } from "./MTLLoader.js";
import { OBJLoader } from "./OBJLoader.js";

const scene = new THREE.Scene();
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 17;
const cameraHeight = cameraWidth / aspectRatio;
const camera = new THREE.OrthographicCamera(
  -cameraWidth / 2,
  cameraWidth / 2,
  cameraHeight / 2,
  -cameraHeight / 2,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.addEventListener("DOMContentLoaded", function () {
  const mainSection = document.getElementById("main");
  mainSection.appendChild(renderer.domElement);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight.position.set(1, 1, 1);

function loadModel(mtlPath, objPath, position) {
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();

  mtlLoader.load(mtlPath, function (materials) {
    objLoader.setMaterials(materials);
    objLoader.load(objPath, function (object) {
      object.position.copy(position);
      scene.add(object);

      animateModel(object);
    });
  });
}

function animateModel(object) {
  function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();
}

loadModel(
  "images/3d/book.mtl",
  "images/3d/book.obj",
  new THREE.Vector3(-5, -1.5, 0)
);
loadModel(
  "images/3d/book2.mtl",
  "images/3d/book2.obj",
  new THREE.Vector3(0, -1.5, 0)
);
loadModel(
  "images/3d/book3.mtl",
  "images/3d/book3.obj",
  new THREE.Vector3(5, -1.5, 0)
);
