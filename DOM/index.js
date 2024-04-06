// console.log("document", document);
// const p = document.getElementById("demo");
// them vao html ma k can vao html_instead nd da co san
// p.innerHTML = "hello";
// console.log("p", p);

// document.getElementsByTagName((tag = "demo"));
// console.log("demo");
// const btn = document.getElementById("btn");
// console.log(btn);
// btn.addEventListener("click", function () {
//   alert("Xin chao!!!!");
// });

// const title = document.querySelector("#title");
// title.innerHTML = `
// <button>Submit</button>`;
// console.log;

/*document.body.onload= function(){
    const newDiv = document.createElement("div");
    const newContent=document.createTextNode("ngoc nga chhau bau");
    newDiv.appendChild(newContent);

    const currentDiv=document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv)
}
*/

/*document.body.onload = function () {
  const tabl = document.createElement("table");
  tabl.innerHTML = `
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds</td>
    <td>Maria</td>
    <td>Germany</td>
  </tr>
  `;
    tabl.style.border = "1px solid black";
  //   tabl.style.margin = "5px";
  const div1 = document.getElementById("div1");
  div1.appendChild(tabl);
};
*/

// const cT = document.getElementById("congTinh");
// cT.addEventListener("click", function () {
//   cT.innerHTML = "Wow!";
// });

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// function movemover() {
//   obj.innerHTML = "thanks";
//   // document.getElementsByTagName("cT1").innerHTML = "thankyou";
// }
// function movemout() {
//   obj.innerHTML = "ove me";
// }

// function show() {
//   document.getElementById("bt1").textContent = "This is a text.This is a text";
// }
// function hide() {
//   document.getElementById("bt1");
//   bt1.style.display = "none";
// }
// const btn1 = document.getElementById("btn1");
// console.log(btn1);
// btn1.addEventListener("click", function () {
//   document.getElementById("bt1").textContent = "This is a text.This is a text";
// });
/*bt2
let openModal = document.getElementById("openModal");
openModal.addEventListener("click", function () {
  boxbt2.style.display = "flex";
});
let clickExit = document.getElementById("");
*/

// bt3
// over box1--> background=yellow
// out normal
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let square = document.getElementById("square");

// const handleChangeYellow = () => {
//   square.style.backgroundColor = "yellow";
// };
// const handleChangeGreen = () => {
//   square.style.backgroundColor = "green";
// };
// const handlechangGray = () => {
//   square.style.backgroundColor = "gray";
// };
// var squares = document.querySelectorAll(".square");
// for (var i = 0; i < squares.length; i++) {
//   squares[i].onmouseover = function changecolor() {
//     this.style.backgroundColor = "red";
//   };
// }

// bt4
// const title = document.querySelector(".title");
// const tooltip = document.getElementById("tooltip");
// function appear() {
//   tooltip.style.display = "flex";
// }
// function disappear() {
//   tooltip.style.display = "none";
// }

/*const usersName = document.getElementById("usersName");
const errorUsersName = document.getElementById("errorUsersName");
const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const password = document.getElementById("password");
const errorPass = document.getElementById("errorPass");
const confirmPass = document.getElementById("confirmPass");
const errorConfirmPass = document.getElementById("errorConfirmPass");
var checkName = false;
var checkEmail = false;
var checkPass = false;
var checkConfirmPass = false;
var checkCheckbox = false;
function inputUsersName() {
  if (usersName.value === "") {
    errorUsersName.innerHTML = "Usersname can not empty";
    errorUsersName.style.color = "red";
    checkName = false;
  } else if (usersName.value.length < 6) {
    errorUsersName.innerHTML = "Name's length must more than 6 character";
    errorUsersName.style.color = "red";
    checkName = false;
  } else if (usersName.value == usersName.value.toLowerCase()) {
    errorUsersName.innerHTML = "Name must have uppercase character";
    errorUsersName.style.color = "red";
    checkName = false;
  } else {
    errorUsersName.innerHTML = "";
    checkName = true;
  }
}
function inputEmail() {
  if (email.value === "") {
    errorEmail.innerHTML = "Email can not empty";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else if (email.value.length < 8) {
    errorEmail.innerHTML = "Email's length must more than 8 character";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else if (email.value == email.value.toLowerCase()) {
    errorEmail.innerHTML = "email must have uppercase character";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else if (email.value == email.value.toUpperCase()) {
    errorEmail.innerHTML = "Email must have lowercase character";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else {
    errorEmail.innerHTML = "";
    checkEmail = true;
  }
}

function isAllCharPresent(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) return true;
  }
  return false;
}
// Driver Code
const str = "#GeeksForGeeks@";
console.log(isAllCharPresent(str));
function inputPass() {
  if (password.value === "") {
    errorPass.innerHTML = "Pass can not empty";
    errorPass.style.color = "red";
    checkPass = false;
    // errorPass.style.display = "flex";
  } else if (password.value.length < 8) {
    errorPass.innerHTML = "Password's length must more than 8 character";
    errorPass.style.color = "red";
    checkPass = false;
  } else if (password.value == password.value.toLowerCase()) {
    errorPass.innerHTML = "Password must have uppercase character";
    errorPass.style.color = "red";
    checkPass = false;
  } else if (password.value == password.value.toUpperCase()) {
    errorPass.innerHTML = "Password must have uppercase character";
    errorPass.style.color = "red";
    checkPass = false;
  } else if (!isAllCharPresent(password.value)) {
    errorPass.innerHTML = "Password must have at least 1 number";
    errorPass.style.color = "red";
    checkPass = false;
  } else {
    errorPass.innerHTML = "";
    checkPass = true;
  }
}
function inputConfirmPass() {
  if (confirmPass.value != password.value) {
    errorConfirmPass.innerHTML = "It must same the password that you created";
    errorConfirmPass.style.color = "red";
    checkConfirmPass = false;
  } else {
    errorConfirmPass.innerHTML = "";
    checkConfirmPass = true;
  }
}
{
  const checkbox = document.getElementById("checkbox");
  const errorCheckbox = document.getElementById("errorCheckbox");

  function handleCheckboxChange() {
    if (checkbox.checked) {
      errorCheckbox.innerHTML = "";
      console.log("Checked", checkbox.checked);
      checkCheckbox = true;
    } else {
      errorCheckbox.innerHTML = "You have to checked before Register form";
      errorCheckbox.style.color = "red";
      console.log("Unchecked", checkbox.checked);
      checkCheckbox = false;
    }
  }
}

let letItem = document.getElementById("letItem");
const users = JSON.parse(localStorage.getItem("users")) || [];
for (let i in users) {
  letItem.innerHTML += `<div>${users[i].name} - ${users[i].email}</div>`;
}

function handleSubmit(event) {
  event.preventDefault(); //ngan can hanh dong mac dinh
  if (
    checkName &&
    checkEmail &&
    checkPass &&
    checkConfirmPass &&
    checkCheckbox
  ) {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: usersName.value,
      email: email.value,
      password: password.value,
    };
    let indexEmail = users.findIndex((user) => user.email === email.value);
    console.log(indexEmail, "indexEMail");
    if (indexEmail === -1) {
      users.push(newUser);
      console.log("new user", newUser);
      // alert("Dang nhap thanh cong");
      FuiToast.success("Success toast message.");
      localStorage.setItem("users", JSON.stringify(users));
      event.target.reset();
    } else {
      // alert("email has been exit");
      FuiToast.error("email has been exit");
    }
  } else {
    // console.log("BBB");
    FuiToast.error("Error toast message.");
  }
}
// let isCheck=false;
// for(let i in users){
//   if(users[i].email===email.value) isCheck=true;
// }
// if(isCheck) {alert("email has been exit")}
// else {users.push(newUser);
//   console.log("new user", newUser);
//   event.target.reset();
*/

// Tìm số lớn nhất và suy nhất trong chuỗi có 5 chữ số

// nhập 1 chuỗi -> tính tổng các số nguyên tố trong chuỗi
//tạo hình trái tim bằng javascript
//nhập 1 chuỗi ký tự -> output chữ, k output số
// nhập 1 chuối và trả về là các chuỗi đảo ngược, giữ lại space trong chuỗi đó
