WIN.addEventListener('load', function () {
    let pre = BODY.querySelector('.pre'),
        count = pre.firstElementChild;

    let percentCounter = 0;

    let interval_id = setInterval(function () {
        if (percentCounter >= 100) {
            clearInterval(interval_id);
            pre.style.display = 'none';
        }

        ++percentCounter;
        count.innerHTML = `${percentCounter}%`;
    }, 45);
})