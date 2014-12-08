<?php

    require "tipmap-sqldetails.php";
    // Create connection
    $conn = new mysqli($mysql_host, $mysql_user, $mysql_password);
    $conn->select_db($mysql_database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    //need one for sql insertion
    if (isset($_GET["add"])) {
        //SANITIZE YOUR INPUTS FOOL
        $query = "INSERT INTO us_tip_data (latitude, longitude, tip) VALUES (" . $_GET["latitude"] . ", " . $_GET["longitude"] . ", " . $_GET["tip"] . ")";
        
        if ($conn->query($query)) {
            echo "Added to tip map!";
        } else {
            echo "Error adding to tip map";
        }
    }

    //and one for sql dump into json or something for making the charts
    if (isset($_GET["makemap"])) {
        //dump the database and json encode
        $query = "SELECT `index`, `latitude`, `longitude`, `tip` FROM us_tip_data ORDER BY `index` DESC LIMIT 1000";
        $output = array();
        $result = $conn->query($query);

        while($row = $result->fetch_assoc()) {
            array_push($output, array(floatval($row['latitude']), floatval($row['longitude']), floatval($row['tip'])));
        }
        
        echo json_encode($output);
    }

?>
