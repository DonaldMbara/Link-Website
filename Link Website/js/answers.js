
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
//called to upload comments
const obj5 = {
comment_upload(comment,username, answer_id){
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
//called to upload answers
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

  showHide(answer_id){
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

$(document).ready(function(){
   var courseid = localStorage.getItem("courseid");
   var post_id = localStorage.getItem("post_id");
   var author = localStorage.getItem("author");
   var question = localStorage.getItem("question");
   var date = localStorage.getItem("date");
   var likes = localStorage.getItem("likes");
   var userid = localStorage.getItem("userid");
   var username = "noName";

   $('.author').text(author);
   $('.question_content').text(question);
   $('.date').text(date);
   $('.like_button').text(likes);

//this gets all the answers to the selected question.
  obj.getAnswers(post_id);
//this just returns the users names.
  obj2.setUsername(userid);

//this likes the question and decrease or increase the likes.
$('body').on('click', '.like_button',function(e) {
    obj3.like(post_id, userid);
});

//this takes inn the answer like minus or add likes.
$('body').on('click', '#like_button',function(e) {

  id = $(this).parents()[0].id ;
   obj4.likeA(id,userid);
});

//when you press the answer you view or hide comments
$('body').on('click', '#answer_content', function(){
     var answer_id = $(this).parents()[0].id;

     var id = $(this).parents()[1];
    if($(id).find('#comment-box').hasClass('hidden')){
     obj7.showHide(answer_id);

    }
   else{
     $(id).find('#comment-box').addClass('hidden');
   }

});

//this executes after you pressed the comment button, and uploads the comment
$('body').on('click', '#comment_button', function(e){
    id = $(this).parents()[0];
    id2 = $(this).parents()[1];
    answer_id = $(id2).find('.answer_card').attr('id');
    comment = $(id).find('.comment_input').val();
     obj5.comment_upload(comment, username, answer_id);
});

//this takes the answer and post it then reloaads the page
$('body').on('click', '#answer_button', function(e){
    parent = $(this).parents()[0];
    answer = $("#"+parent.id).find('#answer_input').val();
    obj6.postAnswer(username,post_id, answer);

});

});
module.exports = {obj,obj2,obj3,obj4,obj5,obj6, obj7};
