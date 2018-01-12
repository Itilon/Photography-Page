$(document).ready(() => {
    const $thumbnails = $('.thumbnail-unit');
    const $sliderImgs = $('.slider-img');

    $thumbnails.on('click', function() {

        let $this = $(this);
        if ($this.hasClass('fa-thumb')) {
            $this = $this.parent();
        }

        const thumbnailBackground = $this.css('background-image');

        $sliderImgs.each(function() {
            const $this = $(this);
            const backgroundImg = $this.css('background-image');
            if (backgroundImg === thumbnailBackground) {
                $sliderImgs.css('display', 'none');
                $this.css('display', 'block');
            }
        });
    });
});
