$(document).ready(function () {
    $('#prof_form').submit(function (e) {
        e.preventDefault();
        var fd = new FormData();

        let course = $( "#course option:selected" ).text();
        let studentNo = localStorage.getItem("key");
        var d1 = new Date($('#datemax').val());
        let day = d1.getDate();
        let month = d1.getMonth() + 1;
        let year = d1.getFullYear();
        let sDate = [day, month, year].join('/');

        var d2 = new Date($('#datemin').val());
        let day1 = d2.getDate();
        let month1 = d2.getMonth() + 1;
        let year1 = d2.getFullYear();
        let eDate = [day1, month1, year1].join('/');

        var image = "image/" + localStorage.getItem("key");
          var files = $('#img')[0].files[0];

          fd.append('file',files);
          fd.append('courseID', course);
          fd.append('studentNo',studentNo);
          fd.append('sDate',sDate);
          fd.append('eDate',eDate);

            $.ajax({
                header: {"Access-Control-Allow-Origin": "*"},
                type: "POST",
                processData: false,
                contentType: false,
                url: 'https://lamp.ms.wits.ac.za/~s1819369/prof.php',
                data:fd,
                success: function (data) {

                    alert(data);
                    window.location.href = "../html/profile.html";


                },
            });





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
