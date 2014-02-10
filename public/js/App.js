var J = J || {};

J.App = function () {
	var that = this;

	this.requestPath = "backend/functions.php";
	this.category= ['Alla kategorier', 'Vägtrafik', 'Kollektivtrafik', 'Planerad störning', 'Övrigt'];
	this.currentCat = "";
	this.googleMap = new J.Map();
	this.allPosts;
	this.markers = [];
	this.lastUpdated = new Date();

	console.log(this.googleMap);

}

J.App.prototype.init = function () { 

	this.generateCategorys(this.category);
	this.makeRequest();
}

J.App.prototype.generateCategorys = function (category) { 

	var count = 1;
	category.forEach(function(entry) {

		$( "#selection" ).append("<option id='"+count+"'>"+entry+"</option>");
		count++;
	});
}


J.App.prototype.makeRequest = function() {
	var that = this;

	$.ajax({
	    type: "GET",
	    url: that.requestPath,

	    }).done(function(data) {

	        that.allPosts = JSON.parse(data);

	        that.renderPage(that.allPosts);
	});
}


J.App.prototype.renderPage = function(allPosts) {
	var that = this;

	// Empty page from its content
	this.clearPage();

	allPosts.forEach(function(entry) {

		if (entry.category == that.currentCat || that.currentCat == "") {
			
			var marker = that.googleMap.newMarker(entry.latitude, entry.longitude, entry.title, entry.priority);
			
	        that.markers.push(marker);

		    var contentStr = "<div class='data panel panel-default'>"+
		    					"<div class='panel-heading'>"+
		    					  "<span class='info-label'>"+entry.title+"</span>"+
		    					"</div>"+
		    					"<div class='data-content panel-body'>"+
			    					"<p><span class='label label-default'>"+that.translatePrio(entry.priority)+"</span></p>"+
			    					"<p><span class='info-label'>Datum:</span> "+entry.createddate+"</p>"+
			    					"<p><span class='info-label'>Beskrivning:</span> "+entry.description+"</p>"+
			    					"<p><span class='info-label'>Kategori:</span> "+that.translateCat(entry.category)+"</p>"+
			    				"</div>"+
			    			 "</div>";

		    that.googleMap.newInfoWindow(contentStr, marker);
	    }

	    // Append the post to the div #list
		$( "#list" ).append(contentStr);
	});
	
	// If there is no posts.
	if ($( "#list" ).text() == "") {
		$( "#list" ).append("Inga Poster");
	}

	// Hide the post content
	$('.data-content').hide();

	this.addClickEvents(this.sortedPosts);

}

J.App.prototype.clearPage = function() { 
	$( "#lastUpdated" ).text(this.lastUpdated);

	$( "#list" ).empty();
	
	// Clear all the markers from the map
	for (var i = 0; i < this.markers.length; i++) {
    	this.markers[i].setMap(null);
  	}

  	this.markers = [];

}

J.App.prototype.translatePrio = function(prio) { 

	switch (prio) {
			case 1:
				return "Mycket allvarlig händelse";
				break;

			case 2:
				return "Stor händelse";
				break;

			case 3:
				return "Störning";
				break;

			case 4:
				return "Information";
				break;

			case 5:
				return "Mindre störning";
				break;
		}

}

J.App.prototype.translateCat = function(cat) { 

	switch (cat) {
			case 0: 
				return "Vägtrafik";
				break;

			case 1: 
				return "Kollektivtrafik";
				break;

			case 2: 
				return "Planerad störning";
				break;

			case 3: 
				return "Övrigt";
				break;
		}

}

J.App.prototype.addClickEvents = function(sortedPosts) { 
	var that = this;

	$("#changeCat").bind( "click", function() {
		
		var category = $("#selection").val();

		switch(category) {
			case "Vägtrafik":
					that.currentCat = "0";
					break;

			case "Kollektivtrafik":
					that.currentCat = "1";
					break;

			case "Planerad störning":
					that.currentCat = "2";
					break;

			case "Övrigt":
					that.currentCat = "3";
					break;

			case "Alla kategorier":
					that.currentCat = "";
					break;
		}

		that.renderPage(that.allPosts);
	});


	// When user requests an update.
	$("#update").bind( "click", function() {
		that.makeRequest();
	    that.lastUpdated = new Date();
	    $("#selection").val("Alla kategorier");
	});

	// "drop-down" effect on the post divs.
	$(".data").click( function() {
		$( this ).find("div.data-content").toggle();
	});

}


window.onload = function() {
	var app = new J.App();
	app.init();

	console.log(app);
}