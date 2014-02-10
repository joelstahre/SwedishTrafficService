<?php

class SwedishRadio {

	public function getRequest() {

		$url = "http://api.sr.se/api/v2/traffic/messages/size=100?pagination=false&format=json";

		$ch = curl_init();

		$options = array(CURLOPT_URL => $url,
                 		 CURLOPT_RETURNTRANSFER => true);

		curl_setopt_array($ch, $options);
	    $data = curl_exec($ch);
	    curl_close($ch);

	    $posts = $this->getStructuredArray(json_decode($data));

	    return $posts;
	}


	public function getStructuredArray($data) {

		$returnArray = array();

    	$posts = $data->messages;

    	foreach ($posts as $post) {
    		$postarray = array();

    		if ($post->title != "") {
    			$postarray["title"] = $post->title;
    		} else {$postarray["title"] = "Titel Sakas";}

    		if ($post->createddate != "") {
    			$postarray["createddate"] = $this->getDate($post->createddate);
    		} else {$postarray["createddate"] = "Datum Saknas";}

    		if ($post->description != "") {
    			$postarray["description"] =  $post->description;
    		} else {$postarray["description"] = "Beskrivning Saknas";}
    		
    		$postarray["id"] = $post->id;
            $postarray["categoryID"] = $post->category;
            $postarray["category"] = $post->category;
            $postarray["priority"] = $post->priority;
            $postarray["latitude"] = $post->latitude;
            $postarray["longitude"] = $post->longitude;
            
            $returnArray[] = $postarray;
    	}

    	return array_reverse($returnArray);
	}


	public function getDate($date) {
		$str = $date;
		preg_match( "#/Date\((\d{10})\d{3}(.*?)\)/#", $str, $match );

		$date = new \DateTime();
		$date->setTimestamp($match[1]);

		return $date->format('Y-m-d H:i:s');
	}

}


	

	



