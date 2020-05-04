const xhr = new XMLHttpRequest()

xhr.open("GET", "https://rickandmortyapi.com/api/character/", true)
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
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.append(h1)
    }
}

function myFunction() {
  var btn = document.createElement("h2");
  btn.innerHTML = "heelllppp"
  document.body.appendChild(btn);
}

 
 