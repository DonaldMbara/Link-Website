$(document).ready(function () {




    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {


                username +=
                    '<tr >'  ;
                username += '<td  >' +
                    value.Username  +'</td>';
                username += '<td>' + '<button class="ebtn">' + 'Chat</button>' + '</td>';
                username += '<td style="color: lightyellow;">' + value.StudentNo +  '</td>>';
                username +=  '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });

    $('#table').on('click', '.ebtn', function(){
        //alert("Marcel");
        $("div.card").remove();
        var row= $(this).closest("tr");
        var name =  row.find("td:eq(0)").text();
        var studentNo = row.find("td:eq(2)").text();
        // window.location("events.html");
        document.getElementById("recName").innerHTML = name; //set username
        localStorage.setItem("uName",name);
        localStorage.setItem("uStdNo",studentNo);


        let receiver_stud = localStorage.getItem("uStdNo");
        let sender_stud = localStorage.getItem("key");
        getDetails(receiver_stud,sender_stud);


        // alert(name);

    });


    $('#sending_message').submit(function (e) {
        e.preventDefault();




        let sender_name = localStorage.getItem("username");
        let receiver_name = localStorage.getItem("uName");
        let receiver_stud = localStorage.getItem("uStdNo");
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
const sum = (vals) => {

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

const positive = (vals) => {

    return vals.filter((x) => { return x > 0; });
}

const negative = (vals) => {

    return vals.filter((x) => { return x < 0; });
}
module.exports = { sum, positive, negative};
