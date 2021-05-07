shch1 = {};
if (window.location.origin === 'http://newsite.gk-turan.ru') {
    shch1.locate = {
        index1: '/',
        index2: '/index.html'
    };
}
if (window.location.origin === 'https://p.cx.ua') {
    shch1.locate = {
        index1: '/pf/dmitriy.site/',
        index2: '/pf/dmitriy.site/index.html'
    };
}
if (window.location.origin === 'http://localhost:81') {
    shch1.locate = {
        index1: '/',
        index2: '/index.html'
    };
}

let shchs = {mob: 0, desk: 0, port: 0, land: 0};
if (window.matchMedia("(max-width: 1070px)").matches) {
    shchs.mob = 1
    shchs.mini = Math.min(window.innerWidth, window.innerHeight) - 15
} else {
    shchs.desk = 1
    if (shchs.desk) shchs.mini = Math.min(window.innerWidth, window.innerHeight) / 2.15
}
const numberOfParticles = 6000;

const particleImage = './js/dist/particle-tiny.png',
    particleColor = '0x000000',
    particleSize = .2;

const defaultAnimationSpeed = 1,
    morphAnimationSpeed = 3;

var stats = new Stats();
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(shchs.mini, shchs.mini);
renderer.setClearColor(0x000000, 0); // the default
document.querySelector(".back-site__round-in").appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(25, 1, 1, 10000);
if (shchs.mob) {
    if ((window.location.pathname === shch1.locate.index1) || (window.location.pathname === shch1.locate.index2)) {
        camera.position.y = 14;
        camera.position.z = 21;
    } else {
        camera.position.y = 28;
        camera.position.z = 42;
    }
}
if (shchs.desk) {
    if ((window.location.pathname === shch1.locate.index1) || (window.location.pathname === shch1.locate.index2)) {
        camera.position.y = 14;
        camera.position.z = 21;
        console.log('desk sphere')
    } else {
        camera.position.y = 20;
        camera.position.z = 30;
        console.log('desk cube')

    }
}

var controls = new THREE.OrbitControls(camera);
controls.update();

// Particle Vars
var particleCount = numberOfParticles;

let spherePoints,
    cubePoints,
    rocketPoints,
    spacemanPoints;

var particles = new THREE.Geometry(),
    sphereParticles = new THREE.Geometry(),
    cubeParticles = new THREE.Geometry()

var pMaterial = new THREE.PointCloudMaterial({
    color: particleColor,
    size: particleSize,
    map: THREE.ImageUtils.loadTexture(particleImage),
    blending: THREE.AdditiveBlending,
    transparent: true
});

var geometry = new THREE.SphereGeometry(5, 30, 30);

spherePoints = THREE.GeometryUtils.randomPointsInGeometry(geometry, particleCount)

var geometry = new THREE.BoxGeometry(9, 9, 9);

cubePoints = THREE.GeometryUtils.randomPointsInGeometry(geometry, particleCount)


for (var p = 0; p < particleCount; p++) {
    var vertex = new THREE.Vector3();
    vertex.x = 0;
    vertex.y = 0;
    vertex.z = 0;

    particles.vertices.push(vertex);
}

createVertices(sphereParticles, spherePoints, null, null)
createVertices(cubeParticles, cubePoints, null, 1)

function createVertices(emptyArray, points, yOffset = 0, trigger = null) {
    for (var p = 0; p < particleCount; p++) {
        var vertex = new THREE.Vector3();
        vertex.x = points[p]['x'];
        vertex.y = points[p]['y'] - yOffset;
        vertex.z = points[p]['z'];

        emptyArray.vertices.push(vertex);
    }
}

var particleSystem = new THREE.PointCloud(
    particles,
    pMaterial
);

particleSystem.sortParticles = true;

scene.add(particleSystem);

const normalSpeed = (defaultAnimationSpeed / 100),
    fullSpeed = (morphAnimationSpeed / 100)

let animationVars = {
    speed: normalSpeed
}

function animate() {
    stats.begin();
    particleSystem.rotation.y += animationVars.speed;
    particles.verticesNeedUpdate = true;
    stats.end();

    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

if ((window.location.pathname === shch1.locate.index1) || (window.location.pathname === shch1.locate.index2)) {
    setTimeout(toSphere, 500);
} else {
    setTimeout(toCube, 500);

}

function toSphere() {
    morphTo(sphereParticles);
}

function toCube() {
    // handleTriggers(1);
    morphTo(cubeParticles);
}

function morphTo(newParticles, color = '0xffffff') {
    TweenMax.to(animationVars, .3, {
        ease:
        Power4.easeIn, speed: fullSpeed, onComplete: slowDown
    });
    particleSystem.material.color.setHex(color);

    for (var i = 0; i < particles.vertices.length; i++) {
        TweenMax.to(particles.vertices[i], 4, {
            ease:
                Elastic.easeOut.config(1, 0.75),
            x: newParticles.vertices[i].x,
            y: newParticles.vertices[i].y,
            z: newParticles.vertices[i].z
        })
    }
}

function slowDown() {
    TweenMax.to(animationVars, 4, {
        ease:
        Power2.easeOut, speed: normalSpeed, delay: 1
    });
}
