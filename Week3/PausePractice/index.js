const xhr = new XMLHttpRequest()
// method
xhr.open("GET", "https://swapi.co/api/people/1/", true )
xhr.send()

xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		const JSONdata = xhr.responseText
		const data = JSON.parse(JSONdata)
		showData(data.results)
	}
}
function showData(arr){
	for( let i = 0; i < arr.length; i++){
	const h1 = document.createElement('h1')
	h1.textContent = arr[i].name
	document.body.appendChild(h1)
}
}

//https://api.vschool.io/pokemon