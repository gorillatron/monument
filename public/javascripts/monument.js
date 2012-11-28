(function() {
  var $email, $send
  
  $email = document.getElementById("email")
  $send = document.getElementById("send")

  $email.addEventListener("keyup", function( event ){
    if( $email.value.length > 0 ) {
      $send.className = "active"
    } else {
      $send.className = ""
    }
    if(event.keyCode == 13) {
      sendHandler()
    }
  }, false)

  function sendHandler(){
    var email

    if(!$send.className.match("active")) return null
    email = $email.value
    sendEmail(email, function(err, res){
      if(err) {
        if(err.code == 11000) {
          // duplicate
        } else if(err.name == "ValidationError") {
          // ugyldig
        }
      } else {
        console.log("success")
      }
    })
  }


  $send.addEventListener("click", sendHandler, false)

  function validateEmail(email) {
    return true
  }

  function sendEmail(email, cb) {
    var request, response

    request = new XMLHttpRequest

    if(!validateEmail(email)) {
      return cb("epost adressen din er ikke gyldig")
    }

    request.onreadystatechange = function(){
      if (request.readyState === 4) {
        if (request.status === 200) {

          response = request.responseText

          try {
            response = JSON.parse(response)
          } catch(e) {
            return cb("teknisk dritt på serveren gjorde at forespørselen feilet")
          }

          if(response.error) {
            return cb(response.error)
          }

          cb(null, response)
        } else {
          cb("teknisk dritt på serveren gjorde at forespørselen feilet")
        }
      }
    }

    request.open("POST", "/requestinformation")
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send("email=" + encodeURIComponent(email))
  }

})();