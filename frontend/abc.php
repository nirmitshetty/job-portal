
<?php
   // connect to mongodb
   $m = new MongoClient();
   echo "Connection to database successfully";

   // select a database
   $db = $m->Job_portal.Users;

   echo "Database mydb selected";
   $collection = $db->createCollection("mycol");
   echo "Collection created succsessfully";
?>
<?php

// Get the user id
$user_id = $_REQUEST['uci_id'];

// Database connection
$con = mysqli_connect("localhost", "root", "", "gfg");

if ($user_id !== "") {

	// Get corresponding first name and
	// last name for that user id
	$query = mysqli_query($con, "SELECT first_name,
	last_name FROM Users WHERE uci_id='$uci_id'");

	$row = mysqli_fetch_array($query);

	// Get the first name
	$first_name = $row["first_name"];

	// Get the first name
	$last_name = $row["last_name"];
}

// Store it in a array
$result = array("$first_name", "$last_name");

// Send in JSON encoded form
$myJSON = json_encode($result);
echo $myJSON;
?>
