$(document).ready(() => {
    let index = 0;
    const $sliderImgs = $('.slider-img');

    const $thumbnailUnits = $('.thumbnail-unit');

    $thumbnailUnits.on('click', function() {
        let $this = $(this);
        index = $this.index() - 1;
    });

    setInterval(() => {
        $sliderImgs.css('opacity', '0');

        let $currentImg = $($sliderImgs[index]);
        if (index === $sliderImgs.length) {
            $currentImg = $($sliderImgs[0]);
        }
        let $nextImg = $($sliderImgs[index + 1]);
        if (index === $sliderImgs.length - 1) {
            $nextImg = $($sliderImgs[0]);
        } else if (index === $sliderImgs.length) {
            $nextImg = $($sliderImgs[1]);
        }

        $currentImg.css('opacity', '0');
        $nextImg.css('opacity', '1');

        index++;

        if (index === $sliderImgs.length) {
            index = 0;
        }

    }, 10000);

});