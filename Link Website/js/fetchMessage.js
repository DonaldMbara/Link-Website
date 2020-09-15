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
