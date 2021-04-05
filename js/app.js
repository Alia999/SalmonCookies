'use strict'

const WorkingHours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//console.log(WorkingHours);
/********************************************************************* */

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//first city
let Seattle = {
    place: 'Seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    total: 0,
    customersPerHour: [],
    AvrCookiesPurchasedPerCustomer: [],

    CalculatecustomersPerHour: function () {
        for (let i = 0; i < WorkingHours.length; i++) {
            this.customersPerHour.push(random(this.MinCust, this.MaxCust))


        }
    },
    calculateaverageNumberOfCookiesPurchasedPerCustomer: function () {
        for (let i = 0; i < this.customersPerHour.length; i++) {

            this.AvrCookiesPurchasedPerCustomer.push(Math.floor(this.customersPerHour[i] * this.AvgCookieSale));
            this.total += this.AvrCookiesPurchasedPerCustomer[i];
        }


    },
    render: function () {
        //get parent/id/
        let parent = document.getElementById('parent')
        //console.log(parent);
        //name tag 
        let cityName = document.createElement('h2')
        //append
        parent.appendChild(cityName);
        //text
        cityName.textContent = this.place;
        //the unorderd list 
        let ulelement = document.createElement('ul');
        //append elements
        parent.appendChild(ulelement);
        ///creating the li*14 using a for loop 
        for (let i = 0; i < WorkingHours.length; i++) {
            let li = document.createElement('li');
            ulelement.appendChild(li);
            li.textContent = `${WorkingHours[i]}: ${this.AvrCookiesPurchasedPerCustomer[i]} cookies`
        }
        let totalele = document.createElement('li');
        ulelement.appendChild(totalele);
        totalele.textContent = `Total: ${this.total}cookies `
    }


};
// calling functions 
Seattle.CalculatecustomersPerHour();
Seattle.calculateaverageNumberOfCookiesPurchasedPerCustomer();
Seattle.render();
console.log(Seattle);


//console.log(Seattle);


/********************************************************************* */
//second city 
/*
let Tokyo = {
    place: 'Tokyo',
    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale: 1.2,
    total: 0,
    customersPerHour: [],
    AvrCookiesPurchasedPerCustomer: [],

    CalculatecustomersPerHour: function () {
        for (let i = 0; i < WorkingHours.length; i++) {
            this.customersPerHour.push(random(this.MinCust, this.MaxCust))


        }
    },
    calculateaverageNumberOfCookiesPurchasedPerCustomer: function () {
        for (let i = 0; i < this.customersPerHour.length; i++) {

            this.AvrCookiesPurchasedPerCustomer.push(Math.floor(this.customersPerHour[i] * this.AvgCookieSale));
            this.total += this.AvrCookiesPurchasedPerCustomer[i];
        }


    },
    render: function () {
        //get parent/id/
        let parent = document.getElementById('parent')
        //console.log(parent);
        //name tag 
        let cityName = document.createElement('h2')
        //append
        parent.appendChild(cityName);
        //text
        cityName.textContent = this.place;
        //the unorderd list 
        let ulelement = document.createElement('ul');
        //append elements
        parent.appendChild(ulelement);
        ///creating the li*14 using a for loop 
        for (let i = 0; i < WorkingHours.length; i++) {
            let li = document.createElement('li');
            ulelement.appendChild(li);
            li.textContent = `${WorkingHours[i]}: ${this.AvrCookiesPurchasedPerCustomer[i]} cookies`
        }
        let totalele = document.createElement('li');
        ulelement.appendChild(totalele);
        totalele.textContent = `Total: ${this.total}cookies `
    }


};
// calling functions 
Tokyo.CalculatecustomersPerHour();
Tokyo.calculateaverageNumberOfCookiesPurchasedPerCustomer();
Tokyo.render();
console.log(Tokyo);


/****************************************************************************************** */
/*
let Dubai = {
    place: 'Dubai',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    total: 0,
    customersPerHour: [],
    AvrCookiesPurchasedPerCustomer: [],

    CalculatecustomersPerHour: function () {
        for (let i = 0; i < WorkingHours.length; i++) {
            this.customersPerHour.push(random(this.MinCust, this.MaxCust))


        }
    },
    calculateaverageNumberOfCookiesPurchasedPerCustomer: function () {
        for (let i = 0; i < this.customersPerHour.length; i++) {

            this.AvrCookiesPurchasedPerCustomer.push(Math.floor(this.customersPerHour[i] * this.AvgCookieSale));
            this.total += this.AvrCookiesPurchasedPerCustomer[i];
        }


    },
    render: function () {
        //get parent/id/
        let parent = document.getElementById('parent')
        //console.log(parent);
        //name tag 
        let cityName = document.createElement('h2')
        //append
        parent.appendChild(cityName);
        //text
        cityName.textContent = this.place;
        //the unorderd list 
        let ulelement = document.createElement('ul');
        //append elements
        parent.appendChild(ulelement);
        ///creating the li*14 using a for loop 
        for (let i = 0; i < WorkingHours.length; i++) {
            let li = document.createElement('li');
            ulelement.appendChild(li);
            li.textContent = `${WorkingHours[i]}: ${this.AvrCookiesPurchasedPerCustomer[i]} cookies`
        }
        let totalele = document.createElement('li');
        ulelement.appendChild(totalele);
        totalele.textContent = `Total: ${this.total}cookies `
    }


};
// calling functions 
Dubai.CalculatecustomersPerHour();
Dubai.calculateaverageNumberOfCookiesPurchasedPerCustomer();
Dubai.render();
console.log(Dubai);

/************************************************************************ */