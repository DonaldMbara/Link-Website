var userid;
var username = "noName";

const obj = {
    getAnswers(post_id){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            type: 'GET',
            url:'https://lamp.ms.wits.ac.za/~s1819369/Sort.php',
            data:{post_id : post_id},
            datatype:'json',
            success: function (data, status){
                var data = jQuery.parseJSON(data);
                var source = $("#answers_template").html();
                var template = Handlebars.compile(source);
                $('body').append(template(data));

            }
        });

        return 1;
    }
};
//fhgjhkj
//sets the username
const obj2 = {
    setUsername(userid){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            type: 'GET',
            url:'https://lamp.ms.wits.ac.za/~s1819369/getName.php',
            data:{studentNo : userid},
            datatype:'json',
            success: function (data, status){
                data = jQuery.parseJSON(data);
                $.each(data, function(key, value){
                    username = value.Username;
                });

            }
        });
        return 1;
    }
};

//liking a q
const obj3 = {
    like(post_id, userid){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/Testing.php',
            data:{id:post_id, userid:userid},
            success: function (data, status) {
                $(this).val(data.likes);
                window.location.reload(true);

            }
        });
        return 1;
    }

};

//liking a answer
const obj4 = {
    likeA(id,userid){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/Testing2.php',
            data:{id:id, userid:userid},
            success: function (data, status) {
                $(this).val(data.likes);
                window.location.reload(true);

            }
        });
        return 1;
    }
};
//called to uploads comments
const obj5 = {
    comment_upload(comment,username, answer_id,){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/comments.php',
            data:{post_id:answer_id, author:username, comment:comment},
            success: function (data, status) {
                window.location.reload(true);
            }
        });
        return 1;
    }
};
//called to uploads answers
const obj6 = {
    postAnswer( username, post_id ,answer){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            datatype:'json',
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/addAns.php',
            data:{author:username, post_id:post_id, answer:answer},
            success: function (data, status) {
                window.location.reload(true);
            }
        });
        return 1;
    }
};

//show or hide comments
const obj7={

    showHide(answer_id , id){
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            type: 'GET',
            url:'https://lamp.ms.wits.ac.za/~s1819369/comments.php',
            data:{post_id :answer_id},
            success: function (data, status){
                data = jQuery.parseJSON(data);
                var output = '<div class="container">';
                $.each(data, function(key, value){
                    output += '<h5>' + value.author + '</h5>';
                    output += '<p id="comment_p">' + value.comment + '</p>'
                });

                output += '</div>';
                $(id).find('#comments_holder').html(output);

                $(id).find('#comment-box').removeClass('hidden');

            }
        });
        return 1;
    }
};



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
module.exports = {obj,obj2,obj3,obj4,obj5,obj6, obj7, obj8, obj9,obj10,obj11,obj12,obj13};