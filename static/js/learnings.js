params.forEach((param, index) => {
    const progressCircular = [...document.querySelectorAll('.progress-circular')],
          parameter = [...document.querySelectorAll('.parameter')];
      
    let startValue = 0,
        endValue = param,
        speed = 20;

    const progress = setInterval(() => {
        if (endValue != 0) {
            startValue++;
        };
        progressCircular[index].style.background = `conic-gradient(#fff ${startValue * 3.6}deg, var(--bg) 0deg)`;
        parameter[index].innerText = `${startValue}%`;
        if (startValue == endValue) {
            clearInterval(progress);
        }
    }, speed);
})

const circleHeight = [...document.querySelectorAll('.progress-circular')];

window.addEventListener('load', () => {
    circleHeight.forEach(circle => {
        width = circle.clientHeight;
        circle.style.width = `${width}px`;
    });
});

window.addEventListener('resize', () => {
    circleHeight.forEach(circle => {
        width = circle.clientHeight;
        circle.style.width = `${width}px`;
    });
});
