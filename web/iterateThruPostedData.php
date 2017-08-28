<?php


	$numberOfQuestions = (int) $_POST["numberOfQuestions"];
        $numberOfQuestions++;

        for ($j = 1; $j<$numberOfQuestions;$j++){
              echo 'Answer: ' .    $_POST[(string)$j] . "<br>";
        }

?>
