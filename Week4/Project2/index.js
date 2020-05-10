function myFunction() {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json() )
    .then(res => {
        for (let i = 0; i < res.results.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = res.results[i].name
            document.body.appendChild(h1)

        }
    })
    


function otherFunction () {
    fetch("https://swapi.dev/api/people/")
        .then(res => res.json()  )
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const h1 = document.createElement('h1')
                h1.textContent = res.data[i].name
                document.body.appendChild(h1)
            }
        })
}
}


