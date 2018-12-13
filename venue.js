var venue = {
    name: "Gillette Stadium",
    show: "Meek Mill Show",
    ticketPrice: 150.00,
    seatNumbersAvailable: ["S102", "S104", "S105", "S106"],
    seatNumbersPurchased: ["S101"],

    totalSeatsAvail: function() {
        return this.seatNumbersAvailable.length
    },

    totalSeatsPurch: function() {
        return this.seatNumbersPurchased.length
    },

    totalSeats: function() {
        return this.seatNumbersAvailable.length + this.seatNumbersPurchased.length
    },

    purchaseASeat: function() {
        if (this.seatNumbersAvailable.length > 0) {
            var randomSeat = this.seatNumbersAvailable[Math.floor(Math.random() * this.seatNumbersAvailable.length)];
            this.seatNumbersAvailable.splice(this.seatNumbersAvailable.indexOf(randomSeat), 1);
            this.seatNumbersPurchased.push(randomSeat)

        }
    },

    returnASeat: function() {
        if (this.seatNumbersPurchased.length > 0) {
            var randomSeat = this.seatNumbersPurchased[Math.floor(Math.random() * this.seatNumbersPurchased.length)];
            this.seatNumbersPurchased.splice(this.seatNumbersPurchased.indexOf(randomSeat), 1);
            this.seatNumbersAvailable.push(randomSeat)
        }


    }
}

document.getElementById("showName").innerText = venue.show;
    
    var  seatList = "<ul>"
    for (var i = 0; i < venue.seatNumbersAvailable.length; i++) {
         seatList += "<li>" + venue.seatNumbersAvailable[i] + "<li>";
    }

    seatList += "<ul>";
    document.getElementById("seatsAvail").innerHTML = seatList;


var selectedSeat = "<form> <select id='selectedSeats'>";
for (var i = 0; i < venue.seatNumbersAvailable.length ; i++) {
    //need to escape certain quotes on the following line.  Should research "escaping characters and quotes"
    
    selectedSeat += "<option value=\'"+venue.seatNumbersAvailable[i]+"\'>"+venue.seatNumbersAvailable[i]+"</option>";
}

selectedSeat += "</select> </form>";
document.getElementById("selectASeat").innerHTML = selectedSeat;

