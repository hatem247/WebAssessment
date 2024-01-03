var users = [{
    username: "hatem",
    password: "Hatem1"
}];
function signup()
{
    var Username = document.getElementById('susername').value;
    var Phonenumber = document.getElementById('sphonenumber').value;
    var Password = document.getElementById('spassword').value;
    var Age = document.getElementById('sage').value;
    var Gender = document.querySelector('input[name="sgender"]:checked');
    var rex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\w).{8,20}$/
    var usernamebool = false;
    var phonebool = false;
    var passbool = false;
    var agebool = false;
    if (Username && Phonenumber && Password && Gender && Age)
    {
        var suser = users.find(u => u.username == Username);
        if(suser)
        {
            alert('Someone else have this username, Write a diffirent one :)');
        }
        else if(!suser)
        {
            usernamebool = true;
        }
        if(rex.test(Password))
        {
            passbool = true;
        }
        else if(!rex.test(Password))
        {
            alert('Please enter a valid Password contain:(Uppercases, Lowercases, Digits and Special Characters) :)');
        }
        if(Phonenumber.length == 11)
        {
            phonebool = true;
        }
        else if(Phonenumber.length != 11)
        {
            alert('Please enter a phone number in 11 digits');
        }
        if(Age < 18 || Age > 60)
        {
            alert('Age must be between 18 and 60');
        }
        else if(Age >= 18 && Age <= 60)
        {
            agebool = true;
        }
        if(usernamebool && passbool && phonebool && agebool)
        {
            users.push(
            {
                username: Username,
                phonenumber: Phonenumber,
                password: Password,
                age: Age,
                gender: Gender.value 
            });
            alert('Signup successful!');
        }
        else
        {
            alert('Invalid data :(');
        }
    }
    else
    {
        alert('Please fill all fields :)');
    }
    console.log(users);
}

function login()
{
    var lUsername = document.getElementById('lusername').value;
    var lPassword = document.getElementById('lpass').value;
    if (lUsername && lPassword)
    {
        var luser = users.find(u => u.username == lUsername && u.password == lPassword);
        if (luser)
        {
            alert('login successfully');
            window.location.href='Review.html';
        }
        else
        {
            alert('Username or Password is incorrect');
        }
    }
    else
    {
        alert('Fill all fields, Please :)');
    }
}

function forgotpass()
{
    var fUsername = document.getElementById('fusername').value;
    var fPassword = document.getElementById('fpass').value;
    if(fUsername && fPassword)
    {
        var fuser = users.find(u => u.username == fUsername);
        if(!fuser)
        {
            alert('User not found');
        }
        else if(fuser)
        {
            fuser.Password = fPassword;
            alert('Password Updated');
        }
    }
    else
    {
        alert('Fill all Fields');
    }
    console.log(users);
}
function score()
{
    var points = 0;
    var ans1 = document.getElementById('cor1').checked;
    var ans2 = document.getElementById('cor2').checked;
    var ans3 = document.getElementById('cor3').checked;
    var ans4 = document.getElementById('cor4').checked;
    var ans5 = document.getElementById('cor5').checked;
    if(ans1 == true)
    {
        points++;
    }
    if(ans2 == true)
    {
        points++;
    }
    if(ans3 == true)
    {
        points++;
    }
    if(ans4 == true)
    {
        points++;
    }
    if(ans5 == true)
    {
        points++;
    }
    alert('Thanks you for your feedback, Total "yes" points: ' + points);
}
function nav()
{
    window.location.href='Authintcition.html';
}
function first()
{
    document.getElementById('Clothessliderblock').style.display="block";
    document.getElementById('Shoessliderblock').style.display="none";
    document.getElementById('Bagssliderblock').style.display="none";
    document.getElementById('Watchessliderblock').style.display="none";
}
function second()
{
    document.getElementById('Clothessliderblock').style.display="none";
    document.getElementById('Shoessliderblock').style.display="block";
    document.getElementById('Bagssliderblock').style.display="none";
    document.getElementById('Watchessliderblock').style.display="none";
}
function third()
{
    document.getElementById('Clothessliderblock').style.display="none";
    document.getElementById('Shoessliderblock').style.display="none";
    document.getElementById('Bagssliderblock').style.display="block";
    document.getElementById('Watchessliderblock').style.display="none";
}
function forth()
{
    document.getElementById('Clothessliderblock').style.display="none";
    document.getElementById('Shoessliderblock').style.display="none";
    document.getElementById('Bagssliderblock').style.display="none";
    document.getElementById('Watchessliderblock').style.display="block";
}
function getp()
{
    let q1 = document.getElementById('q1').value;
    let q2 = document.getElementById('q2').value;
    document.getElementById('subt').innerHTML = ((q1 + q2) * 75) + " $";
    document.getElementById('tot').innerHTML = (((q1 + q2) * 75) + 20) + " $";
}