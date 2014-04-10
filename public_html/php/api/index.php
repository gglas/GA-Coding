<?php

// if you need post content

$lat = $_GET[ 'lat' ];
$long = $_GET[ 'long' ];

require_once('factual/Factual.php');

$factual = new Factual("0i3snM8LWXa9utoqmFpv5djhUacGNwkakRWya4dG", "y87fwqqKR1Bsllfdd4FTHmGlxHBeFbtjvCBgZy3C");

// lets build up the query
$query = new FactualQuery;
$query->within(new FactualCircle($lat, $long, 2000));
$query->search('tacos');
$query->limit(10);

// lets execute/run the query
$res = $factual->fetch("places", $query);

// lets print it / return it to the client side
print_r($res->getJson());

?>
