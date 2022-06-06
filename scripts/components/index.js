const activeDropDown = (el) => {
    window.Neumo.dropDowns.forEach((dropDown)=>{
        dropDown.classList.remove('active');
    })
    el.classList.add('active');
}
const siteLoad = (el) => {
    console.log(el);
    el.style.height = el.contentWindow.document.body.scrollHeight + 'px';
}
window.onload = () => {
    const dropDowns = document.querySelectorAll('.drop-down');
    window.Neumo = {dropDowns};
}
