
//Adding a submit function to the form
$('#upload').submit(function(e){

     e.preventDefault();




    $.ajax({

        url: "https://lamp.ms.wits.ac.za/~s1819369/profpic.php",

        //For file upload we use post request
        type: "POST",

        //Creating data from form
        data: new FormData(this),

        //Setting these to false because we are sending a multipart request
        contentType: false,
        cache: false,
        processData: false,
        success: function(data){
            //If the request is successfull we will get the scripts output in data variable
            //Showing the result in our html element
            alert(data);
        },
        error: function(){}
    });
});