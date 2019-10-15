document.querySelector(".btn-outline-primary").addEventListener("click", randomItem);


function randomItem(){
    var myArray = [
    "Growing Up",
    "Fool In The Rain",
    "One",
    "When I Come Around",
    "Subdivisions",
    "Frankenstein",
    "Billy The Kid",
    "Miami 2017",
    "All Of My Love",
    "House Of The Holy",
    "The Weight",
    "Cocaine",
    "Cheap Sunglasses",
    "Late In The Evening",
    "Solsbury Hill",
    "Don't Do Me Like That",
    "I Shot The Sheriff",
    "Jungle Land",
    "Rosalita",
    "You May Be Right",
    "Two Tickets To Paradise",
    "Running Down A Dream",
    "Money",
    "Can't Explain",
    "Tenth Avenue Freeze Out",
    "Feels Like The First Time",
    "Drift Away",
    "Riders On The Storm",
    "Southbound",
    "My Old School",
    "Touch Me",
    "Tumblin Dice",
    "Brown Sugar",
    "American Girl",
    "Reeling In The Years",
    "Takin It To The Street",
    "Spirits In The Night",
    "Born To Run",
    "Drops Of Jupiter",
    "Limelight",
    "New World Man",
    "Come Together",
    "Dirty Laundry",
    "Sledgehammer",
    "Wake Me Up When September Comes",
    "Hold On Tight",
    "China Grove",
    "Last Dance With Mary Jane",
    "Big Shot",
    "Life During Wartime",
    "Eyes Without A Face"
  ];

    var result = myArray[Math.floor(Math.random()*myArray.length)];
    document.querySelector(".text-space").textContent = result;

};
