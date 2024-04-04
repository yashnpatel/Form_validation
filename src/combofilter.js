// var storedData = JSON.parse(localStorage.getItem("formData")) || [];
// var data21 = storedData;

// function date_filter() {
//     var startDate = new Date(document.getElementById('startFilterDate1').value);
//     var endDate = new Date(document.getElementById('endFilterDate2').value);
//     const filteredData = data21.filter(user => {
//         const userDate = new Date(user.date);
//         return userDate >= startDate && userDate <= endDate;
//     });
//     data21 = filteredData;
//     const tableBody = document.querySelector("#userData tbody");

//     let rowsHTML = '';
//     if (filteredData.length === 0) {
//         if (true) {
//             rowsHTML += `
//             <h2>No Data Found<h2>
//             `;
//         }
//         tableBody.innerHTML = rowsHTML;
//     } else {
//         currentPage = 1;
//         retrive(currentPage, filteredData);
//     }
// }

// function genderfilter() {
//     var gender = document.getElementById("gender11").value;
//     const filteredData = data21.filter(user => user.gender === gender);
//     console.log(gender);
//     data21 = filteredData;
//     currentPage = 1;
//     retrive(currentPage, filteredData)
//     console.log(filteredData)
// }

// function country_filter() {
//     var country = document.getElementById("country").value.toUpperCase();
//     const filteredData = data21.filter(user => user.country === country);
//     currentPage = 1;
//     console.log(country)
//     data21 = filteredData;
//     const tableBody = document.querySelector("#userData tbody");

//     let rowsHTML = '';
//     if (filteredData.length === 0) {
//         if (true) {
//             rowsHTML += `
//             <h2>No Data Found<h2>
//             `;
//         }
//         tableBody.innerHTML = rowsHTML;
//     } else {
//         currentPage = 1;
//         retrive(currentPage, filteredData);
//     }
// }

// // function applyFilters() {
// //     var startDate = new Date(document.getElementById('startFilterDate1').value);
// //     var endDate = new Date(document.getElementById('endFilterDate2').value);
// //     var gender = document.getElementById("gender11").value;
// //     var country = document.getElementById("country").value.toUpperCase();
// //     // console.log("Start Date:", startDate);
// //     // console.log("End Date:", endDate);
// //     // console.log("Gender:", gender);
// //     // console.log("Country:", country);



// //     var filteredData = data21.filter(aaaa => {
// //         const storedate = new Date(aaaa.date);
// //         const dateFilter = (startDate <= storedate && storedate <= endDate) || (!startDate && !endDate);
// //         const genderFilter = ((aaaa.gender === gender) || !gender);
// //         const countryFilter = ((aaaa.country.toUpperCase() === country) || !country);
// //         // console.log(aaaa.country)
// //         // console.log(aaaa.gender)
// //         // console.log("sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"+dateFilter)
// //         // console.log("genderFilter"+genderFilter)
// //         // console.log("countryFilter"+countryFilter)
    
// //         // console.log(data21)
// //         console.log(dateFilter || genderFilter || countryFilter)
// //         return (dateFilter || genderFilter || countryFilter);
// //     });

// //     console.log("Filtered Data:", filteredData);

// //     const tableBody = document.querySelector("#userData tbody");
// //     let rowsHTML = '';
// //     if (filteredData.length === 0) {
// //         rowsHTML += `<tr><td colspan="12">No Data Found</td></tr>`;
// //         tableBody.innerHTML = rowsHTML;
// //     } else {
// //         currentPage = 1;
// //         retrive(currentPage, filteredData);
// //     }
// // }