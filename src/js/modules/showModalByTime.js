function showModalByTime(selector, time = getRandomInt(), autoHide = false) {
    setTimeout(() => {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        if (autoHide) {
            setTimeout(() => {
                document.querySelector(selector).style.display = 'none';
                document.body.style.overflow = 'visible';
            }, time * 3);
        }
    }, time)
}

export default showModalByTime;