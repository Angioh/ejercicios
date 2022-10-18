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
	

function likes (names){
	let mas = names.length - 2;
	if(names.length<=0){
		return 'no one likes this';
	}
	else{
		switch(names.length){
			case 1:
				return `${names[0]} likes this`;
				break;
			case 2:
				return `${names[0]} and ${names[1]} like this`;
				break;
			case 3:
				return `${names[0]}, ${names[1]} and ${names[2]} like this`;
				break;
			default:
				return `${names[0]}, ${names[1]} and ${mas} others like this`;
		}
	}
	
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));