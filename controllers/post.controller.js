const init = (data) => {
    const getHome = (req, res) => {
        res.render('home');
    }

    return {
        getHome,
    }

};

module.exports = { init };