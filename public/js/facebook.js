function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  
  console.log(response);
// 1. hide facebook login element .faceBooklogin <p> element
$(".facebookLogin").click(function(){
  $("p").hide();
});
// 2. change name Michael Bern to facebook name (#id name)
$("#name").html("Claire Huong Pham");
// 3. replace profile picture with fb profile picture (#photo)
$("#photo").attr('src',response.picture.data.url)
};