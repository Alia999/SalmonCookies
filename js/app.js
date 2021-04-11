'use strict';








function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


const WorkingHours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


let shops = [];


function Places(place, MinCust, MaxCust, AvgCookieSale,) {
    this.placeOfshop = place;
    this.min = MinCust;
    this.max = MaxCust;
    this.avg = AvgCookieSale;
    this.customersPHour = [];
    this.AvrCookiesPurchasedPerCustomer = [];
   

    shops.push(this);
    this.total = 0;
    this.render=""
}


Places.prototype.customersPerHour = function () {
    for (let i = 0; i < WorkingHours.length; i++) {
        this.customersPHour.push(random(this.min, this.max))


    }
    //console.log(this.customersPHour);
};
Places.prototype.NumberOfCookiesPurchasedPerCustomer = function () {
    for (let i = 0; i < this.customersPHour.length; i++) {

        this.AvrCookiesPurchasedPerCustomer.push(Math.floor(this.customersPHour[i] * this.avg));
        this.total += this.AvrCookiesPurchasedPerCustomer[i];
    }

    //console.log(this.AvrCookiesPurchasedPerCustomer);
};

let Seattle = new Places('Seattle', 23, 65, 6.3,);

let Tokyo = new Places('Tokyo', 3, 24, 1.2);

let Dubai = new Places('Dubai', 11, 38, 3.7);

let Paris = new Places('Paris', 20, 38, 2.3);

let Lima = new Places('Lima', 2, 16, 4.6);






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


function makingHeader() {
    let headingRaw = document.createElement('tr');
    //appending the heading to the table 
    table.appendChild(headingRaw);
    headingRaw.textContent = 'Name'
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
    heade2lement.textContent = "total";

};
makingHeader();
//body of the table
/*




*/
Places.prototype.render = function n () {
    
    let shopRow = document.createElement('tr');
  
    table.appendChild(shopRow);

    let nameTd = document.createElement('td');
   
    shopRow.appendChild(nameTd);
  
    nameTd.textContent=this.place;


    for (let i = 0; i < WorkingHours.length; i++) {
       
        let cookiesTd = document.createElement('td');
       
        storeRow.appendChild(cookiesTd);
       
        cookiesTd.textContent = this.customersPHour[i];
    }

 
    let totalTd = document.createElement('td');
   
    storeRow.appendChild(totalTd);
    
    totalTd.textContent = this.total;

}

console.log(shops);
function makingFooter() { };

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();



function makingFooter() {
    
    let footerRow=document.createElement('tr');

    table.appendChild(footerRow);


    let firstTh = document.createElement('th');

    
    footerRow.appendChild(firstTh);

  
    firstTh.textContent='Totals';

    let totalHours;
    let MegaTotal=0;
  
    for (let i = 0; i < Workinghours.length; i++) {
        totalHours=0;
        for (let j = 0; j < shops.length; j++) {
            // console.log(hours[i]);
            // console.log(stores[j]);
            totalHours+=shops[j].AvrCookiesPurchasedPerCustomer[i];
            MegaTotal+=stores[j].AvrCookiesPurchasedPerCustomer[i];
         
        }
       
        
        let footerTh=document.createElement('th');

       
        footerRow.appendChild(footerTh);

      
        footerTh.textContent=totalHours;

    }

    let totalTh= document.createElement('th');

   
    footerRow.appendChild(totalTh);

   
    totalTh.textContent=MegaTotal;
     
   


}


makingFooter();





// body / 
// the rest of the table

/****************** */
  ///get the form elements by id 
/*
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
    NewShop..NumberOfCookiesPurchasedPerCustomer();
};
*/