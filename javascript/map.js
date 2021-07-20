function initMap() {
    //map details
    var options = {
            zoom: 13.5,
            center: { lat: 47.088132, lng: 8.355120 }
        }
        // directions
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);
    directionsRenderer.setMap(map);
    //create infoWindow
    var infowindow = new google.maps.InfoWindow();
    //pins array
    var pins = [{
            coords: { lat: 47.0709, lng: 8.3213 },
            iconImg: '/src/images/sea.png'
        },
        {
            coords: { lat: 47.1033, lng: 8.3487 },
            iconImg: '/src/images/sea.png'
        },
        {
            coords: { lat: 47.1120, lng: 8.3839 },
            iconImg: '/src/images/sea.png'
        },
        {
            coords: { lat: 47.0707, lng: 8.3315 },
            iconImg: '/src/images/frog.png'
        },
        {
            coords: { lat: 47.0785, lng: 8.3486 },
            iconImg: '/src/images/frog.png'
        },
        {
            coords: { lat: 47.084009, lng: 8.370152 },
            iconImg: '/src/images/frog.png'
        },
        {
            coords: { lat: 47.096599, lng: 8.387545 },
            iconImg: '/src/images/frog.png'
        },
        {
            coords: { lat: 47.113896, lng: 8.402485 },
            iconImg: '/src/images/frog.png'
        },
        {
            coords: { lat: 47.083272, lng: 8.338358 },
            iconImg: '/src/images/pin.png'
        },
        {
            coords: { lat: 47.095715, lng: 8.347550 },
            iconImg: '/src/images/pin.png'
        },
        {
            coords: { lat: 47.095495, lng: 8.3671124 },
            iconImg: '/src/images/pin.png'
        },
        {
            coords: { lat: 47.112424, lng: 8.390049 },
            iconImg: '/src/images/pin.png'
        }
    ]

    // pins iteration
    for (var i = 0; i < pins.length; i++) {
        addPin(pins[i])
    }


    // add pin function
    function addPin(props) {
        //add pin
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
        // icon check 
        if (props.iconImg) {
            marker.setIcon(props.iconImg);
        }
        if (pins[i].iconImg == '/src/images/sea.png') {
            marker.addListener("mouseover", function() {
                infowindow.open(map, marker);
                infowindow.setContent("<div class='infowindow-container'>" +
                    "<img src='/src/images/riverObj.png' style='top:0'></img><img src='/src/images/river.png' style='top:10px; left:10px'></img><div class='inner'><h4>Rotsee Badi</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .</p><span>Mehr</span></div></div>")
            })
            marker.addListener('mouseout', function() {
                infowindow.close()
            })
        }
    }

}