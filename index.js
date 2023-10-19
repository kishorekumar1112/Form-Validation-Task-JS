let id = (id)=> document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
phone = id("number"),
password = id("password"),
submitbtn = id("submit-btn");
form = id("form"),

errorMsg = classes("error"),    
successIcon = classes("success-icon"),
failureIcon = classes("fail");

console.dir(successIcon);
console.dir(failureIcon)

let engine = (id,serial,message) => {
    console.log(id,message,serial);
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icon
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
        return false;
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icon
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        return true;
    }
}

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // alert("hello");
    let userv = engine(username, 0,"*Username cannot be blank");
    let em =engine(email, 1,"*Email cannot be blank");
    let ph =engine(phone,2,"Phone number cannot be blank");
    let ps =engine(password, 3,"*Password cannot be blank");

    console.log({userv,em,ph,ps});

    if (userv&&em&&ph&&ps){
        window.location.href="todo.html";
    }
});


