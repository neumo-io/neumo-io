const activeDropDown = (el, num) => {
    //arcodian
    document.querySelector('iframe').classList.remove('active');
    setTimeout(() => {
        window.Neumo.dropDowns.forEach((dropDown) => {
            dropDown.classList.remove("active");
        });
        el.parentElement.classList.add("active");

        if (num == 0) {
            document.querySelector('#page iframe').src = "/neumo-io/whatisnuemo/";
        } else if (num == 1) {
            document.querySelector('#page iframe').src = "/neumo-io/components/";
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
var now = undefined;
const inputChange = (el) => {
    const category1 = [
        {
            data: "button",
            category: 1,
            menu: 0,
        }, {
            data: "toggle switch",
            category: 1,
            menu: 1,
        },
        {
            data: "select tab",
            category: 1,
            menu: 2,
        },
        {
            data: "text input",
            category: 1,
            menu: 3,
        }
    ];
    const category2 = [
        {
            data: "overview",
            category: 0,
            menu: 0,
        }, {
            data: "color system",
            category: 0,
            menu: 1,
        },
    ];
    const matchedMenu2 = category2.find((item) => item.data.indexOf(el.value.toLowerCase()) >= 0);
    const matchedMenu1 = category1.find((item) => item.data.indexOf(el.value.toLowerCase()) >= 0);
    setTimeout(() => {
        if (category2.some(item => item.data.indexOf(el.value.toLowerCase()) >= 0)) {
            if (now === undefined || matchedMenu2.category !== now.category)
                activeDropDown(document.querySelector(".drop-down:first-child li"), 0);
            if (now === undefined || matchedMenu2.menu !== now.menu)
                setTimeout(() => {
                    document.querySelectorAll(".drop-down:first-child li")[matchedMenu2.menu + 1].click();
                }, 1000);
            now = matchedMenu2;
        } else if (category1.some(item => item.data.indexOf(el.value.toLowerCase()) >= 0)) {

            if (now === undefined || matchedMenu1.category !== now.category)
                activeDropDown(document.querySelector(".drop-down:last-child li"), 1);
            if (now === undefined || matchedMenu1.menu !== now.menu)
                setTimeout(() => {
                    document.querySelectorAll(".drop-down:last-child li")[matchedMenu1.menu + 1].click();
                }, 1000);
            now = matchedMenu1;
        }

    }, 200);

}

/* search input */
const focusin = (el) => {
    el.parentElement.classList.add("active");
};
const focusout = (el) => {
    el.parentElement.classList.remove("active");
    window.snd.play(Snd.SOUNDS.TRANSITION_DOWN);
    now = undefined;
};
/* search input end */

const siteLoad = (el) => {
    // el.style.height = el.contentWindow.document.body.scrollHeight + "px";
    setTimeout(() => {
        el.classList.add('active')
    }, 200);

};

const menuClick = (el, percentage) => {
    document.querySelector('iframe').contentWindow.scroll(percentage);
}

const openSidebar = () => {

}

function active(titleIdx, subtitleIdx) {
    const TITLE_EL = document.querySelectorAll('.drop-down')[titleIdx];
    const SUBTITLE_EL = TITLE_EL.querySelectorAll('li');
    if (!SUBTITLE_EL[subtitleIdx + 1].classList.contains('active')) {
        // snd.play(Snd.SOUNDS.SWIPE);
    }
    SUBTITLE_EL.forEach((li, idx) => {
        li.classList.remove('active');
    })
    SUBTITLE_EL[subtitleIdx + 1].classList.add('active');

}

function play(VALUE) {
    window.snd.play(VALUE);
}

window.onload = () => {
    const dropDowns = document.querySelectorAll(".drop-down");
    window.Neumo = {dropDowns};
    window.snd = new Snd();
    window.snd.load(Snd.KITS.SND01);
};
