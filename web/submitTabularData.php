<?php

	class Person {
		public $firstname;

		public $lastname;
	}

	class Team{

		public $name;

		public $batsman;
	
		public $bowlers;

		public $standard;

	}

	$team = new team();

	$team->batsman = array();
	$team->bowlers = array();

	$x = $_POST["col1"];
	$y = $_POST["col2"];

	$team->batsman = build( $_POST["col1"], $_POST["col2"] );
	$team->bowlers = build( $_POST["col3"], $_POST["col4"] );

        function build($firstname, $lastname){
		$arrlength = count($firstname);
		
		 $list = array();

		for($i = 0; $i < $arrlength; $i++) {

			$p = new Person();

			$p->firstname = $firstname[$i];
			$p->lastname  = $lastname[$i];

			array_push($list, $p );

		}


		return $list;
	}

	$team->name     = $_POST["name"];
	$team->standard = $_POST["standard"];


	echo json_encode($team);

?>
