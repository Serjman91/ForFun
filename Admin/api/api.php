<?php
<<<<<<< HEAD
    require_once 'utils.php';
    define("CATEGORY","Admin/DB/categories.json");
    define("INFO","Admin/DB/info.json");
    define("CATEGORY_ITEMS","Admin/DB/category_");
    define("IMAGES_PATH", "./img/fun/");

    $categories = getCategories();
    $items = getItemsFromCategoriesId(1);
    $info = getInfo();
    $banners = array();

=======

    $categories = array(1,2,3);
    $items = array(6,6,5);
    $info = "mail@mail.com";
    $banners = array("ff", "ff");
>>>>>>> 9b1184254ac99917be48ea41bc1679792966a4d1
?>

