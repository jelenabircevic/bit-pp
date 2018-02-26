"use strict";
(function () {
    console.log("Hello!");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    };

    function Seat(number, category) {
        this.number = Number(number) || Math.ceil(10 + 90 * Math.random());
        this.category = category || "e";
    }
    Seat.prototype.getData = function () {
        if (this.category == 'b') {
            var cat = 'bussiness';
        } else {
            cat = 'economy';
        }
        return this.number + ", " + cat;
    };

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }
    Passenger.prototype.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.passengerList = [];
        this.seats = Array.from({ length: 100 }, (v, x) => x + 1);
    }
    Flight.prototype.businessCount = function () {
        var counter = 0;
        this.passengerList.forEach(function (item) {
            if (item.seat.category == 'b') {
                counter++;
            }
        });
        return counter;
    }
    Flight.prototype.getDataModified = function () {
        var s =
            "\t\t" +
            this.date.getDate() +
            "." +
            (this.date.getMonth() + 1) +
            "." +
            this.date.getFullYear() +
            " " +
            this.relationFormat() + ", business passengers: " + this.businessCount();
        this.passengerList.forEach(function (passenger) {
            s += "\n\t\t\t\t" + passenger.getData();
        });
        return s;
    };
    Flight.prototype.addPassenger = function (passenger) {

        function checkPassenger(p, list, seats) {
            if (list.length < 100) {
                if (index == -1) {
                    index = Math.ceil(seats.length * Math.random());
                    p.seat.number = seats[index];
                };
                return p;
            } else {
                console.log("Flight full!");
                return false;
            }
        };

        for (var i = 0; i < this.passengerList.length; i++) {
            if ((passenger.person.name == this.passengerList[i].person.name) && (passenger.person.surname == this.passengerList[i].person.surname)) {
                this.seats.push(this.passengerList[i].seat.number);
                this.passengerList.splice(i, 1);
            }
        };
        var index = this.seats.indexOf(passenger.seat.number);
        console.log(index, passenger.seat.number);
        this.passengerList.push(checkPassenger(passenger, this.passengerList, this.seats));
        this.seats.splice(index, 1);
    };
    Flight.prototype.firstLastConsonant = function (s) {
        var rel = "";
        var vowels = "aeiouAEIOU";
        for (var i = 0; i < s.length; i++) {
            if (vowels.indexOf(s[i]) == -1 && s[i] != " ") {
                rel += s[i].toUpperCase();
                i = s.length;
                for (var j = s.length - 1; j > 0; j--) {
                    if (vowels.indexOf(s[j]) == -1 && s[j] != " ") {
                        rel += s[j].toUpperCase();
                        j = 0;
                    }
                }
            }
        }
        return rel;
    };
    Flight.prototype.relationFormat = function () {
        var a = this.relation;
        a = a.split(" - ");
        return (
            this.firstLastConsonant(a[0]) + " - " + this.firstLastConsonant(a[1])
        );
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.flightList = [];
    }
    Airport.prototype.addFlight = function (flight) {
        this.flightList.push(flight);
    };
    Airport.prototype.passengerNumber = function () {
        var counter = 0;
        this.flightList.forEach(function (flight) {
            counter += flight.passengerList.length;
        });
        return counter;
    };
    Airport.prototype.getData = function () {
        var counter = 0;
        var s =
            "Airport: " +
            this.name +
            ", total passengers: " +
            this.passengerNumber();
        this.flightList.forEach(function (flight) {
            counter += flight.businessCount();
        });
        s += ", total business passengers: " + counter;
        this.flightList.forEach(function (flight) {
            s += "\n" + flight.getDataModified();
        });
        return s;
    };

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, number, category) {
        return new Passenger(new Person(name, surname), new Seat(number, category));
    }

    try {
        var airport = new Airport();

        console.log("Aerodrom napravljen uspesno");

        var flightA = createFlight("Belgrade - New York", "Oct 25 2017");
        var flightB = createFlight("Barcelona - Belgrade", "Nov 11 2017");

        console.log("Letovi napravljeni uspesno");

        var johnSnow = createPassenger("John", "Snow", "1", "b");
        var cerseiLannister = createPassenger("Cercei", "Lannister", "2", "b");
        var daenerysTargaryen = createPassenger("Deanerys", "Targaryen", "14");
        var tyrionLannister = createPassenger("Tyrion", "Lannister", "14");

        // isti pustnik kad menja sediste

        var snowJohn = createPassenger("John", "Snow", "7", "e");

        // dodatni putnici za testiranje

        var pass1 = createPassenger("Jim", "Parsons", "23", "b");
        var pass2 = createPassenger("Jack", "Beans");
        var pass3 = createPassenger("Loren", "Deer", "1", "b");
        var pass4 = createPassenger("James", "Black", "14", "b");
        var pass5 = createPassenger("Jordan", "Lucas", "23");
        var pass6 = createPassenger("Jennifer", "Aniston", "90", "b");
        var pass7 = createPassenger("Clarke", "Trump", "23", "b");
        var pass8 = createPassenger("Susan", "Jackson", "23", "b");
        var pass9 = createPassenger("Jim", "Parsons", "26", "b");

        console.log("Putnici napravljeni uspesno");

        flightA.addPassenger(johnSnow);
        flightA.addPassenger(cerseiLannister);
        flightA.addPassenger(pass1);
        flightA.addPassenger(pass2);
        flightA.addPassenger(pass5);
        flightA.addPassenger(pass8);

        flightB.addPassenger(daenerysTargaryen);
        flightB.addPassenger(tyrionLannister);
        flightB.addPassenger(pass3);
        flightB.addPassenger(pass4);
        flightB.addPassenger(pass6);
        flightB.addPassenger(pass7);
        flightB.addPassenger(pass8);
        flightB.addPassenger(pass1);
        flightB.addPassenger(pass5);

        // menjanje broja sedista

        flightA.addPassenger(snowJohn);
        flightA.addPassenger(pass9);

        console.log("Putnici dodati na letove uspesno");

        airport.addFlight(flightA);
        airport.addFlight(flightB);

        console.log("Letovi dodati aerodromu uspesno");

        console.log(airport.getData());
    } catch (e) {
        console.log(e.name, e.messsage, e.stack);
    }
})();