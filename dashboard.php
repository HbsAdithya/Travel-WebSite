<?php
// Initialize the session
session_start();
 echo '<h2>Hi</h2>',$_SESSION['username'];
 echo "<br/><br/><a href='logout.php'>Logout</a>";
// If session variable is not set it will redirect to login page
if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  header("location: login.php");
  exit;
}
?>