import * as THREE from 'three'
import { OrthographicCamera } from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import {GUI} from "dat.gui"
import "./style.css"

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5))
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const stats = Stats();
document.body.appendChild(stats.dom)

const gui = new GUI()

const cubeFolder = gui.addFolder("Cube")
const cubeRotationFolder = cubeFolder.addFolder("Rotation")
cubeRotationFolder.add(cube.rotation, "x",0,Math.PI * 2)
cubeRotationFolder.add(cube.rotation, "y",0,Math.PI * 2)
cubeRotationFolder.add(cube.rotation, "z",0,Math.PI * 2)
const cubePositionFolder = cubeFolder.addFolder("Position")
cubePositionFolder.add(cube.position, "x",-10,10)
cubePositionFolder.add(cube.position, "y",-10,10)
cubePositionFolder.add(cube.position, "z",-10,10)
const cubeScaleFolder = cubeFolder.addFolder("Scale")
cubeScaleFolder.add(cube.scale, "x",0,5)
cubeScaleFolder.add(cube.scale, "y",0,5)
cubeScaleFolder.add(cube.scale, "z",0,5)
cubeFolder.open()
cubeRotationFolder.open()
cubePositionFolder.open()
cubeFolder.add(cube,"visible")
const cameraFolder = gui.addFolder("Camera")
cameraFolder.add(camera.position,"z",0,20)
cameraFolder.open()

function animate() {
	requestAnimationFrame( animate );

    //stats.begin()
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
    //stats.end()

	renderer.render( scene, camera );
};

animate();
