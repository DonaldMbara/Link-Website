// live search




const sum1 = (vals) => {

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

const positive1 = (vals) => {

    return vals.filter((x) => { return x > 0; });
}

const negative1 = (vals) => {

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
module.exports = { sum1, positive1, negative1, search, clear, delete_q,s2,p2,n2, s3,p3,n3};
