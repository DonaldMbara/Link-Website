$(document).ready(function () {

    $('#table tr').click(function() {
        $('#user_chat').html('dtfyguh');

    });


    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {

                username += '<div class="w3-container w3-left-align w3-padding-10 " style="background-color: lightyellow;">'+
                    '<tr>' ;
                username += '<td ">' + ' <a href="#" ><li>'+
                    value.Username  + '</li></a> '+'</td>' ;
                username +=  '</tr>' + '</div>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });




})
