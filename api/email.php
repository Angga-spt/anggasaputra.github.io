<?php
  $request_body = file_get_contents('php://input');
  $data = json_decode($request_body);


  $myfile = fopen("email.txt", "a") or die("Unable to open file!");
  $txt = $data->fname.' '.$data->lname .': '. $data->email .': '. $data->message . PHP_EOL;
  fwrite($myfile, $txt);
  fclose($myfile);

  $age = array("code"=>0, "status"=>"Succes", "body"=>$data);

  print_r(json_encode($age));
?>
