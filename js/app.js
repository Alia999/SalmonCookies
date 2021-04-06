'use strict';
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let shops = [];
const WorkingHours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


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



function Places(place, MinCust, MaxCust, AvgCookieSale,) {
    this.placeOfshop = place;
    this.min = MinCust;
    this.max = MaxCust;
    this.avg = AvgCookieSale;
    this.customersPHour = [];
    this.AvrCookiesPurchasedPerCustomer = [];
    shops.push(this);

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

makeHeader();

//// to make sure that the code is working
//console.log(Seattle);

//console.log(Tokyo);

//console.log(Dubai);

//console.log(Paris);

//console.log(Lima);

/***************************************** */



//console.log(WorkingHours);
/********************************************************************* */
/*
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
    MinCust: 11,
    MaxCust: 38,
    AvgCookieSale: 3.7,
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
/*
let Paris = {
    place: 'Paris',
    MinCust: 20,
    MaxCust: 38,
    AvgCookieSale: 2.3,
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
Paris.CalculatecustomersPerHour();
Paris.calculateaverageNumberOfCookiesPurchasedPerCustomer();
Paris.render();
console.log(Paris);
/****************************************************************************** */
/*
let Lima = {
    place: 'Lima',
    MinCust: 2,
    MaxCust: 16,
    AvgCookieSale: 4.6,
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
Lima.CalculatecustomersPerHour();
Lima.calculateaverageNumberOfCookiesPurchasedPerCustomer();
Lima.render();
console.log(Lima);
}*/