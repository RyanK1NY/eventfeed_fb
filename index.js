// Eventfeed JS
var facebook = "hello";

function get_credentials(){
    // $(document).ready(function(){
    //     $.getJSON("credentials.json", function (data) {
    //         $.each(data, function (index, value) {
    //             console.log(value);
    //         });
    //     });
    // });
    credentials = {
        "id": "id",
        "secret": "secret"
    };
    return credentials;
}

window.fbAsyncInit = function() {
    FB.init({
        appId            : 'id',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
    // login_status();
    fb_login();
    // read_last_name();
    auth_response();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//RK 09/09/2017 not fb default functions
//https://developers.facebook.com/docs/facebook-login/webe
// checks if user is logged in
function login_status(){
    FB.getLoginStatus(function(response){
        console.table(response);
    });
}

function fb_login(){
    FB.login(function(response){
        console.table(response);
    });
}


function read_last_name(){
    FB.api('/me', {fields: 'last_name'}, function(response) {
        console.table(response);
    });
}

function auth_response(){
    FB.getLoginStatus(function(response) {
        if(response == null){
            console.log("womp womp");
        }
        else{
            console.table(response);
        }
    });
}


