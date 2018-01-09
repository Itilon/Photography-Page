let index = 0;

setInterval( () => {
    const $slides = $('.slider-img');

    $($slides[index]).slideUp(2400);

    index++;

    if (index === $slides.length) {
        index = 0;
    }

    $($slides[index]).slideDown(2400);

}, 8000);