const $thumbnails = $('.thumbnail-unit');
const $sliderImgs = $('.slider-img');

$thumbnails.on('click', (thumbnail) => {

    let $elementClicked = $(thumbnail.target);
    if ($elementClicked.hasClass('fa-thumb')) {
        $elementClicked = $elementClicked.parent();
    }

    const thumbnailBackground = $elementClicked.css('background-image');

    $sliderImgs.each((index) => {
        const $image = $($sliderImgs[index]);
        const backgroundImg = $image.css('background-image');
        if (backgroundImg === thumbnailBackground) {
            $sliderImgs.css('display', 'none');
            $image.css('display', 'block');
        }
    });
});
