
const bitcoinList = function(req, res){
    res.render('bitcoin',{
        prices:
        [
            {change:'$0.003', time:'Mar 2010'},
            {change:'$1.00', time:'April 2011'},
            {change:'$31.00', time:'July 2011'},
            {change:'$2.00', time:'Dec 2011'},
            {change:'$13.00', time:'Dec 2012'},
            {change:'$266', time:'April 2013'},
            {change:'$100', time:'June 2013'},
            {change:'$600–$1,000', time:'Dec 2013'},
            {change:'$550–$750', time:'Feb 2014'},
            {change:'$340–$530', time:'Apr 2014'},
            {change:'$200–$300', time:'Mar 2015'},
            {change:'$600–$630', time:'Sep 2016'},
            {change:'$800–$1,150', time:'Jan 2017'},
            {change:'$2,000', time:'May 2017'},
            {change:'$4,400 ', time:'August 2017'},
            {change:'$5,000', time:'September 2017'},
            {change:'$6,180 ', time:'October 2017'},
            {change:'$7,600-8,100', time:'November 2017'},
            {change:'$17,900 ', time:'15 December 2017'},
            {change:'$13,800 ', time:'22 December 2017'},
            {change:'$6,200 ', time:'5 February 2018'}
            
        ]});
};

module.exports = {
    bitcoinList
};
