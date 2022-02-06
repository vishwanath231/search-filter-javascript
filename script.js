// DOM's Elements
const ascendingBtn = document.getElementById("ascending");
const descendingBtn = document.getElementById("descending");
const search = document.getElementById("search");
const tableBody = document.getElementById("table__body");
const refreshBtn = document.getElementById("refresh");
const select  = document.getElementById("select");
const validMsg = document.getElementById("valid");
const searchForm = document.querySelector(".search__form")


// user details 
const user = [
   {
      id: 1,
      name: "alex",
      email: "alex@gmail.com",
      age: 22,
      phone: 9845672145
   },
   {
      id: 2,
      name: "sam",
      email: "sam@gmail.com",
      age: 19,
      phone: 9845376145
   },
   {
      id: 3,
      name: "hari",
      email: "hari@gmail.com",
      age: 21,
      phone: 9623459610
   },
   {
      id: 4,
      name: "venkat",
      email: "venkat@gmail.com",
      age: 23,
      phone: 6789034768
   },
   {
      id: 5,
      name: "romas",
      email: "romas@gmail.com",
      age: 22,
      phone: 5674847392
   },
   {
      id: 6,
      name: "asif",
      email: "asif@gmail.com",
      age: 28,
      phone: 1224847392
   },
   {
      id: 7,
      name: "shafik",
      email: "shafik@gmail.com",
      age: 30,
      phone: 3624847392
   },
   {
      id: 8,
      name: "yaseer",
      email: "yaseer@gmail.com",
      age: 25,
      phone: 4575447392
   },
];




// Select category 
select.addEventListener('change', changeValue);
function changeValue(){
   
   if (select.value === "") {
      validMsg.innerHTML = `<div class="valid">select category required!</div>`;
      ascendingBtn.classList.remove('active');
      descendingBtn.classList.remove('active');
      searchForm.classList.remove('active');
   }else{
      ascendingBtn.classList.add('active');
      descendingBtn.classList.add('active');
      searchForm.classList.add('active');
      validMsg.innerHTML = "";
   }
};



// Search function
search.addEventListener("keyup", searchFun);

function searchFun() {
   
   const searchValue = search.value.toUpperCase();

   const main = document.getElementById("main");
   const table = main.querySelectorAll('tbody .table__row');

   table.forEach((data,index) => {

      let name = "";

      if (select.value === "name") {
         name = data.getElementsByTagName('p')[0];
      }else if (select.value === "email") {
         name = data.getElementsByTagName('p')[1];
      }else if (select.value === "age"){
         name = data.getElementsByTagName('p')[2];
      }else if (select.value === "phone") {
         name = data.getElementsByTagName('p')[3];
      }else{
         name = data.getElementsByTagName('p')[0];
      }

      if(name.innerHTML.toUpperCase().indexOf(searchValue) != -1){
         table[index].style.display = "";
      }else{
         table[index].style.display = "none";
      }
      
   });
};


// Buttons 
ascendingBtn.addEventListener("click", ascendingFun)
descendingBtn.addEventListener("click", descendingFun)


// descending order function
function ascendingFun() {
   user.sort(ascendingOrderFun(select.value));
   defaultDisplay();
   searchFun();
}


// ascending order function
function descendingFun() {
   user.sort(descendingOrderFun(select.value));
   defaultDisplay();
   searchFun();
}


// ascending order sort function
const ascendingOrderFun = (prop) => {
   return (a,b) => a[prop] > b[prop] ?  1 : -1
};


// descending order sort function
const descendingOrderFun = (prop) => {
   return (a,b) => a[prop] < b[prop] ?  1 : -1; 
}



// default display function
function defaultDisplay(){

   let count = 1;
   let output = "";

   user.forEach((val) => {
      
      output += `
         <tr class="table__row">
            <td>${count++}</td>
            <td><p>${val.name}</p></td>
            <td><p>${val.email}</p></td>
            <td><p>${val.age}</p></td>
            <td><p>${val.phone}</p></td>
         </tr>
      `;
   });

   tableBody.innerHTML = output;
}

defaultDisplay();
