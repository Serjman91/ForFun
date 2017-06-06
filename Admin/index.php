<?php require_once 'api/utils.php' ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Администратор</title>

    <!-- Bootstrap core CSS -->
    <link href="../bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
   	<link href="../bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" rel="stylesheet">
   	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../css/admin.css" rel="stylesheet">
  </head>

  <body>

  <?php
    $email = $_POST["email"];
    $password = $_POST["password"];
    if( isset($email,$password)){
        $access = validateUser($email,$password);
        if ($access["status"]){
            require 'views/admin_panel.php';
            validateItem('img3.jpeg',1,"ffdd");
        }else{
            require 'views/admin_form.php';
        }
    }else {
        require 'views/admin_form.php';
    }
  ?>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script defer src="../bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
  </body>
</html>
