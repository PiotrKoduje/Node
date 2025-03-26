const os = require('os');
const fs = require('fs');

// RAW DATA
const genders = ['female', 'male'];
const femaleNames = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 
	'Barbara', 'Susan', 'Jessica', 'Sarah', 'Emily'];
const maleNames = ['James', 'John', 'William', 'Michael', 'David', 
  'Richard', 'Joseph', 'Thomas', 'Charles', 'Daniel'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 
  'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 
  'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 
  'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
const people = [];

// UTILS FUNCTIONS
const randChoice = (arr) => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

const generatePhoneNumber = () => {
	let result = '+48';
	for (let i = 0; i < 9; i++){
		let digit = Math.floor(Math.random() * 9);
		if (i % 3 == 0)
			digit = `-${digit}`
		result += digit;
	}
	return result;
};

const generateEmail = (firstName, lastName) => {
	const result = `${ firstName[0].toLowerCase() + firstName.slice(1)}.${ lastName[0].toLowerCase() + lastName.slice(1) }@gmail.com`;
	return result;
};

// GERERATE DATA
for (let i = 0; i < 20; i++){
	const gender = randChoice(genders);
	const firstName = gender === 'female'? randChoice(femaleNames) : randChoice(maleNames);
	const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	const age = Math.floor(Math.random() * 61) + 18;
	const email = generateEmail(firstName, lastName);
	const phone = generatePhoneNumber();

	const person = { gender, firstName, lastName, age, email, phone}
	people.push(person);
}

const peopleJSON = JSON.stringify(people, null, 2);

// DATA STORAGE
fs.writeFile('people.json', peopleJSON, (err) => {
	if (err) {
		console.log('Error: ', err);
	}	else {
		console.log('Data has been saved');
	}
})

