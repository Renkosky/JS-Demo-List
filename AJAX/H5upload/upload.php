<?php
  //print_r($_FILES);
  $filename = $_FILES['fileToUpload']['name'];
  $type = $_FILES['fileToUpload']['type'];
  $tmp_name = $_FILES['fileToUpload']['tmp_name'];
  $size = $_FILES['fileToUpload']['size'];
  $error = $_FILES['fileToUpload']['error'];
//将服务器上的临时文件移动到指定目录下
  if ($error == UPLOAD_ERR_OK) {
    if (move_uploaded_file($tmp_name, "upload/".$filename)) {
      echo $filename.'upload success';
    }else{
      echo $filename.'upload false';
    }
  }else {
    switch ($error) {
      case 1:
        echo '上传文件超过PHP配置中upload_max_filesize的值';
        break;
      case 2:
        echo '上传文件超过PHP配置中MAX_FILE_SIZE的值';
      case 3:
        echo '文件部分被上传';
      case 4:
        echo '没有文件选择上传';
      case 6:
        echo '没有找到目录';
      case 7:
      case 8:
        echo '系统错误';
      default:
        # code...
        break;
    }
  }
//move_uploaded_file($tmp_name,$destination)
move_uploaded_file($tmp_name, "upload/".$filename)
//copy($tmp_name, $destination)拷贝文件到指定目录，成功返回true失败返回false
?>