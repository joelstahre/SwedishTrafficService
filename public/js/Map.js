var J = J || {};

J.Map = function () { 
	var that = this,
		MapElement = "map-canvas",
		latitude = 59.332442,
		longitude = 15.314941;

	var mapOptions = {         
	    center: new google.maps.LatLng(latitude, longitude),
	    zoom: 6
	};

    this.map =  new google.maps.Map(document.getElementById(MapElement), mapOptions);	

    this.getUserPos();

}

J.Map.prototype.getUserPos = function() {
	var that = this;

	// IF the client supports geolocation.
    if(navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(function(position){
      		that.newMarker(position.coords.latitude, position.coords.longitude, "Här är du!", "userPos");
        });

    } else {
    	console.log("Client do not support geolocation");
    }
}


J.Map.prototype.newMarker = function(lat, lon, title, priority) {

	var myLatlng = new google.maps.LatLng(lat, lon),
		image = this.markerType(priority),
    	marker = new google.maps.Marker({
        	position: myLatlng,
         	map: this.map,
            animation: google.maps.Animation.DROP,
            icon: image,
            title: title   
    });

    return marker;
}



J.Map.prototype.newInfoWindow = function(contentStr, marker) {

	var infowindow = new google.maps.InfoWindow({
      	content: contentStr
  	});

  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(this.map,marker);
  	});
}


J.Map.prototype.markerType = function(prio) {

	switch(prio) {
			case 1:
				return "http://labs.google.com/ridefinder/images/mm_20_red.png";
				break;

			case 2:
				return "http://labs.google.com/ridefinder/images/mm_20_orange.png";
				break;

			case 3:
				return "http://labs.google.com/ridefinder/images/mm_20_blue.png";
				break;

			case 4:
				return "http://labs.google.com/ridefinder/images/mm_20_purple.png";
				break;

			case 5:
				return "http://labs.google.com/ridefinder/images/mm_20_yellow.png";
				break;

			case "userPos":
				return "";
				break;
		}

}
