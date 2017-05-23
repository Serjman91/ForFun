<!DOCTYPE html>
<html>
 <head>
   <title>For Fun</title>
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
 			<!-- Modal -->
 		<div id="myModal" class="modal fade" role="dialog">
			<div class="modal-dialog">

			<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
							<p class="modal-title">Отправь нам картинку!</p>
					   </div>
				<div class="modal-body">
								  
					<br>
					<input type="file" id="exampleInputFile">
					<h4>или Url</h4>
					<input type="text" class="form-control" placeholder="Url картинки">
					<br>
					<label><input type="radio" name="category" value="">В категорию 1</label>
					<label><input type="radio" name="category" value="">В категорию 2</label>
					<label><input type="radio" name="category" value="">В категорию 3</label>
					<h4>Ну и заголовочек напиши</h4>	
					<input type="text" class="form-control" placeholder="пиши-пиши">
											
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-success">Submit</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
				</div>

				</div>
			</div>
 	<div class="container-fluid">
 		<div class="row">
 			<div class="col-lg-3 col-md-3">

 			  <div id="myScrollspy" class="banner_conteiner">
 			  	
 				<div class="banner">
 					<img src="img/banner/5-1.jpg">
 				</div>
 				<div class="banner">
 					<img src="img/banner/5-2.jpg">
 				</div>
 			  </div>
 			  
 			</div>
 			<div class="col-lg-6 content" id="content">
 				<div class="fun col-md-8">
 					<h2>title!</h2>
 					<img class="img-rounded" src="img/fun/1.jpg">
 				</div>
 				<div class="fun col-md-8">
 					<h2>title!</h2>
 					<img class="img-rounded" src="img/fun/2.jpg">
 				</div>
 				<div class="fun col-md-8">
 					<h2>title!</h2>
 					<img class="img-rounded" src="img/fun/3.jpg">
 				</div>
 				<div class="banner_fun fun col-md-8">
 					<img class="img-rounded" src="img/banner/5-1.jpg">
 				</div>
 				<div class="fun col-md-8">
 					<h2>title!</h2>
 					<img class="img-rounded" src="img/fun/4.jpg">
 				</div>
 				<div class="fun col-md-8">
 					<h2>title!</h2>
 					<img class="img-rounded" src="img/fun/5.jpg">
 				</div>
 			</div>
 			<div class="col-lg-3 col-md-3">
 			 <div class="banner_conteiner">
 				<div class="banner">
 					<img src="img/banner/4-1.jpg">
 				</div>
 				<div class="banner">
 					<img src="img/banner/4-2.jpg">
 				</div>
 			  </div>
 			</div>
 		</div>
 	</div>

<?php require 'Admin/views/footer.php';?>

 	</div>

<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
