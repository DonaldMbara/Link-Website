$(document).ready(function () {



    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {

                username += '<tr>' ;
                username += '<td>' + ' <a href="#"><li>'+
                    value.Username  + '</li></a> '+'</td>' ;
                username += '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });
});