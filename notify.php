<?php
    $addr = 'info@mtvc.lt'

    $name = $_POST['name'];
    $phone = $_POST['tel-number'];

    mail($addr, 'New contact request', 'Name: ' . $name . ', Phone: ' . $phone);

    $user_message = "Thank you, " . $name . ', we will recall you as far as possible';

    echo '<script>alert("' . $user_message . '")</script>';
    echo '<html><a href="http://mtvc.lt">Go back</a></html>';
    die();
?>
