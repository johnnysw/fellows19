<?php
    $username = $_GET['username'];
    $callback = $_GET['callback'];

    // 业务逻辑
    //echo "alert($username)";

    echo "$callback($username)";


?>