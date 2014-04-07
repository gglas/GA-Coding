<?

require('../app/api.php');

// if you need post content
$latLong = $_POST[ 'latLongValue' ];

$req = new FactualAPI();
$myRes = $req->getClosestRests();

echo $myRes;

// javascript ajax would make call to: php/api/getClosestRests/