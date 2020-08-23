$(document).ready(function () {


    let arrayName = []

    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {
                me = value;

                username += '<div  style="background-color: lightyellow; padding-left:10px ;">'+ '<tr>' ;
                username += '<td>' + ' <button style="width: 250px;"  onclick="alert(1)" ><li>'+
                    value.Username  + '</li></button> '+'</td>' ;
                username +=  '</tr>' + '</div>';



            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });
});