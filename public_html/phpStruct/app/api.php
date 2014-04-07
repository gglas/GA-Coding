<?php

require_once('../factual-php-driver-master/Factual.php');
$factual = new Factual("0i3snM8LWXa9utoqmFpv5djhUacGNwkakRWya4dG","y87fwqqKR1Bsllfdd4FTHmGlxHBeFbtjvCBgZy3C");

class FactualAPI {

	public __construct() {}

	public function getClosestRests() {
		// query for closest
		$query->within(new FactualCircle($latLong, 1000));search("taco");sortAsc("distance");limit(3)

		// you will get some results
		$res = $res->getJson();
		return $res;
		// return JSON results
	}

	// public function getHighestRated() {
	// 	// query for highest rated
	// }
}