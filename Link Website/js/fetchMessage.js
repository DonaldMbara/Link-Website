
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
