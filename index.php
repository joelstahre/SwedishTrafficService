<!doctype html>
<html lang='sv'>
	<head>
		<meta charset='utf-8' />
		<title>Laboration 3 - Webbteknik II</title>
		<meta name='description' content='Laboration 3 - Webbteknik II' />
		<link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'>
		<link rel='stylesheet' href='public/css/main.css'>
	</head>
	<body>
		<div id='wrap'>
			<div class='container'>
				<div class='page-header'>
					<div class="headerLeft">
		  				<h1>Laboration 3 <small>Webbteknik II</small></h1>
		  				<a href="#" id="update">Uppdatera</a>
		  				<p><b>Senast hämtad data:</b> <span id="lastUpdated"></span></p>
	  				</div>
	  				<div class="infoTable">
	  					<table class="table">
	  						<tr>
	  							<th>Marker</th>
	  							<th>Prioritet</th>
	  						</tr>
	  						<tr>
	  							<td><img src="http://labs.google.com/ridefinder/images/mm_20_red.png"></td>
	  							<td>Mycket allvarlig händelse</td>
	  						</tr>
	  						<tr>
	  							<td><img src="http://labs.google.com/ridefinder/images/mm_20_orange.png"></td>
	  							<td>Stor händelse</td>
	  						</tr>
	  						<tr>
	  							<td><img src="http://labs.google.com/ridefinder/images/mm_20_blue.png"></td>
	  							<td>Störning</td>
	  						</tr>
	  						<tr>
	  							<td><img src="http://labs.google.com/ridefinder/images/mm_20_purple.png"></td>
	  							<td>Information</td>
	  						</tr>
	  						<tr>
	  							<td><img src="http://labs.google.com/ridefinder/images/mm_20_yellow.png"></td>
	  							<td>Mindre Störning</td>
	  						</tr>
						</table>
	  				</div>
				</div>
				<div id='content'>
					<div class="selector">
						<select class="form-control" id="selection"></select>
						<a href="#" class="btn btn-primary btn-lg" id="changeCat">Visa</a>
					</div>
					<div class='row'>
						<div id="list" class='col-md-4'>
									
						</div>
						
						<div class='col-md-6' id="map-box">
							<div id="map-canvas" style="width: 100%; height: 100%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
				
		<div id='footer'>
	      	<div class='container'>
	        	<p class='text-muted'>Copyright <a href='http://joelstahre.com'>Joel Stahre</a></p>
	      	</div>
	    </div>
					
		
		<script type="text/javascript"
      		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcEM6IJZeMiOJIgBv_J25pX-fX17SlAXY&sensor=true">
    	</script>
		<script src='http://code.jquery.com/jquery-1.10.1.min.js'></script>
		<script src='public/js/App.js'></script>
		<script src='public/js/Map.js'></script>
	</body>
</html>