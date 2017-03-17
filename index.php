<html>
 <head>
  <meta charset="UTF-8">
  <title>KeepSolvingIndex</title>
  <link rel="stylesheet" href="css/master.css">
  <script src="jsScripts/init.js"></script>
  <script src="jsScripts/bombInfo.js"></script>
  <script src="jsScripts/memory.js"></script>
  <script src="jsScripts/button.js"></script>
  <script src="jsScripts/simpleWires.js"></script>
 </head>
 <body>
  <header>
   <h1>Keep Solving And Nobody Explodes</h1>
   <nav>
    <a href="">HowTo</a>
    <a href="">Download manual</a>
   </nav>
  </header>
  <header>
    <div class="giveBombInfo">
    <label for="batteriesSelector">How many batteries</label>
    <select id="batteriesSelector">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>
    <div class="giveBombInfo">
        <label for="carIndicator" id="carLabel">CAR Label</label>
        <input type="checkbox" id="carIndicator">
    </div>
  </header>
  <main>
   <section id="moduleList">
    <?php
     $items = ["Memory","SimpleWires","Button"];
     foreach($items as $item){
      echo "<section class='module' id='$item'>";
       echo "<p>$item</p>";
      echo "</section>";
     };
    ?>
   </section>
   <section id="solvingSection">
   </section>
  </main>
 </body>
</html>