const pass = document.getElementById("password");
var confirPass = document.getElementById("confirmPassword");
var message = document.getElementById("eror");
var message1 = document.getElementById("eror1");
console.log(document.getElementById("password"));
console.log(pass);
var check = () => {
  const p = pass.value;
  console.log(pass);

  const cp = confirPass.value;
  console.log(cp.length);
  console.log(p);
  if (cp.length < 5) {
    message.textContent = "enter atleast 5 digit";
  } else {
    if (p === cp) {
      message.textContent = "p match";
    } else {
      message.textContent = "not match";
    }
  }
};
var checklen = () => {
  const p = pass.value;
  if (p.length < 5) {
    message1.textContent = "enter atleast 5 digit";
  } else {
    message1.textContent = "";
  }
};

// console.log(pass.value);
const btnNavEls = document.getElementsByClassName("btn-mobile-nav");
const headerEls = document.getElementsByClassName("header");
const btnNavEl = btnNavEls[0];
const headerEl = headerEls[0];
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
