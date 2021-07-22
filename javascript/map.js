var directionsDisplay;
var bounds;

function initMap() {

    //map details
    var options = {
            zoom: 13.5,
            center: { lat: 47.088132, lng: 8.355120 }
        }
        //new map
    var map = new google.maps.Map(document.getElementById('map'), options);
    directionsDisplay = new google.maps.DirectionsRenderer();
    //create infoWindow
    var infowindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();

    //pins array
    var pins = [{
                coords: { lat: 47.0709, lng: 8.3213 },
                iconImg: './images/sea.png'
            },
            {
                coords: { lat: 47.1033, lng: 8.3487 },
                iconImg: './images/sea.png'
            },
            {
                coords: { lat: 47.1120, lng: 8.3839 },
                iconImg: './images/sea.png'
            },
            {
                name: 'frog',
                coords: { lat: 47.0707, lng: 8.3315 },
                iconImg: './images/frog.png'
            },
            {
                name: 'frog',
                coords: { lat: 47.0785, lng: 8.3486 },
                iconImg: './images/frog.png'
            },
            {
                name: 'frog',
                coords: { lat: 47.084009, lng: 8.370152 },
                iconImg: './images/frog.png'
            },
            {
                name: 'frog',
                coords: { lat: 47.096599, lng: 8.387545 },
                iconImg: './images/frog.png'
            },
            {
                name: 'frog',
                coords: { lat: 47.113896, lng: 8.402485 },
                iconImg: './images/frog.png'
            },
            {
                coords: { lat: 47.083272, lng: 8.338358 },
                iconImg: './images/pin.png'
            },
            {
                coords: { lat: 47.095715, lng: 8.347550 },
                iconImg: './images/pin.png'
            },
            {
                coords: { lat: 47.095495, lng: 8.3671124 },
                iconImg: './images/pin.png'
            },
            {
                coords: { lat: 47.112424, lng: 8.390049 },
                iconImg: './images/pin.png'
            }
        ]
        // array of route pins
    var frogPins = [];
    // filtering route pins from an array and push to a new array
    function find(nameKey, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === nameKey) {
                frogPins.push(arr[i])
            }
        }
    }
    find('frog', pins);
    console.log(frogPins);

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
        if (pins[i].iconImg == './images/sea.png') {
            marker.addListener("mouseover", function() {
                infowindow.open(map, marker);
                infowindow.setContent("<div class='infowindow-container'>" +
                    "<img src='./images/riverObj.png' ></img><img src='./images/river.png'></img><div class='inner'><h4>Rotsee Badi</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .</p><span>Mehr</span></div></div>")
            })
            marker.addListener('mouseout', function() {
                infowindow.close()
            })
        }
    }
}


// route function
function calcRoute(start, end, next) {
    console.log("calcRoute('" + start + "','" + end + "',next)");
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: start,
        destination: end,
        travelMode: 'BICYCLING'
    };
    directionsService.route(request,
        function(result, status) {
            if (status == 'OK') {

                directionsDisplay = new google.maps.DirectionsRenderer({
                    suppressBicyclingLayer: true,
                    suppressMarkers: true,
                    preserveViewport: true // don't zoom to fit the route
                });
                directionsDisplay.setMap(map);
                directionsDisplay.setDirections(result);
                // combine the bounds of the responses
                bounds.union(result.routes[0].bounds);
                // zoom and center the map to show all the routes
                map.fitBounds(bounds);
            }
            //error
            else {
                console.log("status=" + status + " (start=" + start + ", end=" + end + ")");
            }
            next();
        });
}

function nextPin() {
    var nextStop = 0;
    if (nextStop < frogPins.length) {
        calcRoute(frogPins[0], frogPins[1], nextPin)
    } else { map.fitBounds(bounds) };
}

nextPin();