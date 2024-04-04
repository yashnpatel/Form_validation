function sortTable(cname) {
    var storedData = data21;
    let names = [];

    for (var i = 0; i < storedData.length; i++) {
        if (storedData[i][cname]) {
            names.push(storedData[i][cname]);
        }
    }
    names.sort();
    const sortedData = [];
    console.log(sortedData)
    for (var i = 0; i < names.length; i++) {
        for (var j = 0; j < storedData.length; j++) {
            if (storedData[j][cname] === names[i]) {
                sortedData.push(storedData[j]);
                break;
            }
        }
    }
    console.log(sortedData)
    // document.getElementById('short').style.fontSize="20px"
    // document.getElementById('short').style.color = "blue"
    // document.getElementById('hide').style.color = "red";
    // document.getElementById('hide').style.fontSize = "15px";


    data21 = sortedData;
    retrive(currentPage, data21)
}

function sortTableDescending(cname) {
    var storedData = data21;
    let names = [];

    for (var i = 0; i < storedData.length; i++) {
        if (storedData[i][cname]) {
            names.push(storedData[i][cname]);
        }
    }

    for (var i = 0; i < names.length; i++) {
        for (j = 0; j < names.length; j++) {
            if (names[i] > names[j]) {
                var temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }
    console.log(names)
    const sortedData = [];
    for (var i = 0; i < names.length; i++) {
        for (var j = 0; j < storedData.length; j++) {
            if (storedData[j][cname] === names[i]) {
                sortedData.push(storedData[j]);
                break;
            }
        }
    }
    // document.getElementById('short').style.fontSize = "15px";
    // document.getElementById('hide').style.fontSize = "20px";
    // document.getElementById('short').style.color = "red";
    // document.getElementById('hide').style.color = "blue";

    data21 = sortedData;
    console.log(sortedData);

    retrive(currentPage, data21);
}

function dropdownbutton() {
    var dropdown = document.getElementById("sortDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
function dropdownbuttonl() {
    var dropdown = document.getElementById("sortDropdownl");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.body.addEventListener("click", function (event) {
    var dropdown = document.getElementById("sortDropdown");
    var dropdownButton = document.getElementById("drp1");

    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
        dropdown.style.display = "none";
    }
});

document.body.addEventListener("click", function (event) {
    var dropdown = document.getElementById("sortDropdownl");
    var dropdownButton = document.getElementById("drp2");

    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
        dropdown.style.display = "none";
    }
});

// window.onclick = function(event) {
//     var dropdown = document.getElementById("sortDropdown");
//     if (dropdown.style.display === "block") {
//         dropdown.style.display = "none";
//     }else {
//         dropdown.style.display = "block";
//     }
// }