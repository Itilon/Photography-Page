let index = 0;

setInterval( () => {
    const $sliderImgs = $('.slider-img');

    $($sliderImgs[index]).slideUp(1600);

    index++;

    if (index === $sliderImgs.length) {
        index = 0;
    }

    $($sliderImgs[index]).slideDown(1600);

}, 10000);