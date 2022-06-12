const activeDropDown = (el, num) => {
  //arcodian
  window.Neumo.dropDowns.forEach((dropDown) => {
    dropDown.classList.remove("active");
  });
  el.classList.add("active");
  if(num == 0) {
    document.querySelector('#page iframe').src = "/whatisnuemo";
  }
  else if(num == 1){
    document.querySelector('#page iframe').src = "/components";
  }
  //drop-down
  // if(!(el.classList.contains('active'))){
  //     el.classList.add('active');
  // }
  // else{
  //     el.classList.remove('active');
  // }
};
const focusin = (el) => {
  el.parentElement.classList.add("active");
};
const focusout = (el) => {
  el.parentElement.classList.remove("active");
};
const siteLoad = (el) => {
  console.log(el);
  el.style.height = el.contentWindow.document.body.scrollHeight + "px";
};
window.onload = () => {
  const dropDowns = document.querySelectorAll(".drop-down");
  window.Neumo = { dropDowns };
};
