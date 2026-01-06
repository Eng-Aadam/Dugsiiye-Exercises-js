let car = {
    make : 'Toyota',
    model : 'Corolla',
    year : 2020,
    
    start: function() {
        console.log('the Car has started: '+ this.make);
    }
  
};

// Accessing properties

console.log(car.make);  
console.log(car.model); 
console.log(car.year);  

// Calling the method
car.start();


