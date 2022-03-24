const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'd5b8060d39msh224e3ab882a9531p17e5acjsn6c2eea46af61'
	}
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
		'X-RapidAPI-Key': 'd5b8060d39msh224e3ab882a9531p17e5acjsn6c2eea46af61'
	}
};

fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
