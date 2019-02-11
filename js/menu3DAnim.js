        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        window.addEventListener('resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
        });

        controls = new THREE.OrbitControls(camera, renderer.domElement);

        controls.minDistance = 2;
        controls.maxDistance = 3;

        scene.background = new THREE.Color( 0xcccccc);


        // lights
            var light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );
            var light = new THREE.DirectionalLight( 0x002288 );
            light.position.set( - 1, - 1, - 1 );
            scene.add( light );
            var light = new THREE.AmbientLight( 0x222222 );
            scene.add( light );





        //Create a shape
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();