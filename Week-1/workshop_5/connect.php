<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $voornaam = $_POST['voornaam'];
    $achternaam = $_POST['achternaam'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $opmerkingen = $_POST['opmerkingen'];

    //Datebase Create

    $conn = new mysqli('localhost', 'root', '', 'workshop_5');
    if ($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into contact(voornaam, achternaam, email, website, opmerkingen)
        values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss",$voornaam, $achternaam, $email, $website, $opmerkingen);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
?>

<?php echo "<h3>" .
            "Voornaam:" . 
        " <span style='color:red;'>" .
            $voornaam . "</span>" .
        " <span style='color:black;'>" .
            "Achternaam:" . 
        " <span style='color:red;'>" .
            $achternaam . "</span>" . "</h3>";   
?>
<?php echo "<h3>" . 
            "E-Mailadress:" .
            " <span style='color:red;'>" .
            $email . "</span>" . "</h3>";
?>
<?php echo "<h3>" . 
            "Website Naam:" . 
        " <span style='color:red;'> " . 
            $website . "</span>" . "</h3>";
?>
<?php echo "<h3>" . 
            "Bericht:" . 
        " <span style='color:red;'> " . 
            $opmerkingen . "</span>" . "</h3>";
?>
<br>
<?php echo 
        "registratie voldaan...";
?>
    


</body>
</html>   