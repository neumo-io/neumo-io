const activeDropDown = (el, num) => {
    document.querySelector('iframe').classList.remove('active');
    setTimeout(()=>{
        window.Neumo.dropDowns.forEach((dropDown) => {
            dropDown.classList.remove("active");
        });
        el.classList.add("active");

        if (num == 0) {
            document.querySelector('#page iframe').src = "/whatisnuemo";
        } else if (num == 1) {
            document.querySelector('#page iframe').src = "/components";
        }
    },200);
    //arcodian

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
    // el.style.height = el.contentWindow.document.body.scrollHeight + "px";
    setTimeout(()=>{el.classList.add('active')},200);

};
window.onload = () => {
    const dropDowns = document.querySelectorAll(".drop-down");
    window.Neumo = {dropDowns};
};
