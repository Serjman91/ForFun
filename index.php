<?php require_once 'Admin/api/api.php';?>
<!DOCTYPE html>
<html>
 <head>
   <title><?php echo $info["title"];?></title>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width">
   <link href="css/main.css" rel="stylesheet">
   <link href="bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
   <link href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<!-- JQuery -->
	<script   src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
 </head>
 <body>

 	<? require 'Admin/views/header.php';?>

 	<div class="wrapper">
 		
 	<? require 'Admin/views/modal.php';?>

 	<div class="container-fluid">
 		<div class="row">
 			<div class="col-lg-3 col-md-3">

 			  <? require 'Admin/views/left_banner.php';?>
 			  
 			</div>
 			<div class="col-lg-6 content" id="content">
 				
 			<? require 'Admin/views/content.php';?>

 			</div>
 			<div class="col-lg-3 col-md-3">
 			 
 				<? require 'Admin/views/right_banner.php';?>

 			</div>
 		</div>
 	</div>

<?php require 'Admin/views/footer.php';?>

 	</div>

<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
