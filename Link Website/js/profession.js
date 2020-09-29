$(document).ready(function () {
    $('#prof_form').submit(function (e) {
        e.preventDefault();

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


            $.ajax({
                header: {"Access-Control-Allow-Origin": "*"},
                type: "POST",
                url: 'https://lamp.ms.wits.ac.za/~s1819369/prof.php',
                data: {
                    courseID:course,
                    studentNo:studentNo,
                    sDate : sDate,
                    eDate : eDate,
                    image:image

                },
                success: function (data) {

                    alert(data);

                },
            });





    });
});

