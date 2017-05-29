<header>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-md-12 navbar-fixed-top">
                <nav class="navbar navbar-default">
                    <div class="col-md-2">
                        <img class="img-responsive logo" src="img/logo/logo.png">
                    </div>
                    <p class="head_title">Генератор юмора!</p>
                    <div class="col-md-6">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menu
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li ><a href="/">Всё подряд</a>
                                <?php
                                    foreach($categories as $category){?>
                                        <li><a href=""><?php echo $category["name"];?></a></li>
                                   <?php }?>
                                <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Добавить картинку</button></li>
                            </ul>

                        </div>
                        <ul class="nav navbar-nav">
                            <li ><a href="#">Всё подряд</a></li>
                            <?php foreach($categories as $category){?>
                                <li><a href=""><?php echo $category["name"];?></a></li>
                            <?php }?>
                        </ul>
                    </div>
                    <div class="buttons">
                        <!-- Trigger the modal with a button -->
                        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Добавить картинку</button>




                    </div>
                </nav>
            </div>
        </div>

    </div>
</header>