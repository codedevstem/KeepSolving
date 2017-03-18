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
    <a href="">RESET BOMB!</a>
   </nav>
  </header>
  <header>
    <h3>Fill in relevant data</h3>
    <div id="batteriesChoise">
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
    <div id="booleanProperties">
        <label for="car" id="carLabel">CAR</label>
        <input type="checkbox" id="car">
        <label for="frk" id="frkLabel">FRK</label>
        <input type="checkbox" id="frk">
        <label for="lastDigit" id="lastDigitLabel">Last Digit Even</label>
        <input type="checkbox" id="lastDigit">
        <label for="paralellPort" id="paralellPortLabel">Paralell Port</label>
        <input type="checkbox" id="paralellPort">
    </div>
  </header>
  <main>
   <section id="moduleList">
    <?php
     $items = ["Memory","SimpleWires","Button"];
     foreach($items as $item){
       echo "<input class='module' id='$item' type='button' readOnly='true' value=$item>";
     };
    ?>
   </section>
   <section id="solvingSection">
   </section>
  </main>
 </body>
</html>