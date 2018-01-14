$(document).ready(() => {
    const $sliderImgs = $('.slider-img');
    const $thumbnailUs = $('.thumbnail-unit');

    $sliderImgs.ready(() => {
        const $progressBar = $('.progress-bar');
        let width = $progressBar.css('width');
        width = Number(width[0]);

        const progress = () => {
            $progressBar.css('width', width + '%');
            width = width + 10;
            if (width === 110) {
                width = 0;
            }
        }

        let progressInterval = setInterval(progress, 850);

        $thumbnailUs.on('click', function() {
            width = 0;
            clearInterval(progressInterval);
            progressInterval = setInterval(progress, 850);
        });
    });
});
