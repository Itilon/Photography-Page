const init = (data) => {
    const getHome = (req, res) => {
        data.images.getAll()
            .then((images) => {
                res.render('home', {
                    images: images
                });
            });
    };

    return {
        getHome,
    }

};

module.exports = { init };