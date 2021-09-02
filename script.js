function trigger(){
      const indicator= document.querySelector(".indicator")
      const weak= document.querySelector(".weak")
      const medium = document.querySelector(".medium")
      const strong= document.querySelector(".strong")
      const input= document.querySelector("#password")
      const text= document.querySelector(".text")
      let regExpWeak=/[a-z]/
      let regExpMedium=/\d+/
      let regExpStrong=/[A-Z]/
      
        if(input.value!=""){
           indicator.style.display="flex"
           if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
           if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
           if(input.value.length >7 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
           if(no==1){
               weak.classList.add("active");
               text.style.display = "block";
               text.textContent = " password is weak";
               text.classList.add("weak");
               input.style.border="1px solid red"
             }
              if(no==2){
               medium.classList.add("active");
               text.textContent = "password is medium";
               text.classList.add("medium");
               input.style.border="1px solid red"
             }else{
               medium.classList.remove("active");
               text.classList.remove("medium");
               input.style.border="1px solid red"
             }
            if(no==3){
               weak.classList.add("active");
               medium.classList.add("active");
               strong.classList.add("active");
               text.textContent = "password is strong";
               text.classList.add("strong");
               input.style.border="1px solid black"
             }else{
               strong.classList.remove("active");
               text.classList.remove("strong");
               input.style.border="1px solid red"
             }
          }else{
       indicator.style.display="none"
       text.style.display = "none"
       input.style.border="1px solid black"

      }
    }
    
    function check(){
    var email= document.getElementById("email")
    var error= document.querySelector(".error-text")
    var regExp=/^[A-Za-z0-9\.-]+[@][A-Za-z0-9\-]+[\.][a-z]{2,3}(\.[a-z]{2,3})?$/
      if(email.value.match(regExp)){
        email.style.border=" 1px solid black"
        error.style.display="none"
        
       }else{
        email.style.border="1px solid red"
        error.style.display="block"
        error.style.color="red"
       }
      if(email.value==""){
        email.style.borderColor="lightgrey"
        error.style.display="none"
        email.style.border=" 1px solid black"
     
    }
  }

    
    function phonecheck(){
    var phonenumber=document.getElementById("phonenumber")
    var error=document.getElementById("invalidphonenumber")
    var regexp1=/^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$/
    var regexp2=/^[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/
    var regexp3=/^[0-9]{3}[\.][0-9]{3}[\.][0-9]{4}$/
    var regexp4=/^[0-9]{3}[0-9]{3}[0-9]{4}$/
      if (phonenumber.value.match(regexp1)||phonenumber.value.match(regexp2)||phonenumber.value.match(regexp3)||phonenumber.value.match(regexp4)) {
        error.style.display="none"
       } else {
        error.style.display="block"
        error.style.color=" red"
        phonenumber.style.border=" 1px solid red"
    }
    if (phonenumber.value=="") {
      error.style.display="none"
      phonenumber.style.border="  1px solid black"
    }
   
  }

  function passwordmatch() {
    var confirmpassword=document.getElementById("confirmpassword")
    var password=document.getElementById("password")
    var passwordmatch=document.getElementById("passwordmatch")
    if (confirmpassword.value==password.value) {
      passwordmatch.style.display="none"
      confirmpassword.style.border="1px solid black"
      
    } else {
      passwordmatch.style.display="block"
      passwordmatch.style.color="red"
      confirmpassword.style.border="1px solid red"
      
    }if (confirmpassword.value=="") {
      confirmpassword.style.border="1px solid black"
      passwordmatch.style.display="none"
    }
  }

  function validate(){
        var username=document.getElementById("username")
        var email= document.getElementById("email")
        var confirmpassword=document.getElementById("confirmpassword")
        var phonenumber=document.getElementById("phonenumber")
        var password=document.getElementById("password")
        var empty=document.getElementById("empty")
        var regexp=/^[A-Za-z0-9\.-]+[@][A-Za-z0-9\-]+[\.][a-z]{2,3}(\.[a-z]{2,3})?$/
        var regexpo=/^\d{3}[\.\-\s]?\d{3}[\.\-\s]?\d{4}$/
        var regexpoo=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
       
      
          if(password.value.match(regexpoo)&&email.value.match(regexp)&&phonenumber.value.match(regexpo)&&confirmpassword.value==password.value&&username.value!=""){
            empty.style.display="none"
            return true
          }else{
            empty.style.display="block"
            empty.style.color="red"
            return false}
                  
        }
    function loginpass(){
        var x=document.getElementById("form2Example27")
        var y=document.getElementById("loginpass")
        var regexpoo=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
        if (x.value.match(regexpoo)) {
            y.style.display="none" 
            x.style.border="1px solid black"
        } else {
            y.style.display="block"
            y.style.color="red"
            x.style.border="1px solid red"
        }if(x.value==""){
            y.style.display="none"
            x.style.border="1px solid black"
        }
    }
    function login(){
      var email= document.getElementById("email")
      var pass=document.getElementById("form2Example27")
      var regexp=/^[A-Za-z0-9\.-]+[@][A-Za-z0-9\-]+[\.][a-z]{2,3}(\.[a-z]{2,3})?$/
      var regexpoo=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
      var loginen=document.getElementById("loginend")
      if(email.value.match(regexp)&&pass.value.match(regexpoo)){
        loginen.style.display="none"
        return true
        }else{
        loginen.style.display="block"
        loginen.style.color="red"
        return false
      }
    }
