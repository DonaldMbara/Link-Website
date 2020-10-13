function getDetails(receiver_stud,sender_stud) {
    var current_user = localStorage.getItem("key");
    $.ajax({
        header: {"Access-Control-Allow-Origin": "*"},
        datatype: 'json',
        type: "POST",
        url: 'https://lamp.ms.wits.ac.za/~s1819369/fetch_messages.php',
        data: {
            id: sender_stud,
            userid: receiver_stud
        },
        success: function (data, status){
            var data = jQuery.parseJSON(data);
            var output = '<div class="container">';
            $.each(data, function(key, value){
              if(value.sender_id == current_user){

                output += '<div id = "right" class="right_message_card">';
                output += '<div id = "i_holder" class="div">';
                output += '<i class="fa fa-ellipsis-v option" id ='+ value.id+'>'+'</i>';
                output += '<div class="dropdown-content">'
                output += '<a class="delete" href="#">'+ "delete" +'</a>'
                output += '</div>';
                output += '</div>';
                output += '<p id="comment_p">' + value.message + '</p>';
                output += '<p id="sender_div" class= "in">' + value.sender + '</p>';
                output += '<p id="time_div" class="in">' + value.time + '</p>';
                output += '</div>';
                 }
               else{
                 output += '<div id = "left" class = "left_message_card">';
                 output += '<p id="comment_p">' + value.message + '</p>';
                 output += '<p id="sender_div" class= "in">' + value.sender + '</p>';
                 output += '<p id="time_div" class="in">' + value.time + '</p>';
                 output += '</div>';
               };

                });
            output += '</div>';
            $('.chatlogs').html(output);
      }
    });
     

};


function s1(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

function p1(vals){

    return vals.filter((x) => { return x > 0; });
}

function n1(vals){

    return vals.filter((x) => { return x < 0; });

}


const obj8 = {
 s1(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}
};

const obj9 = {
p1(vals){

    return vals.filter((x) => { return x > 0; });
}

}

obj10 = {
n1(vals){

    return vals.filter((x) => { return x < 0; });
}
}


const obj11 = {
 s1(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}
};

const obj12 = {
p1(vals){

    return vals.filter((x) => { return x > 0; });
}

}

obj13 = {
n1(vals){

    return vals.filter((x) => { return x < 0; });
}
}
module.exports = { s1, p1, n1,obj8,obj9,obj10,obj11,obj12,obj13};
