var JSONModule = (function(){
    var xmlhttp = new XMLHttpRequest();
    var country;
    function ipLocator(ipAddress) {
        xmlhttp.open("GET", "http://freegeoip.net/json/" + ipAddress, false);
        xmlhttp.onreadystatechange = function(event) {
            var jsonDoc = event.target.responseText;
            country = JSON.parse(jsonDoc);
        }
        xmlhttp.send();
        return country.country_name;
    }
    
    
    return {
        ipLocator : ipLocator
    }
})();

