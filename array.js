//### Exercise #2

//#### Part 1

//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
//Create an array that has these three names in order.

const guest = ['Sofia','David','Juan'];
console.log(guest);

// #### Part 2

// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?

const guest = ['Sofia','David','Juan'];
guest.push('Sara','Augustin');
console.log(guest);

const queue = guest.shift();

console.log(queue);
console.log(`The Next queue is ${queue}`);

guest.forEach((guest, index) => {
    console.log(`The Queue Number ${index+1} is ${guest} `);
});



// #### Part 3

// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line.
// What does the queue look like?

guest.splice(1,0, 'Renata');
console.log(guest);

guest.push('Elena');
console.log(guest);

guest.forEach((guest, index) => {
    console.log(`The Queue Number ${index+1} is ${guest} `);
});

