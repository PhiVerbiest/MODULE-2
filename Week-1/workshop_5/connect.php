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

    $conn = new mysqli('localhost', 'root', 'test');
    if ($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into test(voornaam, achternaam, email, website, opmerkingen);
        values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssi",$voornaam, $achternaam, $email, $website, $opmerkingen);
        $stmt->execute();
        echo "registratie voldaan...";
        $stmt-close();
        $conn->close();
    }
?>