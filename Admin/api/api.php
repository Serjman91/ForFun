<?php
    require_once 'utils.php';
    define("CATEGORY","Admin/DB/categories.json");
    define("INFO","Admin/DB/info.json");
    define("CATEGORY_ITEMS","Admin/DB/category_");
    define("IMAGES_PATH", "./img/fun/");

    $categories = getCategories();
    $items = getItemsFromCategoriesId(1);
    $info = getInfo();
    $banners = array();

?>

