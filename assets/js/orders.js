function data() {
    $.getJSON("http://localhost:3001/medicined", function(data) {
        var tabledata = '';
        $.each(data, function(x, y) {
        <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            tabledata += '<div class="ser-box">';
            tabledata += '  <h3>'+data[x].pickerName+' | '+data[x].pickerPhone+'</h3>';
            tabledata += '  <p>Delivered to '+data[x].name+'</p>';
            tabledata +=  '<p>'+data[x].address+'<p></div></div>';
        });
        $("#ordd").empty().append(tabledata);
    });
}

data();