var s1='';
var s2='';
var s3='';

function data() {
    $.getJSON("http://localhost:3001/medicines", function(data) {
        var tabledata = '';
        $.each(data, function(x, y) {
        	tabledata += '<tr><td>'+data[x].name + '</td>';
        	tabledata += '<td>'+data[x].address + '</td>';
        	tabledata += '<td>'+data[x].phoneNumber + '</td>';
        	tabledata += '<td id='+data[x].phoneNumber+' class="sthis" name='+data[x].name+' add='+data[x].address+' ph='+data[x].phoneNumber+' onclick="getdata(this)">Select this</td></tr>';
        });
        $("#resq").empty().append(tabledata);
    });
}

data();

function getdata(x) {
	s1=$(x).attr("name");
	s2=$(x).attr("add");
	s3=$(x).attr("ph");
	console.log(s1);
	var cdd = document.querySelectorAll('.sthis');
	for(var i = 0; i < cdd.length; i++) {
	  cdd[i].style.backgroundColor="#fff";
	  cdd[i].innerHTML="Select this";
	}
	$(x).html("Selected");
	$(x).css("background-color","#ddd");
}

$( "#req_sum" ).click(function() {
	var value1=document.getElementById('name').value
	var value2=document.getElementById("no").value
	if(s1!='') {
	const api = axios.create({baseURL: 'http://localhost:3001'})
	var payload = {
	    'name': s1,
	    'address': s2,
	    'phone': s3,
	    'pickerName': value1,
	    'pickerPhone': value2,
	}
	axios.post('http://localhost:3001/apid', payload, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    ) } else {
		alert("Select medicine request first");
    }
});