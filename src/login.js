function openFormInNewWindow() {
    var formURL = "./login.html";
    
    window.open(formURL,"Login", "width=1200,height=650","_blank");

    
}

function login() {
    var Store_data = JSON.parse(localStorage.getItem("formData")) || [];
    var userName = document.getElementById('user_name').value;
    var  password = document.getElementById('password').value;

    var ff = true;
    for (var i=0 ;i<Store_data.length;i++) {
      if ((userName == Store_data[i].email) && (password == Store_data[i].password)) {
          alert ("Login Successfully!");
          ff=false;
          break;
      }
    }
    if (userName == ""|| password==""){
        alert("Please fill out all fields");
    }
    else if(ff){
    alert("Wrong username or password, please try again.")

    }
}