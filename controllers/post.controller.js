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
        data.posts.getAll()
            .then((posts) => {
                res.render('blog', {
                    posts: posts
                });
            });
    };

    const getArticle = (req, res) => {
        const id = req.params.id;
        data.posts.findById(id)
            .then((article) => {
                res.render('article', {
                    article: article
                });
            });
    };

    const getContact = (req, res) => {
        res.render('contact');
    };

    return {
        getHome,
        getAbout,
        getPortfolio,
        getBlog,
        getArticle,
        getContact
    }

};

module.exports = { init };