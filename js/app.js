
'use strict';

function getRandomCustmer(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
var workinghours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalAmountOfCookies = []; 
var totalOfTotal = 0;



function Places(place, min, max, avg) {
    this.name = place;
    this.minCustPerHour = min;
    this.maxCustPerHour = max;
    this.avgNumPerCustmer = avg;
    this.amountOfCookies = [];
    this.custmernumber = [];
    this.totalPerHour = [];
    this.total = 0;

}
 
Places.prototype.amountOfCookie = function () {
    for (let i = 0; i < workinghours.length; i++) {
        this.custmernumber.push(getRandomCustmer(this.minCustPerHour, this.maxCustPerHour));
        this.amountOfCookies.push(this.avgNumPerCustmer * this.custmernumber[i]);
        this.amountOfCookies[i] = parseInt(this.amountOfCookies[i]);

    };
}

Places.prototype.totalAmount = function () {
    for (var i = 0; i < workinghours.length; i++) {
        this.total += this.amountOfCookies[i];
    };
    totalAmountOfCookies.push(this.total);
}


var container = document.getElementById('SalmonCookie');
var tableEl = document.createElement('table');
container.appendChild(tableEl);





var trEl = document.createElement('tr');
tableEl.appendChild(trEl);


var tdEl = document.createElement('td');
tdEl.textContent = '';
trEl.appendChild(tdEl);

for (var i = 0; i < workinghours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = workinghours[i];
    trEl.appendChild(tdEl);
}
var tdEl = document.createElement('td');
tdEl.textContent = 'total';
trEl.appendChild(tdEl);

Places.prototype.supply = function () {
    this.amountOfCookie();
    this.totalAmount();



    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);

     
    for (var i = 0; i < 5; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.name;
        tr1El.appendChild(tdEl);

        for (var i = 0; i < workinghours.length; i++) {
            var tdEl = document.createElement('td');
            tdEl.textContent = this.amountOfCookies[i];
            tr1El.appendChild(tdEl);

        }
        var tdEl = document.createElement('td');
        tdEl.textContent = this.total;
        tr1El.appendChild(tdEl);
    };

};
var Seattle = new Places('Seattle', 23, 65, 6.3);

Seattle.supply();


var Tokyo = new Places('Tokyo', 3, 24, 1.2);

Tokyo.supply();
var Dubai = new Places('Dubai', 11, 38, 3.7);

Dubai.supply();
var Paris = new Places('Paris', 20, 38, 2.3);

Paris.supply();
var Lima = new Places('Lima', 2, 16, 4.6);

Lima.supply();

var tr6El = document.createElement('tr');
tableEl.appendChild(tr6El);


var tdEl = document.createElement('td');
tdEl.textContent = 'total';
tr6El.appendChild(tdEl);

for (var i = 0; i < workinghours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Seattle.amountOfCookies[i] + Tokyo.amountOfCookies[i] + Dubai.amountOfCookies[i] + Paris.amountOfCookies[i] + Lima.amountOfCookies[i]
    tr6El.appendChild(tdEl);
}
var tdEl = document.createElement('td');
for (var i = 0; i < 5; i++) {
    totalOfTotal +=totalAmountOfCookies[i];
}
tdEl.textContent = totalOfTotal;
tr6El.appendChild(tdEl);