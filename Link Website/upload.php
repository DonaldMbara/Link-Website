<?php
if(isset($_POST['submit'])){
    $file = $_FILES['file'];

    //get the name,temporary name, size and error(if any)
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];

    //get file extension
    $fileExt = explode('.',$fileName);
    //covert it to lower case
    $fileActualExt = strtolower(end($fileExt));
    //array of allowed files extensions
    $allowed = array('jpg','jpeg','png','pdf');

    // first if statement checks if file extension of file is one of the allowed
    if(in_array($fileActualExt,$allowed)){
        //check if there is an error
        if($fileError == 0){
            //check size is acceptable
            if(fileSize < 5120){
                //give file uniqueId to avoid duplicates(overwriting)
                $fileNameNew = uniqid('',true).".".$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName,$fileDestination);
                header("Location : html/profession.html");
                header("Location : index.php?uploadsuccess");
            }else{
                echo "Your file too big";
            }

        }else{
            echo "There was an error";
        }
    }else{
        echo "You cannot uploads files of this type!";
    }
}
