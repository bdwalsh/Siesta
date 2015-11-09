<?php
include ("dataBaseConnection.php");

$methodType = $_SERVER['REQUEST_METHOD'];

if($methodType === "POST"){

global $connect;


$Email = $_POST['Email'];




//checkUserName
$sql  =  "SELECT * FROM UserInfo WHERE Email = :Email";
$stmt = $connect->prepare($sql);
$stmt->execute(array(':Email' => $Email));
$userCount = $stmt->rowCount();
//echo json_encode($userCount);

//user exist
if($userCount != 0){
$result = array(
				"Status" => "Email is taken",
				);

	}



//no user exist
else if($userCount === 0){

global $connect;

$Displayname = $_POST['Displayname'];
$PWord = $_POST['Password'];
global $Email;
$Campus = $_POST['Campus'];
$ProfileImage = "";

$signUp =  "INSERT INTO UserInfo (Displayname, PassWord, Email, Campus, ProfilePicture) VALUES (:Displayname, :PassWord, :Email, :Campus, :ProfileImage)";
$account = $connect->prepare($signUp);

$account->execute(array(
				':Displayname' => $Displayname,
				':PassWord' => $PWord,
				':Email' => $Email,
				':Campus' => $Campus,
				':ProfileImage' => $ProfileImage
				));
				


if ($account == 1){
$result = array(
				"Status" => "Success",
				"Displayname" => $Displayname
				);
//echo json_encode($status);
	}


}

echo json_encode($result);


}

?>