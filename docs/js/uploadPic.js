
//Adding a submit function to the form
$('#uploads').submit(function(e){

     e.preventDefault();




    $.ajax({

        url: "https://lamp.ms.wits.ac.za/~s1819369/profpic.php",

        //For file uploads we use post request
        type: "POST",

        //Creating data from form
        data: new FormData(this),

        //Setting these to false because we are sending a multipart request
        contentType: false,
        cache: false,
        processData: false,
        success: function(data){
            //If the request is successfull we will get the scripts output in data variable
            //Showing the result in our html element
            alert(data);
        },
        error: function(){}
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
