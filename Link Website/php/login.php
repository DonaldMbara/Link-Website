<?php
    include("connect.php");
    session_start();

     if($_SERVER["REQUEST_METHOD"] == "POST") {
          // studentNo and password sent from form

          $studentNo = mysqli_real_escape_string($conn,$_POST['studentNo']);
          $pass = mysqli_real_escape_string($conn,$_POST['password']);
          $hash_pass = sha1($pass);

          $sql = $sql_qry = "select Username from registration where StudentNo ='$studentNo' and Password = '$hash_pass'";
          $result = mysqli_query($conn,$sql);
          $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
          $active = $row['active'];

          $count = mysqli_num_rows($result);

          if($count == 1) {
             session_register("studentNo");
             $_SESSION['login_user'] = $studentNo;

          }else {
             $error = "Your Login Name or Password is invalid";
          }
       }

?>