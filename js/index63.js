let year  = 2017;
let champion = 'Chicago Blackhawks';
let msgChampion, msgYear, msg = '';

switch (year) {
    case 2006 :
        msgChampion = `Carolina Hurricanes`;
        msgYear = 2006;
        break;
    case 2007:
        msgChampion = `Anaheim Ducks`;
        msgYear = 2007;
        break;
    case 2008:
        msgChampion = `Detroit Red Wings`;
        msgYear = 2008;
        break;
    case 2009:
        msgChampion = `Pittsburgh Penguinas`;
        msgYear = 2009;
        break;
    case 2010:
        msgChampion = `Chicago Blackhawks`;
        msgYear = 2010;
        break;
    case 2011:
        msgChampion = `Boston Bruins`;
        msgYear = 2011;
        break;
    case 2012:
        msgChampion = `Los Angeles Kings`;
        msgYear = 2012;
        break;
    case 2013:
        msgChampion = `Chicago Blackhawks`;
        msgYear = 2013;
        break;
    case 2014:
        msgChampion = `Los Angeles Kings`;
        msgYear = 2014;
        break;
    case 2015:
        msgChampion = `Chicago Blackhawks`;
        msgYear = 2015;
        break;
    case 2016:
        msgChampion = `Pittsburgh Penguins`;
        msgYear = 2016;
        break;
    case 2017:
        msgChampion = `Pittsburgh Penguins`;
        msgYear = 2017;
        break;
    default:
          msg = 'Sorry, please try a differnt year';       
  }

  if (2006 <= year && 2017 >= year){
    msg = `\"${msgYear}\" was the \"${msgChampion}\" NHL Champion`;
}
  

  console.log(msg);