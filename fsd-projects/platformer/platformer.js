$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(200,650,100,50,"red");
      createPlatform(375,550,100,50,"blue");
      createPlatform(550,450,100,50,"red");
      createPlatform(725,350,100,50,"blue");
      createPlatform(900,250,100,50,"red");
      createPlatform(1025,150,100,50,"blue");
    // TODO 3 - Create Collectables
      createCollectable("steve",1050,125)
      createCollectable("diamond",1025,125)
      createCollectable("grace",1075,125)
    
    // TODO 4 - Create Cannons
      createCannon("right",200,800)
      createCannon("right",650,850)
    createCannon("top",600,900)
    createCannon("left",350,800)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
