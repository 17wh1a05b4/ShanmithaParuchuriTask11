<head>
<script>

function formValidation() {
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ustate = document.registration.state;
var uemail = document.registration.email;
var uphone = document.registration.phone;
if(userid_validation(uid,5,12)) {
if(passid_validation(passid,8,16)) {
if(allLetter(uname)) {
if(alphanumeric(uadd)) {
if(stateselect(ustate)) {
if(ValidateEmail(uemail)) {
if(allnumeric(uphone)) {
alert('Your response is submitted successfully.');
window.location.reload()
} } } } } } }
return false;
}
function userid_validation(uid,mx,my) {
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx) {
alert("User Id should not be empty/length should be between "+mx+" and "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my) {
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx) {
alert("Password should not be empty/length should be in between "+mx+" and "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname) {
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters)) {
return true;
} else {
alert('Only alphabets allowed in Username');
uname.focus();
return false;
} }
function alphanumeric(uadd) {
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters)) {
return true;
} else {
alert('Only alphabets allowed in user address');
uadd.focus();
return false;
} }
function stateselect(ustate) {
if(ustate.value == "Default") {
alert('Please select your state');
ustate.focus();
return false;
} else {
return true;
}
}
function ValidateEmail(uemail) {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat)) {
return true;
} else {
alert("Invalid Email! Please try again.");
uemail.focus();
return false;
}
function phone(uphone) {
var numbers = [0-9];
if(uphone.value.match(numbers)) {
return true;
} else {
alert('Only Numeric characters allowed in phone number.');
upin.focus();
return false;
}
}
}

</script>
</head>