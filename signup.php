
<?php

    $servername = "localhost";
    //$username = "teamSiesta";
    //$password = "920407";
    $dblogin = "root";
    $password = "root";
    $dbname = "Siesta";

    $UserName = $_POST['username'];
    $passWord = $_POST['password'];
    $email = $_POST['email'];
    //$email = "bw@example.com";
    $campus = $_POST['campus'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dblogin, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $checkUsers="SELECT * FROM UserInfo WHERE Email = '$email'";
    $statement = $conn->prepare($checkUsers);
    $statement->execute();
    $rowcount = $statement->rowCount();
    echo $rowcount;

   if ($rowcount == 0){
        echo "New record created successfully";
        $sql = "INSERT INTO UserInfo (Displayname, PassWord, Email, Campus)
        VALUES ('$UserName' ,'$passWord', '$email', '$campus');"; 
         
        $conn->exec($sql);
        
        
         include('login.html');              
        } else if($rowcount > 0) {
        //include('signUp.html'); 
         echo "user already exists";
         include('signUp.html');
       }
    }
 catch(PDOException $e)
        {
        echo $sql . "<br>" . $e->getMessage();
        }

$conn = null;
?>

  </body>
</html>