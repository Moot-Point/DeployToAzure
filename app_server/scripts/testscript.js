// clears database with drop. adds president data, mario data, then bitcoin data, into mongodb

db.dropDatabase();

db.presidents.save(
  [
    {name:'Jimmy Carter', number:'39th', year:'1977-1981'},
    {name:'Ronald Reagan', number:'40th', year:'1981-1989'},
    {name:'George H. W. Bush', number:'41st', year:'1089-1993'},
    {name:'Bill Clinton', number:'42nd', year:'1993-2001'},
    {name:'George W. Bush', number:'43rd', year:'2001-2009'},
    {name:'Barack Obama', number:'44th', year:'2009-2017'},
    {name:'Donald Trump', number:'45th', year:'2017-incumbent'}
  ]
);
db.mario.save(
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
  ]
);
db.bitcoin.save(
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
  ]
);
