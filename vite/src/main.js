import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

//1.Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

//add the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

//create and add an object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshPhongMaterial({
  color: "#468565",
  emissive: "#468565",
});
const shape = new THREE.Mesh(geometry, material);

const boxgeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxmaterial = new THREE.MeshPhongMaterial({
  color: "#B4B4B3",
  emissive: "#B4B4B3",
});
const box = new THREE.Mesh(boxgeometry, boxmaterial);

box.position.y = -1.5;
scene.add(shape);
scene.add(box);
//add lighting
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);
//animate the scene
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; //this will make our control smoother
controls.dampingFactor = 0.05; //
controls.enableZoom = true;
controls.enablePan = true;

//add animations
function animate() {
  requestAnimationFrame(animate);
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.01;
  box.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
}
animate();

//handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
