<?php

include_once('../detached/Detached.php');

$dude = "nuragic";
$file= "experience.json";

$detached_in = new Detached($dude);
$result = $detached_in->getExperience();
$detached_in->cleanUp();

if ($result) {

  $result = json_encode($result);
  file_put_contents($file, $result);

  header('Content-type: application/json');
  echo $result;

} else {
  throw new Exception("Error Processing Request. No result.", 1);
}