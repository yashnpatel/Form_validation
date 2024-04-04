function DateFILTER() {
    document.getElementById("filter-dates").style.display = "block";
    document.getElementById("gender-filter").style.display = "none";
    document.getElementById("country-filter").style.display = "none";
    document.getElementById("Filter_fomr").reset();

    var data21 = storedData;
    currentPage = 1;
  
    retrive(currentPage, data21);
}

function GenderFilter() {
    document.getElementById("filter-dates").style.display = "none";
    document.getElementById("gender-filter").style.display = "block";
    document.getElementById("country-filter").style.display = "none";
    document.getElementById("Filter_fomr").reset();

    var data21 = storedData;
    currentPage = 1;
  
    retrive(currentPage, data21);

}

function CountryFilter() {
    document.getElementById("filter-dates").style.display = "none";
    document.getElementById("gender-filter").style.display = "none";
    document.getElementById("country-filter").style.display = "block";
    document.getElementById("Filter_fomr").reset();

    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    var data21 = storedData;
    currentPage = 1;
  
    retrive(currentPage, data21);
}

var storedData = JSON.parse(localStorage.getItem("formData")) || [];
var Current_Page = 1;

function comparedate() {
    var startDateInput = document.getElementById('startFilterDate');
    var endDateInput = document.getElementById('endFilterDate');

    endDateInput.min = startDateInput.value;

    currentPage = 1;

    retrive(currentPage, filteredData);
}

document.getElementById("Individual").addEventListener("click", unhidden_filter);
document.getElementById("Combo").addEventListener("click", hidden_filter);

function unhidden_filter() {
    document.getElementById("filter_ind").style.display = "block";
    document.getElementById("combo").style.display = "none";
    document.getElementById("Filter-function").reset();
    retrive(currentPage, storedData);


}

function hidden_filter() {
    document.getElementById("filter_ind").style.display = "none";
    document.getElementById("combo").style.display = "block";
    retrive(currentPage, storedData);

}