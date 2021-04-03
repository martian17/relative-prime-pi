var generateVeryLargeSafeInt = function(){
    return Math.floor(Number.MAX_SAFE_INTEGER/10*Math.random());
};

var findCommonFactor = function(a,b){
    if(a === b){
        return a;
    }
    while(a !== b){
        var c;
        if(a < b){
            c = b;
            b = a;
            a = c;
        }//now a is larger than b
        c = a - b;
        a = c;
    }
    return a;
};



var primesum = 0;
var wholesum = 0;
var loop = function(){
    if(1 === findCommonFactor(generateVeryLargeSafeInt(),generateVeryLargeSafeInt())) {
        primesum++;
    }
    wholesum++;
};

var animate = function(){
    for(var i = 0; i < 10000; i++){
        loop();
    }
    var zeta2 = (wholesum/primesum);
    var pi = Math.sqrt(zeta2*6);
    document.getElementById("display").innerHTML = "π = "+pi;
    setTimeout(animate,20);
}

animate();
