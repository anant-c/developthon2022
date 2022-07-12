$( "#req_sum" ).click(function() {
	var value1=document.getElementById('name').value
	var value2=document.getElementById("no").value
	var value3=document.getElementById("email").value
	var value4=document.getElementById("med").value
	var value5=document.getElementById("address").value
	const api = axios.create({baseURL: 'http://localhost:3001'})
	var payload = {
	    'name': value1,
	    'email': value2,
	    'phoneNumer': value3,
	    'medicine': value4,
	    'address': value5
	}
	// api.post('/api', payload)
	// .then(res => {
	//      console.log(res)
	// })
	// .catch(error => {
	//      console.log(error)
	// })
	axios.post('http://localhost:3001/api', payload, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
	alert("Subitted");
});