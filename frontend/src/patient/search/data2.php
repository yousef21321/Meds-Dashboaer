<?php
$host = 'localhost';
$username = 'root';
$password ='';
$db_name ='medicine';
$con= mysqli_connect($host,$username,$password,$db_name);
$resultset = mysqli_query($con ,"SELECT * from meds");
$json_array =array();
while($row = mysqli_fetch_assoc($resultset))
{
    $json_array[]=$row;
}
$json_data = json_encode($json_array);

// Save the JSON data to a file
$file_name = 'TemplateData.json';
$file_path = 'C:\\Users\\Yousef\\Desktop\\React\\frontend\\src\\patient\\search\\' . $file_name;
file_put_contents($file_path, $json_data);

echo "JSON data saved to $file_path";
?>
