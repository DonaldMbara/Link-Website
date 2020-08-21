$(document).ready(function () {





    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {

                username += '<div class="w3-container w3-left-align w3-padding-10 " style="background-color: lightyellow;">'+
                    '<tr>' ;
                username += '<td ">' + ' <a href="#" onclick="alert(1)" ><li>'+
                    value.Username  + '</li></a> '+'</td>' ;
                username +=  '</tr>' + '</div>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });

    //this executes after you pressed the send button, and uploads the send
    $('body').on('click', '#comment_button', function(e){
        id = $(this).parents()[0];
        id2 = $(this).parents()[1];
        answer_id = $(id2).find('.message_card').attr('id');
        comment = $(id).find('.message_input').val();
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/insertMessage.php',
            data:{message:answer,sender:username,receiver:"dddd", rStudNum:1111,sStudNum:12323},
            success: function (data, status) {
                window.location.reload(true);

            }
        });
    });



    //this takes the message and post it then reloaads the page
    $('body').on('click', '#send_message', function(e){
        parent = $(this).parents()[0];
        answer = $("#"+parent.id).find('#message_input').val();
        author = "mj";
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/getMessages.php',
            data:{message:answer,sender:username,receiver:"dddd", rStudNum:1111,sStudNum:12323},
            success: function (data, status) {
                window.location.reload(true);

            }
        });
    });


})


