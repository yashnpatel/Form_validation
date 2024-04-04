var storedData = JSON.parse(localStorage.getItem("formData")) || [];

function SUBMIT() {
    Name_Check();
    Email_Check();
    Password_Check();
    ConfirmPassword_Check();
    Mobile_Check();
    Date_Check();
    Hobby_Check();
    Country_Check();
    State_Check();
    var isValid = validateForm();
    if (isValid) {
        storeData();
    }
}

function storeData() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('Email').value.toLowerCase();
    const password = document.getElementById('Pwd').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const date = document.getElementById('dob').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : null;
    const address = document.getElementById('add').value;
    const state = document.getElementById('states').value;
    const country = document.getElementById("countries").value;
    var hobbies1 = document.getElementsByName("hobby");
    var hobbyError = document.getElementById("hobbyError");
    const hobbies = [];
    for (var i = 0; i < hobbies1.length; i++) {
        if (hobbies1[i].checked) {
            hobbies.push(hobbies1[i].value);
        }
    }
    console.log(hobbies)
    if (hobbies.length === 0) {
        hobbyError.innerHTML = "Please select at least one hobby";
        return;
    } else {
        hobbyError.innerHTML = "";
    }

    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    
    console.log(storeData)
    var DuplicateEmail = storedData.some(function (user) {
        return user.email === email;
    });

    if (DuplicateEmail) {
        alert("This email already exists. Please use a different email address.");
        return;
    }

    var formData = {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        mobileNumber: mobileNumber,
        date: date,
        gender: gender,
        hobbies: hobbies,
        country: country,
        state: state,
        address: address,
    };

    storedData.push(formData);
    localStorage.setItem("formData", JSON.stringify(storedData));
    console.log("1" + storedData)
    reset();

}

function fillForm(email) {
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    const index = storedData.findIndex(item => item.email === email);
    console.log(index);
    const updateButtons = document.querySelectorAll('[id^="UpdateButton"]');
    updateButtons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById(`DeleteButton${email}`).style.display = 'none';
    document.getElementById(`UpdateButton${email}`).style.display = 'none';
    document.getElementById("saveButton").style.display = "inline";
    document.getElementById("cancelButton").style.display = "inline";
    document.getElementById("Submitbutton1").style.display = "none";
    document.getElementById("Submitbutton").style.display = "none";
    document.getElementById("previouspage").disabled=true;
    document.getElementById("previouspage").style.color= "#6c757d";
    document.getElementById("nextpage").style.color= "#6c757d";
    document.getElementById("previouspage").style.cursor= "not-allowed";
    document.getElementById("nextpage").style.cursor= "not-allowed";
    document.getElementById("nextpage").disabled=true;


    var data = storedData[index];
    console.log(data.gender)
    document.getElementById("fname").value = data.fname;
    document.getElementById("lname").value = data.lname;
    document.getElementById("Email").value = data.email;
    document.getElementById("Pwd").value = data.password;
    document.getElementById("ConfirmPwd").value = data.password;
    document.getElementById("mobileNumber").value = data.mobileNumber;
    document.getElementById("dob").value = data.date;
    document.getElementById(data.gender).checked = true;
    document.getElementById("add").value = data.address;
    document.getElementById("countries").value = data.country;
    CountryAding();
    console.log(data.country)
    document.getElementById("states").value = data.state;
    var hobbies = data.hobbies;
    if (hobbies && hobbies.length > 0) {
        hobbies.forEach(hobby => {
            document.getElementById(hobby).checked = true;
        });
    }

    document.getElementById("currentIndex").value = index;
}

function saveData() {
    var index = document.getElementById("currentIndex").value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    var email = document.getElementById('Email').value;
    const password = document.getElementById('Pwd').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const date = document.getElementById('dob').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : null;
    const address = document.getElementById('add').value;
    const state = document.getElementById('states').value;
    const country = document.getElementById("countries").value;
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    var hobbies1 = document.getElementsByName("hobby");
    var hobbyError = document.getElementById("hobbyError");
    const hobbies = [];
    for (var i = 0; i < hobbies1.length; i++) {
        if (hobbies1[i].checked) {
            hobbies.push(hobbies1[i].value);
        }
    }
    console.log(hobbies)
    if (hobbies.length === 0) {
        hobbyError.innerHTML = "Please select at least one hobby";
        return;
    } else {
        hobbyError.innerHTML = "";
    }
    var DuplicateEmail = storedData.some(function (user, idx) {
        console.log(index)
        return user.email === email && idx != index;
    });

    if (DuplicateEmail) {
        alert("This email already exists. Please use a different email address.");
        email == storeData.user[index].email
        return;
    }

    var formData = {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        mobileNumber: mobileNumber,
        date: date,
        gender: gender,
        hobbies: hobbies,
        country: country,
        state: state,
        address: address,
    };

    storedData[index] = formData;
    localStorage.setItem("formData", JSON.stringify(storedData));
    reset();
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    data21 = storedData
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("Submitbutton1").style.display = "inline";
    document.getElementById("Submitbutton").style.display = "inline";
    document.getElementById("Filter-function").reset();
    document.getElementById("Filter_fomr").reset();
    document.getElementById("cancelButton").style.display = "none";

    
    alert("Data update Sucessfully Of ID Number " + (index + 1));
    document.getElementById("previouspage").disabled=false;
    document.getElementById("nextpage").disabled=false;
    document.getElementById("previouspage").style.color= "red";
    document.getElementById("nextpage").style.color= "red";
    document.getElementById("previouspage").style.cursor= "pointer";
    document.getElementById("nextpage").style.cursor= "pointer";
    retrive(currentPage, data21);
}

function GetData() {
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    data21 = storedData;
    var currentPage = 1;
    document.getElementById("filter-dates").style.display = "none";
    document.getElementById("gender-filter").style.display = "none";
    document.getElementById("country-filter").style.display = "none";
    retrive(currentPage, storedData);
}

window.onload = function () {
    GetData();
    getTodayDate();
}

async function reset() {
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    data21 = storedData
    await retrive(currentPage, data21);
    document.getElementById("myForm").reset();
}

function hideAndUpdate(email, index) {
    document.getElementById(`UpdateButton${index}`).style.display = 'none';
    fillForm(email);
}

function cancelbutton() {
    document.getElementById("myForm").reset();
    document.getElementById("cancelButton").style.display = "none";
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("Submitbutton1").style.display = "inline";
    document.getElementById("Submitbutton").style.display = "inline";
    document.getElementById("previouspage").disabled=false;
    document.getElementById("nextpage").disabled=false;
    document.getElementById("previouspage").style.color= "red";
    document.getElementById("nextpage").style.color= "red";
    document.getElementById("previouspage").style.cursor= "pointer";
    document.getElementById("nextpage").style.cursor= "pointer";
    retrive(currentPage, data21);
}