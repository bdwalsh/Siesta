
<?php
$serverName = "localhost";
$username = "root";
$password = "root";
$dbname = "Siesta";

try{
	$connect = new PDO("mysql:host=$serverName; dbname=$dbname", $username, $password);
	$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}
catch(PDOException $errorMessage){
	echo "Connection Failed: " . $errorMessage->getMessage();
}
?>
