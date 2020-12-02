function validation() 
{
    var form = document.getElementById("form");                 //Grabbing the user input// 
    var email = document.getElementById("email").value;         //Grabbing the user input// 
    var text = document.getElementById("text");                 //Grabbing the user input// 
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;                  //Declaring the correct email address formula//

    if (email.match(pattern))
    {
        form.classList.add("valid");                            //if email matches the pattern, add "valid class"//
        form.classList.remove("invalid");                       //Obviusly, if it matches the given pattern, then just remove "invalid class"//
        text.innerHTML = "Email is valid";                      //Insert "Email is valid" message into the web page//
        text.style.color = "#00ff00"                            //Just wanted to display the message declared above in green color//
    }

    else if (email == "")                                      
    {
        form.classList.remove("valid");                        //if the answer is empty, then it's not the correct answer so remove it from "valid class" meaning valid answers 
        form.classList.add("invalid");                         //then mark it as "invalid class" meaing add it incorrect answers
        text.innerHTML = "Email must be filled";               //display the given message if someone leaves the email blank
    }

    else
    {
        form.classList.remove("valid");                         //if the input does not match the pattern, then remove it from "valid class" //
        form.classList.add("invalid");                          //and add it as an "invalid class", basically mark it as an incorrect answer //
        text.innerHTML = "Email is Invalid";                    //again show message
        text.style.color = "#ff0000"                            //display
    }

}