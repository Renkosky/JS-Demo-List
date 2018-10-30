<?php
//  header("Content-Type: text/plain");
  header("Content-Type: application/json;charset=utf-8");
  $staff =   array('name' => "phil", 'age' => "21","number" => "1");

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    search();
  } else {
    # code...
  };
   function search()
  {
    if (!isset($_GET['number']) || empty($_GET['number'])) {
      echo '{"success":false,"msg":"参数错误"}';
    }
      global $staff;
      $number = $_GET['number'];
      if ($staff["number"] == $number) {
        echo '{"success":true,"msg":"找到员工:'.$staff["name"].'"}';
      }
    }

?>
