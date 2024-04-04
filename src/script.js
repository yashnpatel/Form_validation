function Name_Check() {

    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    const charRegex = /^[a-zA-z]\D/;
    var fnameError = document.getElementById("fnameError");

    if (name.trim() === "") {
        fnameError.innerHTML = "Name cannot be empty";
    } else if (!name.match(charRegex)) {
        fnameError.textContent = 'Please enter only characters for your name.';
    } else {
        fnameError.innerHTML = "";
    }
}

function LName_Check() {
    var lname = document.getElementById("lname").value;

    const charRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    var lnameError = document.getElementById("lnameError");
    if (!lname.match(charRegex)) {
        lnameError.textContent = 'Please enter only characters for your name.';
    } else {
        lnameError.innerHTML = "";
    }
    // document.getElementById("required").style.display = "none";

}

function disableSpace(event) {
    var keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 32) {
        event.preventDefault();
    }
}

function Email_Check() {
    var email = document.getElementById("Email").value;
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        emailError.innerHTML = "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email format";
    } else {
        emailError.innerHTML = "";
    }
}

function Password_Check() {
    var password = document.getElementById("Pwd").value;
    var confirmPassword = document.getElementById("ConfirmPwd").value;
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*\s).{8,}$/;

    if (password.trim() === "") {
        passwordError.innerHTML = "Password cannot be empty";
    } else if (password.includes(" ")) {
        passwordError.innerHTML = "Password cannot contain spaces";
    } else if (!password.match(passwordRegex)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter. And Space not allowed';
    } else {
        passwordError.innerHTML = "";
    }

    // if (password !== confirmPassword) {
    //     confirmPasswordError.textContent = "Passwords do not match.";
    // } else {
    //     confirmPasswordError.textContent = "";
    // }
}

function ConfirmPassword_Check() {
    var password = document.getElementById("Pwd").value;
    var confirmPassword = document.getElementById("ConfirmPwd").value;
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    }
    Password_Check();
}

function Date_Check() {
    var dob = document.getElementById('dob').value;
    var dobError = document.getElementById("dobError");

    if (dob.trim() === "") {
        dobError.textContent = "Date of birth cannot be empty";
        return;
    }

    // var dobDate = new Date(dob);
    // var eighteenYearsAgo = new Date();
    // eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    // console.log(dobDate);
    // console.log(eighteenYearsAgo);

    // if (dobDate > eighteenYearsAgo) {
    //     dobError.textContent = "You must be at least 18 years old.";
    // } else {
    //     dobError.textContent = "";
    // }
}

function Mobile_Check() {
    var mobileNumber = document.getElementById("mobileNumber").value;
    var mobileNumberError = document.getElementById("mobileNumberError");
    var mobileRegex = /^\d{10}$/;
    if (mobileNumber.trim() === "") {
        mobileNumberError.innerHTML = "Mobile number cannot be empty";
    } else if (!mobileRegex.test(mobileNumber)) {
        mobileNumberError.innerHTML = "Invalid mobile number";
    } else {
        mobileNumberError.innerHTML = "";
    }
}

function disableAlphabets(event) {
    var keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode <= 57 && keyCode >= 48) {
        return;
    }
    else {
        event.preventDefault();
    }
}

function Country_Check() {
    const countrySelect = document.getElementById("countries").value;
    const countryError = document.getElementById("countryError");

    if (countrySelect === "Select Country") {
        countryError.textContent = "Please select a country.";
    } else {
        countryError.textContent = "";
    }
}

function Hobby_Check() {
    var hobbies = document.getElementsByName("hobby");
    var hobbyError = document.getElementById("hobbyError");
    var selectedHobbies = [];
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            selectedHobbies.push(hobbies[i].value);
        }
    }
    console.log(selectedHobbies)
    if (selectedHobbies.length === 0) {
        hobbyError.innerHTML = "Please select at least one hobby";
    } else {
        hobbyError.innerHTML = "";
    }
}

function State_Check() {
    const state = document.getElementById('states').value;
    const stateError = document.getElementById('stateError');
    stateError.textContent = '';
    if (state === "Select State") {
        stateError.textContent = 'Please select your state.';
    } else {
        stateError.textContent = '';
    }
}

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("userData");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td_fname = tr[i].getElementsByTagName("td")[1];
        td_lname = tr[i].getElementsByTagName("td")[2];
        td_email = tr[i].getElementsByTagName("td")[3];
        td_mobile = tr[i].getElementsByTagName("td")[4];
        if (td_fname || td_lname || td_email || td_mobile) {
            txtValue_fname = td_fname.textContent || td_fname.innerText;
            txtValue_lname = td_lname.textContent || td_lname.innerText;
            txtValue_email = td_email.textContent || td_email.innerText;
            txtValue_mobile = td_mobile.textContent || td_mobile.innerText;

            if (txtValue_fname.toUpperCase().indexOf(filter) > -1 || txtValue_lname.toUpperCase().indexOf(filter) > -1 || txtValue_email.toUpperCase().indexOf(filter) > -1 || txtValue_mobile.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function validateForm() {
    var isValid = true;
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("Email").value.trim();
    var password = document.getElementById("Pwd").value.trim();
    var confirmPassword = document.getElementById("ConfirmPwd").value.trim();
    var mobileNumber = document.getElementById("mobileNumber").value.trim();
    var address = document.getElementById("add").value.trim();
    var state = document.getElementById("states").value;
    var country = document.getElementById("countries").value;
    var fnameError = document.getElementById("fnameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var mobileNumberError = document.getElementById("mobileNumberError");
    var addressError = document.getElementById("addressError");
    var stateError = document.getElementById("stateError");
    var countryError = document.getElementById("countryError");


    if (fname === "") {
        fnameError.innerHTML = "Name cannot be empty";
        isValid = false;
    } else {
        fnameError.innerHTML = "";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerHTML = "Email cannot be empty";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email format";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (password === "") {
        passwordError.innerHTML = "Password cannot be empty";
        isValid = false;
    } else if (password.includes(" ")) {
        passwordError.innerHTML = "Password cannot contain spaces";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.innerHTML = "";
    }


    if (confirmPassword != password) {
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.innerHTML = "";
    }

    var mobileRegex = /^\d{10}$/;
    if (mobileNumber === "") {
        mobileNumberError.innerHTML = "Mobile number cannot be empty";
        isValid = false;
    } else if (!mobileRegex.test(mobileNumber)) {
        mobileNumberError.innerHTML = "Invalid mobile number";
        isValid = false;
    } else {
        mobileNumberError.innerHTML = "";
    }

    if (country === "Select Country") {
        countryError.innerHTML = "Please select your Country.";
        isValid = false;
    } else {
        countryError.innerHTML = "";
    }

    if (state === "Select State") {
        stateError.innerHTML = "Please select your state.";
        isValid = false;
    } else {
        stateError.innerHTML = "";
    }


    return isValid;
}

function hidden_filter() {
    document.getElementById("filter_ind").style.display = "none";
    document.getElementById("combo").style.display = "block";
    // document.getElementById("individualsearch").style.display = "none";
    // document.getElementById("comboSearch").style.display = "block";
    document.getElementById("Filter-function").reset();
    retrive(currentPage, storedData);

}
function unhidden_filter() {
    document.getElementById("filter_ind").style.display = "block";
    document.getElementById("combo").style.display = "none";
    // document.getElementById("individualsearch").style.display = "block";
    // document.getElementById("comboSearch").style.display = "none";

    document.getElementById("Filter-function").reset();
    retrive(currentPage, storedData);


}

function getTodayDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    month = month < 10 ? '0' + month : month.toString();
    day = day < 10 ? '0' + day : day.toString();
    tadaydate = year + '-' + month + '-' + day;
    document.getElementById('dob').setAttribute('max', tadaydate);
    document.getElementById('dob').setAttribute('max', tadaydate);
    document.getElementById('startFilterDate').setAttribute('max', tadaydate);
    document.getElementById('endFilterDate').setAttribute('max', tadaydate);
    return;
}

