$(document).ready(() => {
    const $rightArrow = $('.fa-chevron-right');
    const $leftArrow = $('.fa-chevron-left');

    const $visibleThumbnails = $('.thumbnail-unit');
    const $hiddenThumbnails = $('.thumbnail-unit-hidden');

    const visibleThumbnailLength = $visibleThumbnails.length;
    const hiddenThumnailLength = $hiddenThumbnails.length;

    const backgroundImage = 'background-image';

    const thumbnailLoop = (thumbnails, len) => {
        for (let i = 0; i < len - 1; i += 1) {
            const newImage = $(thumbnails[i + 1]).css(backgroundImage);
            $(thumbnails[i]).css(backgroundImage, newImage);
        }
    };

    const thumbnailReversedLoop = (thumbnails, len) => {
        for (let i = len - 1; i > 0; i -= 1) {
            const newImage = $(thumbnails[i - 1]).css(backgroundImage);
            $(thumbnails[i]).css(backgroundImage, newImage);
        }
    };

    $rightArrow.on('click', () => {
        const firstImage = $($visibleThumbnails[visibleThumbnailLength - 1]).css(backgroundImage);

        thumbnailReversedLoop($visibleThumbnails, visibleThumbnailLength);

        const firstHiddenImage = $($hiddenThumbnails[hiddenThumnailLength - 1]).css(backgroundImage);
        $($visibleThumbnails[0]).css(backgroundImage, firstHiddenImage);

        thumbnailReversedLoop($hiddenThumbnails, hiddenThumnailLength);

        $($hiddenThumbnails[0]).css(backgroundImage, firstImage);
    });

    $leftArrow.on('click', () => {

        const firstImage = $($visibleThumbnails[0]).css(backgroundImage);

        thumbnailLoop($visibleThumbnails, visibleThumbnailLength);
        
        const firstHiddenImage = $($hiddenThumbnails[0]).css(backgroundImage);
        $($visibleThumbnails[visibleThumbnailLength - 1]).css(backgroundImage, firstHiddenImage);

        thumbnailLoop($hiddenThumbnails, hiddenThumnailLength);

        $($hiddenThumbnails[hiddenThumnailLength - 1]).css(backgroundImage, firstImage);
    });
});
