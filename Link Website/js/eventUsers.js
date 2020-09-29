$(document).ready(function () {
  var querySet;
    $('#table tr').click(function() {
        $('#user_chat').html('dtfyguh');

    });


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

        let name = "Nobody";



        $('#table').on('click', '.ebtn', function(){
          // alert("Marcel");
          $("div.card").remove();
          var row= $(this).closest("tr");
          var name = row.find("td:eq(0)").text();
          // window.location("events.html");
          getEvent(name);
          window.scrollTo(0,0);
        });

        // getEvent("Marcel");


        function getEvent(name){

        $.ajax({
           header: {"Access-Control-Allow-Origin" :"*"},
           type: 'GET',
           url:'https://lamp.ms.wits.ac.za/~s1819369/getevent.php',
           data:{fname:name},
           datatype:'json',
           success: function (data, status){

              var data = jQuery.parseJSON(data);

              for(var i =0; i< data.length; i++){
                if(data[i].Availability == 1){
                  // alert(data[0].Availability);
                    data[i].Availability = "Available";
                }
              }

              for(var i =0; i< data.length; i++){
                if(data[i].Month == 0){
                  data[i].Month = "January";
                }
                else if(data[i].Month == 1){
                  data[i].Month = "February";
                }
                else if(data[i].Month == 2){
                  data[i].Month = "March";
                }
                else if(data[i].Month == 3){
                  data[i].Month = "April";
                }
                else if(data[i].Month == 4){
                  data[i].Month = "May";
                }
                else if(data[i].Month == 5){
                  data[i].Month = "June";
                }
                else if(data[i].Month == 6){
                  data[i].Month = "July";
                }
                else if(data[i].Month == 7){
                  data[i].Month = "August";
                }
                else if(data[i].Month == 8){
                  data[i].Month = "September";
                }
                else if(data[i].Month == 9){
                  data[i].Month = "October";
                }
                else if(data[i].Month == 10){
                  data[i].Month = "November";
                }
                else if(data[i].Month == 11){
                  data[i].Month = "December";
                }
              }

              querySet = data;
              var source = $("#events_template").html();
              var template = Handlebars.compile(source);
              $('body').append(template(data));

               }

        });
      }
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

function s2(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

function p2(vals){

    return vals.filter((x) => { return x > 0; });
}

function n2(vals){

    return vals.filter((x) => { return x < 0; });
}

module.exports = { sum, positive, negative,s1,p1,n1,s2,p2,n2};
