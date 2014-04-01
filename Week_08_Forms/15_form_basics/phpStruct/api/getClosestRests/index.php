<?

require('../app/api.php');

// if you need post content
$someContent = $_POST[ 'someContent' ];

$req = new FactualAPI();
$myRes = $req->getClosestRests();

echo $myRes;

// javascript ajax would make call to: php/api/getClosestRests/