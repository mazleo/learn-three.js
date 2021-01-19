import * as THREE from './three.module.js';

const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({canvas});

const fov = 75;
const aspect = canvas.width / canvas.height;
const near = 0.1;
const far = 15;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene = new THREE.Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const cube1 = new THREE.Mesh(geometry, getMaterialWithColor(0x44aa88));
const cube2 = new THREE.Mesh(geometry, getMaterialWithColor(0x25414e));
const cube3 = new THREE.Mesh(geometry, getMaterialWithColor(0xd0764a));

cube1.position.z = -1;
cube2.position.z = -1;
cube3.position.z = -1;

cube1.position.x = -2;
cube2.position.x = 0;
cube3.position.x = 2;

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

const color = 0xFFFFFF;
const intensity = 1;

const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);

scene.add(light);

renderer.render(scene, camera);

requestAnimationFrame(render);

function getMaterialWithColor(color) {
    return new THREE.MeshPhongMaterial({color: color});
}

function render(time) {
    time *= 0.001;

    cube1.rotation.x = time;
    cube1.rotation.y = time;

    cube2.rotation.x = time * -1;
    cube2.rotation.y = time * -1;

    cube3.rotation.x = time * -1;
    cube3.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

