let currentPage = 1;
const itemsPerPage = 10;

var storedData = JSON.parse(localStorage.getItem("formData")) || [];

var data21 = storedData;

function retrive(pageNumber, Data) {
  console.log(Data);
  const StartIdx = (pageNumber - 1) * itemsPerPage;
  const endIdx = Math.min(StartIdx + itemsPerPage, Data.length);
  renderData(StartIdx, endIdx, Data);
}

function renderData(StartIdx, endIdx, data) {
  const tableBody = document.querySelector("#userData tbody");
  let rowsHTML = '';
  console.log(StartIdx, + "   " + endIdx)
  if (data.length === 0) {
    rowsHTML += `<tr><td colspan="12">No Data Found</td></tr>`;
    tableBody.innerHTML = rowsHTML;
    updatepages(StartIdx, endIdx, data.length);
  } else {
    for (let i = StartIdx; i < endIdx; i++) {
      const dataItem = data[i];
      console.log(dataItem)
      if (dataItem) {
        const hobbies = dataItem.hobbies.join(', ');
        rowsHTML += `
      <tr>
      <td id="id">${i + 1}</td>
      <td id="fname">${dataItem.fname}</td>
      <td id="lname">${dataItem.lname}</td>
      <td id="email">${dataItem.email}</td>
      <td id="mobile">${dataItem.mobileNumber}</td>
      <td id="date">${dataItem.date}</td>
      <td id="Gender">${dataItem.gender}</td>
      <td id="hobbies">${hobbies}</td>
      <td id="country">${dataItem.country}</td>
      <td id="state">${dataItem.state}</td>
      <td id="address">${dataItem.address}</td>
      <td id="id">
      <button class="btn btn-danger" id="DeleteButton${dataItem.email}" onclick="deleteRow('${dataItem.email}')">Delete</button>
      <button class="btn btn-secondary" id="UpdateButton${dataItem.email}" onclick="fillForm('${dataItem.email}')">Update</button>
      </td>
      </tr>
      `;
      }
    }
    console.log(data)
    tableBody.innerHTML = rowsHTML;
    updatepages(StartIdx + 1, endIdx, data.length);
  }
}

function deleteRow(email) {
  const index = storedData.findIndex(item => item.email === email);
  if (index !== -1) {
    alert("Are You Deleting Data OF  " + storedData[index].email)
    storedData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(storedData));
    data21 = storedData;
    console.log("Data deleted successfully.");
    document.getElementById('startFilterDate').value = "";
    document.getElementById('endFilterDate').value = "";
    document.getElementById('cnt').value = "";
    if ((currentPage - 1) * itemsPerPage >= storedData.length && currentPage > 1) {
      currentPage--;
    }
    retrive(currentPage, storedData);
    return;
  } else {
    console.log("Email ID not found in storedData.");
  }

}

function updatepages(StartIdx, endIdx, totalItems) {
  const fromToElement = document.getElementById("fromtofrom");
  fromToElement.textContent = `${StartIdx} - ${endIdx} of ${totalItems}`;
}
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    retrive(currentPage, data21);
  }
}
function nextPage() {
  if (currentPage < Math.ceil(data21.length / itemsPerPage)) {
    currentPage++;
    retrive(currentPage, data21);
  }
}

function filterDateRange1(startDate, endDate) {
  var startDate1 = new Date(document.getElementById('startFilterDate').value);
  var startDate = startDate1;
  var endDate2 = new Date(document.getElementById('endFilterDate').value);
  var endDate = endDate2;
  if (startDate > endDate) {
    alert("Start date cannot be after end date.");
    return;
  }
  const filteredData = storedData.filter(user => {
    const userDate = new Date(user.date);
    return userDate >= startDate && userDate <= endDate;
  });
  data21 = filteredData;
  retrive(currentPage, filteredData);
}

function filterDateRange() {
  var startDate1 = new Date(document.getElementById('startFilterDate').value);
  var startDate = startDate1;
  var endDate2 = new Date(document.getElementById('endFilterDate').value);
  var endDate = endDate2;
  document.getElementById("Filter-function").reset();

  filterDateRange1(startDate, endDate);
}

function filterByGender(gender) {
  const filteredData = storedData.filter(user => user.gender === gender);
  data21 = filteredData;
  currentPage = 1;
  retrive(currentPage, filteredData)

  console.log(data21)
}
function malefilter() {
  document.getElementById("Filter-function").reset();

  filterByGender('male');
}
function femalefilter() {
  document.getElementById("Filter-function").reset();

  filterByGender('female');
}

function CntFilter1(countryInput) {


  var storedData = JSON.parse(localStorage.getItem("formData")) || [];
  var filteredData = storedData.filter(user => {
    return user.country.toUpperCase().includes(countryInput);
  });
  data21 = filteredData;

  currentPage = 1;
  retrive(currentPage, filteredData);
}

function CntFilter() {
  var countryInput = document.getElementById("cnt").value.trim().toUpperCase();
 
  CntFilter1(countryInput);

}

function search_data() {
  var input = document.getElementById("searchInput").value.trim().toUpperCase();
  if (input == "") {
    console.log(storedData)
    retrive(currentPage, data21);
    return;
  } else {
    var filteredData = data21.filter(user => {
      return (
        user.fname.toUpperCase().includes(input) ||
        user.lname.toUpperCase().includes(input) ||
        user.email.toUpperCase().includes(input) ||
        user.mobileNumber.includes(input)
      );
    });
  }
  currentPage = 1;
  retrive(currentPage, filteredData);
}

function clearFilter() {
  console.log("hioiiiiiiii")
  document.getElementById("Filter_fomr").reset();
  document.getElementById("Filter-function").reset();

  data21 = storedData;
  retrive(currentPage, data21);
}

function Dependent_Filter() {
  var gender = document.getElementById("gender11").value;
  var conuntry = document.getElementById("country").value.toUpperCase();
  var startDate = new Date(document.getElementById('startFilterDate1').value);
  var endDate = new Date(document.getElementById('endFilterDate2').value);
  var storedData = JSON.parse(localStorage.getItem("formData")) || [];

  var data22 = storedData;

  var GF = data22.filter((user) => {
    if (gender === "") {
      return data22;
    } else {
      return user.gender == gender;
    }
  });
  console.log(GF);
  var CF = GF.filter((user) => {
    if (conuntry === "") {
      return data22;
    } else {
      return user.country == conuntry;
    }
  });
  console.log(CF);
  var DF = CF.filter((user) => {
    if (!Date.parse(startDate) || !Date.parse(endDate)) {
      return data22;
    } else {
      const storedate = new Date(user.date);
      return (Date.parse(storedate) >= Date.parse(startDate) && Date.parse(storedate) <= Date.parse(endDate));
    }
  });
  var LS = DF
  data21 = LS
  console.log(LS)
  currentPage = 1;
  retrive(currentPage, data21);

}