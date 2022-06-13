const activeDropDown = (el, num) => {
    //arcodian
    document.querySelector('iframe').classList.remove('active');
    setTimeout(() => {
        window.Neumo.dropDowns.forEach((dropDown) => {
            dropDown.classList.remove("active");
        });
        el.parentElement.classList.add("active");

        if (num == 0) {
            document.querySelector('#page iframe').src = "/whatisnuemo";
        } else if (num == 1) {
            document.querySelector('#page iframe').src = "/components";
        }
    }, 200);


    //drop-down
    // if(!(el.classList.contains('active'))){
    //     el.classList.add('active');
    // }
    // else{
    //     el.classList.remove('active');
    // }
};

/* search input */
const focusin = (el) => {
    el.parentElement.classList.add("active");
};
const focusout = (el) => {
    el.parentElement.classList.remove("active");
    window.snd.play(Snd.SOUNDS.TRANSITION_DOWN);
};
/* search input end */

const siteLoad = (el) => {
    // el.style.height = el.contentWindow.document.body.scrollHeight + "px";
    setTimeout(() => {
        el.classList.add('active')
    }, 200);

};

const menuClick = (el,percentage) => {
    document.querySelector('iframe').contentWindow.scroll(percentage);
}

function active(titleIdx, subtitleIdx) {
    const TITLE_EL = document.querySelectorAll('.drop-down')[titleIdx];
    const SUBTITLE_EL = TITLE_EL.querySelectorAll('li');
    if(!SUBTITLE_EL[subtitleIdx + 1].classList.contains('active')){
        snd.play(Snd.SOUNDS.BUTTON);
    }
    SUBTITLE_EL.forEach((li, idx) => {
        li.classList.remove('active');
    })
    SUBTITLE_EL[subtitleIdx + 1].classList.add('active');

}
function play(VALUE){
    window.snd.play(VALUE);
}
window.onload = () => {
    const dropDowns = document.querySelectorAll(".drop-down");
    window.Neumo = {dropDowns};
    window.snd = new Snd();
    window.snd.load(Snd.KITS.SND01);
};
