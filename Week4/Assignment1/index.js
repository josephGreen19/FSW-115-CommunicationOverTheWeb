axios.get("https://api.vschool.io/josephgreen/todo")
//	.then(response => console.log(response))
//	.catch(error => console.log(error))







	.then(res => {
		for(let i = 0; i < res.data.length; i++){
			const h1 = document.createElement('h1')
			h1.textContent = res.data[i].title
			document.body.append(h1)
		}
	})
	