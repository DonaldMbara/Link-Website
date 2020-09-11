function getDetails(receiver_stud,sender_stud) {
    $.ajax({
        header: {"Access-Control-Allow-Origin": "*"},
        datatype: 'json',
        type: "POST",
        url: 'https://lamp.ms.wits.ac.za/~s1819369/fetch_messages.php',
        data: {
            id: sender_stud,
            userid: receiver_stud
        },
        success: function (data, status) {


            var data = jQuery.parseJSON(data);
            var source = $("#chats_template").html();
            var template = Handlebars.compile(source);
            $('.chatlogs').append(template(data));

        }
    });


    // alert(name);

}