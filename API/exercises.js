var XMLModule = (function(){
    var xmlhttp = new XMLHttpRequest();
    var country;
    function ipLocator(ipAddress) {
        xmlhttp.open("GET", "http://freegeoip.net/xml/" + ipAddress, false);
        xmlhttp.onreadystatechange = function(event) {
            var xmlDoc = event.target.responseXML;
            country = xmlDoc.getElementsByTagName('CountryName')[0].childNodes[0];
        }
        xmlhttp.send();
        return country;
    }
    
    
    return {
        ipLocator : ipLocator
    }
})();
