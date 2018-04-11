
const presidentList = function(req, res){
    res.render('president',{
        winners:
        [
            {name:'Jimmy Carter', number:'39th', year:'1977-1981'},
            {name:'Ronald Reagan', number:'40th', year:'1981-1989'},
            {name:'George H. W. Bush', number:'41st', year:'1089-1993'},
            {name:'Bill Clinton', number:'42nd', year:'1993-2001'},
            {name:'George W. Bush', number:'43rd', year:'2001-2009'},
            {name:'Barack Obama', number:'44th', year:'2009-2017'},
            {name:'Donald Trump', number:'45th', year:'2017-incumbent'}
        ]});
};

module.exports = {
    presidentList
};
