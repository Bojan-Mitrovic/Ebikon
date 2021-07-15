function initMap() {
    //map details
    var options = {
            zoom: 13,
            center: { lat: 47.088132, lng: 8.355120 }
        }
        //new map
    var map = new google.maps.Map(document.getElementById('map'), options);
    //create infoWindow
    var infoWindow = new google.maps.infoWindow();
    //pins array
    var pins = [{
            coords: { lat: 47.0709, lng: 8.3213 },
            iconImg: '/images/sea.png'
        },
        {
            coords: { lat: 47.1033, lng: 8.3487 },
            iconImg: '/images/sea.png'
        },
        {
            coords: { lat: 47.1120, lng: 8.3839 },
            iconImg: '/images/sea.png'
        },
        {
            coords: { lat: 47.0707, lng: 8.3315 },
            iconImg: '/images/frog.png'
        },
        {
            coords: { lat: 47.0785, lng: 8.3486 },
            iconImg: '/images/frog.png'
        },
        {
            coords: { lat: 47.084009, lng: 8.370152 },
            iconImg: '/images/frog.png'
        },
        {
            coords: { lat: 47.096599, lng: 8.387545 },
            iconImg: '/images/frog.png'
        },
        {
            coords: { lat: 47.113896, lng: 8.402485 },
            iconImg: '/images/frog.png'
        },
        {
            coords: { lat: 47.083272, lng: 8.338358 },
            iconImg: '/images/pin.png'
        },
        {
            coords: { lat: 47.095715, lng: 8.347550 },
            iconImg: '/images/pin.png'
        },
        {
            coords: { lat: 47.095495, lng: 8.3671124 },
            iconImg: '/images/pin.png'
        },
        {
            coords: { lat: 47.112424, lng: 8.390049 },
            iconImg: '/images/pin.png'
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
    }
}