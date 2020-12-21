var timeObject = {
  "00" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "01" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "02" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "03" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "04" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "05" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "06" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "07" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "08" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "09" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "10" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "11" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "12" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "13" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "14" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "15" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "16" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "17" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "18" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "19" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "20" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "21" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "22" : {
    "00" : ["Available"],
    "30" : ["Available"]
  },
  "23" : {
    "00" : ["Available"],
    "30" : ["Available"]
  }
}
window.onload = function what(){
  document.getElementById("log-btn").disabled = true;
};
  function changeForm(mon){

    if(mon == 0){
      return "January";
    }
    else if(mon == 1){
      return  "February";
    }
    else if(mon == 2){
      return  "March";
    }
    else if(mon == 3){
      return  "April";
    }
    else if(mon == 4){
      return  "May";
    }
    else if(mon == 5){
      return "June";
    }
    else if(mon == 6){
      return  "July";
    }
    else if(mon == 7){
      return  "August";
    }
    else if(mon == 8){
      return  "September";
    }
    else if(mon == 9){
      return  "October";
    }
    else if(mon == 10){
      return  "November";
    }
    else if(mon == 11){
      return  "December";
    }

  }
  let theDay = localStorage.getItem("keyDay");
  let theMonth = localStorage.getItem("keyMonth");
  let theYear = localStorage.getItem("keyYear");
  let studentNumber = localStorage.getItem("key");
  let firstname = localStorage.getItem("Fname");
  // alert(studentNumber);

  let month = changeForm(theMonth);




  $('#text1').html("Day : ".concat(theDay));
  $('#text2').html("Month : ".concat(month));
  $('#text3').html("Year : ".concat(theYear));
  var mins;
  var hour;
  window.onload = function(){
    var hourSel = document.getElementById("hour");
    var minSel = document.getElementById("min");
    var av = document.getElementById("avail");
    for (var x in timeObject){
      hourSel.options[hourSel.options.length] = new Option(x,x);
    }

    hourSel.onchange = function(){
      for(var y in timeObject[this.value]){
        minSel.options[minSel.options.length] = new Option(y,y);

      }
      var $option = $(this).find('option:selected');
      hour = $option.val();
      // alert(value);
    }


    minSel.onchange = function(){
      var z = timeObject[hourSel.value][this.value];
      for(var i=0;i < z.length;i++){
        av.options[av.options.length] =new  Option(z[i], z[i]);
      }
      var $option = $(this).find('option:selected');
      mins = $option.val();
      // alert(mins);
      document.getElementById("log-btn").disabled = false;
    }
  }


  function clickFunction(){
    // alert(hour + ":" + mins);
    $.ajax({
      header: {"Access-Control-Allow-Origin" :"*"},
      type: "POST",
      url:'https://lamp.ms.wits.ac.za/~s1819369/event.php',
      data:{
        day: theDay,
        month: theMonth,
        time: hour + ":" + mins,
        year: theYear,
        Firstname: firstname,
        studentNo: studentNumber,
        aval: "1"
      },

      success: function (data){
        alert(data);
        window.location.href = "../html/profile.html";
      }

    });
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


    function s3(vals){

        let sum = 0;

        vals.forEach((val) => {
            sum += val;
        });

        return sum;
    }

    function p3(vals){

        return vals.filter((x) => { return x > 0; });
    }

    function n3(vals){

        return vals.filter((x) => { return x < 0; });
    }

  module.exports = { sum, positive, negative,s1,p1,n1,s2,p2,n2,s3,p3,n3};
