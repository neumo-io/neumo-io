window.onscroll = (e) => {
    let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - sbHeight;
    const percentage = parseInt(this.scrollY) / parseInt(scrollHeight) * 100;
    console.log(percentage);
    if (percentage >= 0 && percentage < 15) {
        window.parent.active(1, 0);
    } else if(percentage >= 20 && percentage < 40) {
        window.parent.active(1, 1);
    }
    else if(percentage >= 40 && percentage < 60) {
        window.parent.active(1, 2);
    }
    else if( percentage >= 60){
        window.parent.active(1, 3);
    }


    window.percentage = percentage;
};

/* text input */
const focusin = (el) => {
    el.parentElement.classList.add("active");
};
const focusout = (el) => {
    el.parentElement.classList.remove("active");
    snd.play(Snd.SOUNDS.TRANSITION_DOWN);
};
/* search input end */

function scroll(percentage) {

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    window.scrollTo(0, percentage / 100 * scrollHeight);
}
window.onload = function(){
    window.parent.active(1, 0);
    window.snd = new Snd();
    window.snd.load(Snd.KITS.SND01);
};