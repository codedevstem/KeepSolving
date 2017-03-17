<html>
 <head>
  <meta charset="UTF-8">
  <title>KeepSolvingIndex</title>
  <link rel="stylesheet" href="css/master.css">
  <script src="jsScripts/init.js"></script>
 </head>
 <body>
  <header>
   <h1>Keep Solving And Nobody Explodes</h1>
   <nav>
    <a href="">About Site</a>
    <a href="">Download the manual</a>
   </nav>
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