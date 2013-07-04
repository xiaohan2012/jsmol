jQuery(function(){
    var WIDTH = 400, 
    HEIGHT = 300;
    
    var camera = 
	new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000);
    
    camera.position.z = 300;
    
    var scene = new THREE.Scene();

    scene.add(camera);
    
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(WIDTH, HEIGHT);

    var $container = $("#container");
    
    $container.append(renderer.domElement);
   
    
    var sphereMaterial = new THREE.MeshLambertMaterial({
	color: 0xCC0000
    });
    
    var radius = 50, 
    segments = 16, 
    rings = 16;
    
    var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(
	    radius, segments, rings
	),
	sphereMaterial
    );

    scene.add(sphere);

    var pointLight = new THREE.PointLight(0xffffff);

    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    scene.add(pointLight);

    renderer.render(scene, camera);

 
});
