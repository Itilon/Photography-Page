$(document).ready(() => {
    let index = 0;
    const $sliderImgs = $('.slider-img');

    const $thumbnailUnits = $('.thumbnail-unit');

    const slider = () => {
        $sliderImgs.css('opacity', '0');

        let $currentImg = $($sliderImgs[index]);
        const len = $sliderImgs.length;

        if (index === len) {
            $currentImg = $($sliderImgs[0]);
        }

        let $nextImg = $($sliderImgs[index + 1]);

        if (index === len - 1) {
            $nextImg = $($sliderImgs[0]);
        } else if (index === len) {
            $nextImg = $($sliderImgs[1]);
        }

        $currentImg.css('opacity', '0');
        $nextImg.css('opacity', '1');

        index++;

        if (index === len) {
            index = 0;
        }
    };

    let timer = setInterval(slider, 10000);

    $thumbnailUnits.on('click', function() {
        let $this = $(this);
        index = $this.index() - 1;
        clearInterval(timer);
        timer = setInterval(slider, 10000);
    });
});