function show(){
	let age = parseInt(document.getElementById('age').value)
	let div =document.getElementById('mes')

	if (age < 10){
		div.innerHTML = '<h1>вы ребёнок</h1>'
	}
	else if (age < 17){
		div.innerHTML = '<h1>вы подросток</h1>'
	}
	else if (age < 65){
		div.innerHTML = '<h1>вы взрослый</h1>'
	}
	else  {
		div.innerHTML = '<h1>вы пожилой</h1>'
	}
}
