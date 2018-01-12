$(document).ready(() => { 
    const $progressBar = $('.progress-bar');
    let width = $progressBar.css('width');
    width = Number(width[0]);

    setInterval(() => {
        $progressBar.css('width', width + '%');
        width = width + 10;
        if (width === 110) {
            width = 0;
        }
    }, 896)
});
