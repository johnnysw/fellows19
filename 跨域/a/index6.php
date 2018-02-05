<?php

    $school = $_GET["school"];

    echo $school;
?>


<script>
    let s = <?php echo $school;?>;
    top.foo(s);



</script>