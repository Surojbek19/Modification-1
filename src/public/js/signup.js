console.log("Signup frontend javascript file");


 $(function() { });

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const membetPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();
   
    if(
        memberNick === "" ||
        membetPhone === "" ||
        memberPassword === "" ||
        confirmPassword === "" 
    ) {
        alert("Please insert all required input");
        return false;
    }

    if(memberPassword !== confirmPassword) {
        alert("Password differs, please ckeck!");
         return false;
    }
   
    }