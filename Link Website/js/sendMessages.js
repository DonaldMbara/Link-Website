$(document).ready(function () {

    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {


                username +=
                    '<tr>' ;
                username += '<td >' +
                    value.Username  +'</td>';
                username += '<td>' + '<button class="ebtn">' + 'View</button>' + '</td>';
                username +=  '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });

    $('#table').on('click', '.ebtn', function(){
        //alert("Marcel");
        var row= $(this).closest("tr");
        var name = row.find("td:eq(0)").text();
        // window.location("events.html");
        document.getElementById("recName").innerHTML = name; //set username
        localStorage.setItem("uName",name);
        // alert(name);
    });


    $('#sending_message').submit(function (e) {
        e.preventDefault();




        let sender_name = localStorage.getItem("username");
        let receiver_name = localStorage.getItem("uName");
        let receiver_stud = '';
        let sender_stud =  localStorage.getItem("key");
        let message = document.getElementById("message_input").value;






        //Checking validation of our inputs
        if (message.length < 1 ) {
            alert("You cant send an empty message");
        }else {



                $.ajax({
                    header: {"Access-Control-Allow-Origin": "*"},
                    type: "POST",
                    url: 'https://lamp.ms.wits.ac.za/~s1819369/insertMessage.php',
                    data: {
                        message: message,
                        sender: sender_name,
                        receiver: receiver_name,
                        rStudNum: receiver_stud,
                        sStudNum: sender_stud

                    },
                    success: function (data) {
                        $('#message_input').val("");//clear
                    },
                });




        }

    });



});
