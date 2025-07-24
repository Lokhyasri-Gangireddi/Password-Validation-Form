let pswdInpt = document.querySelector("#password");
let instructions = document.querySelector(".instructions");
let length = document.querySelector("#length");
let upcase = document.querySelector("#upcase");
let lowcase = document.querySelector("#lowcase");
let special = document.querySelector("#special");

pswdInpt.addEventListener("focus",()=>{
    instructions.style.display="block";
});

pswdInpt.addEventListener("blur",()=>{
    instructions.style.display="none";
});

pswdInpt.addEventListener("keyup",()=>{
    var lowcaseletters = /[a-z]/g;
    if(pswdInpt.value.match(lowcaseletters)){
        lowcase.classList.add("valid");
        lowcase.classList.remove("invalid");
    }
    else{
        lowcase.classList.add("invalid");
        lowcase.classList.remove("valid");
    }

    var upcaseletters = /[A-Z]/g;
    if(pswdInpt.value.match(upcaseletters)){
        upcase.classList.add("valid");
        upcase.classList.remove("invalid");
    }
    else{
        upcase.classList.add("invalid");
        upcase.classList.remove("valid");
    }

    if(pswdInpt.value.length>=8){
        length.classList.add("valid");
        length.classList.remove("invalid");
    }
    else{
        length.classList.add("invalid");
        length.classList.remove("valid");
    }

    var specialchar = /[!@#$%^&*(),.?":{}|<>]/g;
    if(pswdInpt.value.match(specialchar)){
        special.classList.add("valid");
        special.classList.remove("invalid");
    }
    else{
        special.classList.add("invalid");
        special.classList.remove("valid");
    }

});