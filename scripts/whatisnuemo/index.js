window.onscroll = (e) => {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    const percentage = parseInt(this.scrollY) / parseInt(scrollHeight) * 100;
    console.log(percentage)
    if (percentage < 4) {
        document.querySelectorAll('.description p').forEach(
            (el) => {
                el.classList.add('active');
            }
        )
    }
    if (percentage >= 4) {
        document.querySelector('.description p:nth-child(1)').classList.remove('active');
    }
    if (percentage >= 36) {
        document.querySelector('.description p:nth-child(2)').classList.remove('active');
    } else if (this.scrollY >= 4) {
        document.querySelector('.description p:nth-child(2)').classList.add('active');
    }
    window.percentage = percentage;
    if (percentage >= 70) {
        document.querySelectorAll('.container > div .layout').forEach((el, idx) => {
            setTimeout(() => {
                if (window.percentage >= 70) {
                    el.classList.add('active')
                }
            }, 150 * idx);
        })
        document.querySelectorAll('.container > div p').forEach((el, idx) => {
            setTimeout(() => {
                if (window.percentage >= 70) {
                    el.classList.add('active')
                }
            }, 40 * idx);
        })
    } else if (percentage < 70) {
        document.querySelectorAll('.container > div .layout').forEach((el, idx, arr) => {
            if (el.classList.contains('active')) {
                setTimeout(() => {
                    if (window.percentage < 70) {
                        el.classList.remove('active')
                    }
                }, 150 * (arr.length - idx));
            }
        })
        document.querySelectorAll('.container > div p').forEach((el, idx,arr) => {
            setTimeout(() => {
                if (window.percentage < 70) {
                    el.classList.remove('active')
                }
            }, 40 * (arr.length - idx));
        })
    }

};