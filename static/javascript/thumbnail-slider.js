$(document).ready(() => {
    const $visibleThumbnails = $('.thumbnail-unit');
    const $hiddenThumbnails = $('.thumbnail-unit-hidden');
    const $leftArrow = $('.fa-chevron-left');

    $leftArrow.on('click', () => {
        setTimeout(() => { 
                console.log($hiddenThumbnails[0]);
                $hiddenThumbnails.push($visibleThumbnails[0]);
                console.log($hiddenThumbnails[1]);
        }, 40);

        for (let i = 0; i < $visibleThumbnails.length - 1; i += 1) {
            console.log($visibleThumbnails[i]);
            setTimeout(() => { 
                $($visibleThumbnails[i]).css('background-image', $($visibleThumbnails[i + 1]).css('background-image'));
            }, 400);
        }
        setTimeout(() => { 
                let newImage = $($hiddenThumbnails[0]).css('background-image');
                $($visibleThumbnails[$visibleThumbnails.length - 1]).css('background-image', newImage);
                $hiddenThumbnails.splice(0, 1);
        }, 400);
    });
});
