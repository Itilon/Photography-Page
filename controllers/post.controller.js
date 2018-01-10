const init = (data) => {
    const getHome = (req, res) => {
        data.images.getAll()
            .then((images) => {
                res.render('home', {
                    images: images
                });
            });
    };

    const getAbout = (req, res) => {
        res.render('about');
    };

    const getPortfolio = (req, res) => {
        res.render('portfolio');
    };

    const getBlog = (req, res) => {
        res.render('blog');
    };

    const getContact = (req, res) => {
        res.render('contact');
    };

    return {
        getHome,
        getAbout,
        getPortfolio,
        getBlog,
        getContact
    }

};

module.exports = { init };