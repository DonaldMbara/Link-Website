

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
