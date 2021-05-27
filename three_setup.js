import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    canvas: document.getElementById('main-bg')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff, .8);
pointLight.position.set(5, 10, -10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(5, 10, -20);

scene.add(pointLight, ambientLight);

// SHAPE GENERATOR
function addShape() {
    const geometry = new THREE.OctahedronGeometry(1);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff, wireframe: true});
    const star = new THREE.Mesh(geometry, material);

    const starLight = new THREE.PointLight(0xffffff, 0.2);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    starLight.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addShape);

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
let controlVar = 0;


// ANIMATION LOOP
function animate() {
    requestAnimationFrame(animate);

    controls.update();
    controlVar++;

    camera.position.x += 0.05;
    camera.position.y += 0.1;
    camera.position.z += 0.05

    if (controlVar >= 600) {
        camera.position.set(0, 0, 30);
        controlVar = 0;
    }

    renderer.render(scene, camera);
}

animate();