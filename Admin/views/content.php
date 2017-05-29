<?php foreach ($items as $item){?>
<div class="fun col-md-8">
 	<h2><?php echo $item[2];?></h2>
 	<img class="img-rounded" src="<?php echo IMAGES_PATH.$item[1];?>">
    <p><?php echo date('d-m-Y', $item[3]);?></p>
</div>
<?php }?>


<? require 'Admin/views/center_banner.php';?>

