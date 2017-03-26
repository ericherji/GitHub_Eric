(function ($) {    

	//Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');
	var get_description = $('#google-map').data('description');
		
    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker,'mouseover',function() {
		if(get_description==""){
			InfoWindow.close();
		}else{
			infowindow.setContent(get_description);
		}
		infowindow.open(map,marker);
		});
		
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
	

})(jQuery);
