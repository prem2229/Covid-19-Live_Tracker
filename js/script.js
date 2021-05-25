function displayStats(statevar) {
    
    $(document).ready(function () {
        var url = "https://api.covid19india.org/data.json"
        
        $.getJSON(url, function (data) {
            console.log(data)
            console.log(data)
            var statecode;
            var total_confirmedhover;
            var total_activehover;
            var total_recoveredhover;
            var total_deathhover;
            var hoverstatename;
            var i;
            for (i = 1; i < data.statewise.length; i++) {

                hoverstatename = data.statewise[i].state
                statecode = data.statewise[i].statecode
                if (statecode == statevar) {
                    total_confirmedhover = nfObject.format(data.statewise[i].confirmed)
                    total_activehover=nfObject.format(data.statewise[i].active)
                    total_recoveredhover = nfObject.format(data.statewise[i].recovered)
                    total_deathhover=nfObject.format(data.statewise[i].deaths)
                    document.getElementById("hoverheading").innerHTML = hoverstatename;
                    document.getElementById("hovercount").innerHTML = "Confirmed: " + total_confirmedhover;
                    document.getElementById("hoveractive").innerHTML = "Active: " + total_activehover;
                    document.getElementById("hoverrecovered").innerHTML = "Recovered: " + total_recoveredhover;
                    document.getElementById("hoverdeath").innerHTML = "Deceased: " + total_deathhover;
                }
            }
        })
    })
}
function displayName(stateid) {
    
    document.getElementById("statebox").style.visibility = "visible"
    $(document).mousemove(function(e) {
        $('#statebox').css('top',e.pageY-$('#statebox').height()-30);
        $('#statebox').css('left',e.pageX-($('#statebox').width())/2);
        
    })
   
    displayStats(stateid)

}
function stopDisplay() {

    document.getElementById("statebox").style.visibility = "hidden"
}
$(document).ready(function () {
    var url = "https://api.covid19india.org/data.json"

    $.getJSON(url, function (data) {
        console.log(data)
        nfObject = new Intl.NumberFormat('en-US'); 
        var total_active, total_recovered, total_deaths, total_confirmed

        total_active = nfObject.format(data.statewise[0].active)
        total_confirmed = nfObject.format(data.statewise[0].confirmed)
        total_recovered = nfObject.format(data.statewise[0].recovered)
        total_deaths = nfObject.format(data.statewise[0].deaths)

        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.statewise, function (id, obj) {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })

        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()

        console.log(state)

        $("#activefig").append(total_active)
        $("#totalfig").append(total_confirmed)
        $("#recoveredfig").append(total_recovered)
        $("#deathfig").append(total_deaths)

        var i;
        for (i = 1; i < data.statewise.length; i++) {
            statename = data.statewise[i].state
            total_active = nfObject.format(data.statewise[i].active)
            total_confirmed = nfObject.format(data.statewise[i].confirmed)
            total_recovered = nfObject.format(data.statewise[i].recovered)
            total_deaths = nfObject.format(data.statewise[i].deaths)
            $("#" + String(i) + "s").append(statename)
            $("#" + String(i) + "a").append(total_active)
            $("#" + String(i) + "c").append(total_confirmed)
            $("#" + String(i) + "r").append(total_recovered)
            $("#" + String(i) + "d").append(total_deaths)

        }



    })



})

$(document).ready(function () {
    var url = "https://api.covid19api.com/summary"

    $.getJSON(url, function (data) {
        console.log(data)
        nfObject = new Intl.NumberFormat('en-US'); 
        var worldtotal;
        var worldactive;
        var worldrecovered;
        var worlddeath;
        
       
        worldtotal = nfObject.format(data.Global.TotalConfirmed)
        worldactive = nfObject.format(data.Global.NewConfirmed)
        worldrecovered = nfObject.format(data.Global.TotalRecovered)
        worlddeath = nfObject.format(data.Global.TotalDeaths)
       
        

        $("#totalfig2").append(worldtotal)
        $("#activefig2").append(worldactive)
        $("#recoveredfig2").append(worldrecovered)
        $("#deathfig2").append(worlddeath)
           
        
        })
})