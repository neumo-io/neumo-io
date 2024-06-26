let keyColor = {
    hue: 251,
    chroma: 3,
    light: 95,
    opacity: 1,
}
// 더이상 쓰지 않는 변수객체들 
// let lightShadow = {
//     hue: 251,
//     chroma: 3,
//     light: 95,
//     opacity: 1,
// }
// let darkShadow = {
//     hue: 251,
//     chroma: 3,
//     light: 95,
//     opacity: 1,
// }
let intensity = {
    light: 10,
    dark: 10
}

// 더이상 쓰지 않는함수
// const getColor = (PROPS, property) => {
//     const keyColor_TEMP = getComputedStyle(document.documentElement).getPropertyValue(property);
//     const args = new Color.default(keyColor_TEMP).lch;

//     PROPS.hue = parseInt(args[2]);
//     PROPS.chroma = parseInt(args[1]);
//     PROPS.light = parseInt(args[0]);
//     PROPS.opacity = parseInt(args[3]);
// };

const isLight = () => {
    return keyColor.light > 50;
};
const isDark = () => {
    return keyColor.light < 50;
}
const setShadows = () => {
    // getColor(keyColor, '--keycolor');
    // getColor(lightShadow, '--keycolor');
    // getColor(darkShadow, '--keycolor');
    // if (isLight()) {
    //     lightShadow.light = keyColor.light + intensity.light;
    //     darkShadow.light = keyColor.light - intensity.dark;
    // } else if (isDark()) {
    //     lightShadow.light = keyColor.light + 15;
    //     darkShadow.light = keyColor.light - 5;
    // } else {
    //     {
    //         lightShadow.light = keyColor.light + 10;
    //         darkShadow.light = keyColor.light - 10;
    //     }
    // }

    // 라이브러리에서 css color system으로 변경
    document.documentElement.style.setProperty('--light-shadow', `lch(from var(--keycolor) calc(l + ${intensity.light}) c h)`);
    document.documentElement.style.setProperty('--dark-shadow', `lch(from var(--keycolor) calc(l - ${intensity.dark}) c h)`);

}
const setFontColor = () => {
    if (isLight()) {
        document.documentElement.style.setProperty('--font-color', `black`);
    } else {
        document.documentElement.style.setProperty('--font-color', `white`);

    }
}
const save = () => {
    const DATA = {
        keyColor, intensity
    }
    let DATAS = JSON.parse(window.localStorage.getItem('data'));
    if (DATAS == undefined) {
        DATAS = [];
    }
    DATAS.push(DATA);
    window.localStorage.setItem('data', JSON.stringify(DATAS));
    loadHistory();
}
const load = (index) => {
    let DATAS = JSON.parse(window.localStorage.getItem('data'));
    const data = DATAS[index];

    keyColor = data.keyColor;
    intensity = data.intensity;

    setKeyColor();
    setFontColor();
    setShadows();
}
const setKeyColor = () => {
    document.documentElement.style.setProperty('--keycolor', `lch(${keyColor.light}% ${keyColor.chroma} ${keyColor.hue})`);
}
const changeHue = (value) => {
    // getColor(keyColor, '--keycolor');

    keyColor.hue = value;
    setKeyColor();
    setShadows();
    setFontColor();
};
const changeSat = (value) => {
    // getColor(keyColor, '--keycolor');

    keyColor.chroma = value;
    setKeyColor();
    setShadows();
    setFontColor();
};

const changeLight = (value) => {
    // getColor(keyColor, '--keycolor');

    keyColor.light = value;
    setKeyColor();
    setShadows();
    setFontColor();
};
const changeIntensityLight = (value) => {
    intensity.light = value;
    setShadows();
}
const changeIntensityDark = (value) => {
    intensity.dark = value;
    setShadows();
}

const changeShadow = (clickedElement, directionX, directionY) => {
    const nowBoxShadow = document.querySelector('.lighting.box-shadow');
    const nowActive = document.querySelector('.lighting-blur.active');
    const clickedShadow = clickedElement.querySelector('.inset-shadow');
    const clickedActive = clickedElement.querySelector('.lighting-blur');

    if (nowBoxShadow === clickedShadow || nowActive === clickedActive) return;

    //TODO 1. box-shdow class 제거 및 inset-shadow 추가
    nowBoxShadow.classList.add('inset-shadow');
    nowBoxShadow.classList.remove('box-shadow');

    //TODO 2. active class 제거
    nowActive.classList.remove('active');

    //TODO 3. 클릭한거 inset-shadow -> box-shadow로 변경
    clickedShadow.classList.remove('inset-shadow');
    clickedShadow.classList.add('box-shadow');

    //TODO 4. active class 추가
    clickedActive.classList.add('active');

    //TODO 5. css :root 변수 변경
    document.documentElement.style.setProperty('--direction-x', `${directionX}px`);
    document.documentElement.style.setProperty('--direction-y', `${directionY}px`);
    document.documentElement.style.setProperty('--direction-x-invert', `${directionX * -1}px`);
    document.documentElement.style.setProperty('--direction-y-invert', `${directionY * -1}px`);

    document.documentElement.style.setProperty('--text-direction-x', `${directionX / 2}px`);
    document.documentElement.style.setProperty('--text-direction-y', `${directionY / 2}px`);
    document.documentElement.style.setProperty('--text-direction-x-invert', `${directionX * -1 / 2}px`);
    document.documentElement.style.setProperty('--text-direction-y-invert', `${directionY * -1 / 2}px`);
}
const htmlToElement = (html) => {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
const loadHistory = () => {
    const datas = JSON.parse(window.localStorage.getItem('data'));

    document.querySelector('#history').innerHTML = "";
    for (let idx in datas) {
        const item = datas[idx];
        const html = htmlToElement(
          `<div class="color" onclick="load(${idx})" style="background: linear-gradient(105deg, lch(calc(${item.keyColor.light} + ${intensity.light}) ${item.keyColor.chroma} ${item.keyColor.hue}), lch(calc(${item.keyColor.light} - ${intensity.dark}) ${item.keyColor.chroma} ${item.keyColor.hue}))"></div>`
        );
        document.querySelector('#history').appendChild(html);
    }
}
window.onload = () => {
    // getColor(keyColor, '--keycolor');
    // getColor(lightShadow, '--light-shadow');
    // getColor(darkShadow, '--dark-shadow');

    setKeyColor();
    setShadows();
    setFontColor();

    loadHistory();
}
