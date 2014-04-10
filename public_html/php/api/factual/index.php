<?php

require('api.php');

// if you need post content
// $latLong = $_GET[ 'latLongValue' ];
// $latLong = $_GET[ 'latLongValue' ];

$lat = 40.7502538;
$long = -73.9813427;


require_once('../factual-php-driver-master/Factual.php');
$factual = new Factual("0i3snM8LWXa9utoqmFpv5djhUacGNwkakRWya4dG","y87fwqqKR1Bsllfdd4FTHmGlxHBeFbtjvCBgZy3C");


$echo 'hello';


		$query = new FactualQuery;
		$query->within(new FactualCircle($lat, $long, 1000))
		$query->search("taco")
		$query->sortAsc("\$distance")
		$query->limit(3)

		// you will get some results
		$res = $factual->fetch("places",$query);
		print_r($res->getJson());
		// return JSON results


// $req = new FactualAPI();
// $myRes = $req->getClosestRests();

// echo $myRes;

// javascript ajax would make call to: php/api/getClosestRests/

?>