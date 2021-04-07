'use strict';


 ///get the form elements by id 
 let shopsForm=document.getElementById('shopsForm');
 //console.log(shopsForm);
 /// adding the event listener
 shopsForm.addEventListener('submit',submitter);
 //creat function for the submitter
 function submitter(event){
     event.preventDefault();
     ///console.log(event);
    let placeOfshop=event.target.PlaceOftheShop.value;
    // console.log(placeOfshop);
     //
     let min=event.target.MinCust.value;
    // console.log(min);
     let max=event.target.MaxCust.value;
    // console.log(min);
     let avg=event.target.AvgCookieSale.value;
    // console.log(avg);
     let NewShop= new Shop(placeOfshop,min,max,avg);
     //console.log(NewShop);
     NewShop.customersPerHour();
     NewShop.NumberOfCookiesPurchasedPerCustomer();
 };





function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let shops = [];
const WorkingHours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']





function Places(place, MinCust, MaxCust, AvgCookieSale,) {
    this.placeOfshop = place;
    this.min = MinCust;
    this.max = MaxCust;
    this.avg = AvgCookieSale;
    this.customersPHour = [];
    this.AvrCookiesPurchasedPerCustomer = [];
    AvgCookieSale=0;
    shops.push(this);
this.total=0;
}


Places.prototype.customersPerHour = function () {
    for (let i = 0; i < WorkingHours.length; i++) {
        this.customersPHour.push(random(this.Min, this.Max))


    }
    //console.log(this.customersPHour);
};
Places.prototype.NumberOfCookiesPurchasedPerCustomer = function () {
    for (let i = 0; i < this.customersPHour.length; i++) {

        this.AvrCookiesPurchasedPerCustomer.push(Math.floor(this.customersPHour[i] * this.AvgCookieSale));
        this.total += this.AvrCookiesPurchasedPerCustomer[i];
    }

    //console.log(this.AvrCookiesPurchasedPerCustomer);
};

let Seattle = new Places('Seattle', 23, 65, 6.3,);

let Tokyo = new Places('Tokyo', 3, 24, 1.2);

let Dubai = new Places('Dubai', 11, 38, 3.7);

let Paris = new Places('Paris', 20, 38, 2.3);

let Lima = new Places('Lima', 2, 16, 4.6);


for (let i = 0; i < Places.length; i++) {
    shops[i].NumberOfCookiesPurchasedPerCustomer();

}
//call the functions for every city untill i find a way to call in one time
Seattle.customersPerHour();
Seattle.NumberOfCookiesPurchasedPerCustomer();
Tokyo.customersPerHour();
Tokyo.NumberOfCookiesPurchasedPerCustomer();
Dubai.customersPerHour();
Dubai.NumberOfCookiesPurchasedPerCustomer();
Paris.customersPerHour();
Paris.NumberOfCookiesPurchasedPerCustomer();
Lima.customersPerHour();
Lima.NumberOfCookiesPurchasedPerCustomer();

//////////////building the table
    // get element by id
    let parent = document.getElementById('parent');
    //creat element
    //console.log(parent)

    let table = document.createElement('table');
    //append element

    parent.appendChild(table);
    /// the head row 
    function makeHeader() {
    let headingRaw = document.createElement('tr');
    //appending the heading to the table 
    table.appendChild(headingRaw);
    /// a loop depends on the working hours to loop for making th
    for (let i = 0; i < WorkingHours.length; i++) {
        let heade1lement = document.createElement('th');
        /// append it to the headingow
        headingRaw.appendChild(heade1lement);
        //give it a text 
        heade1lement.textContent = WorkingHours[i];
    };
    let heade2lement = document.createElement('th');
    headingRaw.appendChild(heade2lement);
    heade2lement.textContent = "total for every day";
};
// body / 
Places.prototype.renderObjects = function () {

    let tr2El = document.createElement('tr');
    tbodyEl.appendChild(tr2El);

 let thEl = document.createElement('td');
    tr2El.appendChild(thEl);
    thEl.textContent = this.place;

    for (let i = 0; i < this.cookiesNum.length; i++) {
      let tdEl = document.createElement('td');
      tr2El.appendChild(tdEl);
      tdEl.textContent = this.AvrCookiesPurchasedPerCustomer[i];
    }
    const td2El = document.createElement('td');
    tr2El.appendChild(td2El);
    td2El.textContent = this.AvgCookieSale;
  };

 Places.prototype.total=function () {

    let totalOfTotal = 0;
    let trEl = document.createElement('tr');
    table.appendChild(trEl);

    let th2Element = document.createElement('th');
    trEl.appendChild(th2Element);
    th2Element.textContent = 'Total';

    for (let i = 0; i < workinghours.length; i++) {
      let thElement = document.createElement('th');
      trEl.appendChild(thElement);

      let totalOfTotal = 0;
      for ( let j = 0; j <shops.length; j++ ) {
        totalOfTotal += shops[j].AvrCookiesPurchasedPerCustomer[i];
      }
      thElement.textContent =total2;
    }};
