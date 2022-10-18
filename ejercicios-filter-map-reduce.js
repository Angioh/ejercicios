/*const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

    //1
    const  getHeroes = (lista,tipo) => lista.filter(elemento => elemento.tipo === tipo);
	console.log(getHeroes(superHeroes,'Marvel'));

	//2
	superHeroes.map(el =>{
		if (el.tipo === 'DC') {
			return el.nombre = `CAMBIADO ${el.nombre}`;
			
	}});
	console.log(superHeroes);

	//3
	console.log(superHeroes.reduce((acumulador,elemento) => elemento.tipo === 'DC'? acumulador+1:acumulador,0));

	//4
	const superHeroes2 = [ 
		'{"nombre":"Batman", "tipo":"DC"}',
		'{"nombre":"Linterna Verde", "tipo":"DC"}',
		'{"nombre":"Lobezno", "tipo":"Marvel"}',
		'{"nombre":"Spiderman", "tipo":"Marvel"}',
		];


function cortas (str){
	array = str.split(' ');
	let palabra = array[0].length;
	for (let i = 0; i < array.length; i++) {
		if(array[i].length<palabra){
			palabra = array[i].length;
		}
	}
	return palabra;
	
}

console.log(cortas("bitcoin take over the world maybe who knows perhaps"));
	*/

function likes (names){
	let array = [];
	array.push[names.split(',')];
	return array;
}

console.log("Jacob,Alex,Mark");