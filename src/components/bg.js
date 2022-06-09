import * as React from "react"
import { Component } from "react"
import * as THREE from "three"

class Bg extends Component {
    componentDidMount() {
    
    const renderer = new THREE.WebGLRenderer({alpha: true});
    const canvas = this.mount;
    const boxWidth = this.mount.offsetWidth;
    const boxHeight = this.mount.offsetHeight;
    renderer.setSize(boxWidth, boxHeight);
    this.mount.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
        75,
        boxWidth / boxHeight,
        1,
        1000
    );
    camera.position.set(0, 0, 75);
    camera.lookAt(0, 0, 0);
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000066);
    
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({ color: "white" });
    const points = [];
    points.push(new THREE.Vector3(window.innerWidth, 0, 0));
    points.push(new THREE.Vector3(-window.innerWidth, 0, 0));
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(linegeometry, material);
    
    function makeObject(geo, size) {
        const material = new THREE.MeshPhongMaterial({ color: "white" });
        let geometry = new THREE.BoxGeometry(size, size, size);
    
        let object = new THREE.Mesh(geometry, material);
        return object;
    }
    
    function generateList(number, type, size, objectFun = makeObject) {
        let list = [];
        for (let i = 0; i < number; i++) {
            list.push(objectFun(type, size));
        }
        return list;
    }
    
    let cubes = generateList(16, "cube", 10);
    let pyramids = generateList(9, "pyramid", 5);
    
    function grid(objects, offset, rowN = 4, x = -30, y = 30, z = 0) {
        const nX = x;
        let line = 0;
        objects.forEach((object) => {
            if (line <= rowN - 1) {
                object.position.x = x;
                object.position.y = y;
                object.position.z = z;
                scene.add(object);
                x += offset;
                line++;
            } else {
                y -= offset;
                x = nX;
                object.position.x = x;
                object.position.y = y;
                object.position.z = z;
                scene.add(object);
                x += offset;
                line = 1;
            }
        });
    }
    
    grid(cubes, 20);
    grid(pyramids, 30, 3, -30, 30, -50);
    
    const light = new THREE.PointLight(0x022BFF, 1, 100);
    light.position.set(0, 0, -25);
    scene.add(light);
    // scene.add(line);
    
    // render
    
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    
    function animate() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    
        renderer.render(scene, camera);
        cubes.forEach((obj) => {
            obj.rotation.z += 0.01;
            obj.rotation.y += 0.01;
            obj.rotation.x += 0.01;
        });
        pyramids.forEach((obj) => {
            // obj.rotation.z += 0.1;
            // obj.rotation.y += 0.1;
            obj.rotation.x += 0.05;
        });
    
        line.position.y = Math.random() * 60 - 30;
        line.rotation.z += 0.01;
    
        requestAnimationFrame(animate);
    }

    function onWindowResize() {

        resizeRendererToDisplaySize(renderer);

    }

    window.addEventListener('resize', onWindowResize, false);
    animate();
    };

    render() {
        return (
            <div 
                ref={ref => (this.mount = ref)}
                style={{
                    position: `absolute`,
                    width: `100%`,
                    height: `100%`,
                    zIndex: `-1`,
                    left: `0`,
                    top: `0`,
                    opacity: `1`
                }}
             />
        )
    }
}


export default Bg