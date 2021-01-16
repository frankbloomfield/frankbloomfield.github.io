const express = require("express");
const app = express()



function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "https://connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(app, 'script', 'facebook-jssdk'));

// const url = "https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&
//   client_id="++""&
//   client_secret="++"}&
//   fb_exchange_token={short-lived-user-access-token}"
//
// function httpGet(url)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

app.listen(3000,function(){
  console.log("Website listening on port 3000");
});
