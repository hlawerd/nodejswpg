const getFilter = (parameters) => {

    const filter = {};
 
    if (parameters.make) { filter.make = parameters.make; }
    if (parameters.model) { filter.model = parameters.model; }
    if (parameters.status) { filter.status = parameters.status; }
    if (parameters.year && parameters.status) {filter.year = parameters.year;}
    if (parameters.year) {filter.maxyear = parameters.year;}
    /* if (parameters.year && parameters.model) { console.log(parameters.year);filter.year = parameters.year; }
  
  
    if (parameters.status) { filter.status = parameters.status; }
    
   /*  if (parameters.bodystyle) { filter.bodystyle = parameters.bodystyle; }
    
    if (parameters.price) { filter.price = parameters.price; } */

    return filter;
}

module.exports = getFilter;