
const marioList = function(req, res){
    res.render('mario',{
        games:
        [
            {name:'Super Mario Bros', year:'1985'},
            {name:'Super Mario Bros.: The Lost Levels', year:'1986'},
            {name:'Super Mario Bros. 2', year:'1988'},
            {name:'Super Mario Bros. 3', year:'1988'},
            {name:'Super Mario Land', year:'1989'},
            {name:'Super Mario World', year:'1990'},
            {name:'Super Mario Land 2: 6 Golden Coins', year:'1992'},
            {name:'Super Mario World 2: Yoshis Island', year:'1990'},
            {name:'Super Mario 64', year:'1990'},
            {name:'Super Mario Bros. Deluxe', year:'1990'},
            {name:'Super Mario Sunshine', year:'2002'},
            {name:'Super Mario 64 DS', year:'2004'},
            {name:'New Super Mario Bros.', year:'2006'},
            {name:'Super Mario Galaxy', year:'2007'},
            {name:'New Super Mario Bros. Wii', year:'2009'},
            {name:'Super Mario Galaxy 2', year:'2010'},
            {name:'Super Mario 3D Land', year:'2011'},
            {name:'New Super Mario Bros. 2', year:'2012'},
            {name:'New Super Mario Bros. U', year:'2012'},
            {name:'New Super Luigi U', year:'2013'},
            {name:'Super Mario 3D World', year:'2013'},
            {name:'Super Mario Maker', year:'2015'},
            {name:'Super Mario Run', year:'2016'},
            {name:'Super Mario Odyssey', year:'2017'}
        ]});
};

module.exports = {
    marioList
};
