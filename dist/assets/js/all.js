var directionsDisplay,bounds;function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:13.5,center:{lat:47.088132,lng:8.35512}});directionsDisplay=new google.maps.DirectionsRenderer;var n=new google.maps.InfoWindow;bounds=new google.maps.LatLngBounds;var o=[{coords:{lat:47.0709,lng:8.3213},iconImg:"./images/sea.png"},{coords:{lat:47.1033,lng:8.3487},iconImg:"./images/sea.png"},{coords:{lat:47.112,lng:8.3839},iconImg:"./images/sea.png"},{name:"frog",coords:{lat:47.0707,lng:8.3315},iconImg:"./images/frog.png"},{name:"frog",coords:{lat:47.0785,lng:8.3486},iconImg:"./images/frog.png"},{name:"frog",coords:{lat:47.084009,lng:8.370152},iconImg:"./images/frog.png"},{name:"frog",coords:{lat:47.096599,lng:8.387545},iconImg:"./images/frog.png"},{name:"frog",coords:{lat:47.113896,lng:8.402485},iconImg:"./images/frog.png"},{coords:{lat:47.083272,lng:8.338358},iconImg:"./images/pin.png"},{coords:{lat:47.095715,lng:8.34755},iconImg:"./images/pin.png"},{coords:{lat:47.095495,lng:8.3671124},iconImg:"./images/pin.png"},{coords:{lat:47.112424,lng:8.390049},iconImg:"./images/pin.png"}],s=[];!function(e,n){for(var o=0;o<n.length;o++)n[o].name===e&&s.push(n[o])}("frog",o),console.log(s);for(var i=0;i<o.length;i++)c(o[i]);function c(s){var c=new google.maps.Marker({position:s.coords,map:e});s.iconImg&&c.setIcon(s.iconImg),"./images/sea.png"==o[i].iconImg&&(c.addListener("mouseover",(function(){n.open(e,c),n.setContent("<div class='infowindow-container'><img src='./images/riverObj.png' ></img><img src='./images/river.png'></img><div class='inner'><h4>Rotsee Badi</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .</p><span>Mehr</span></div></div>")})),c.addListener("mouseout",(function(){n.close()})))}}function calcRoute(e,n,o){console.log("calcRoute('"+e+"','"+n+"',next)");var s=new google.maps.DirectionsService,i={origin:e,destination:n,travelMode:"BICYCLING"};s.route(i,(function(s,i){"OK"==i?((directionsDisplay=new google.maps.DirectionsRenderer({suppressBicyclingLayer:!0,suppressMarkers:!0,preserveViewport:!0})).setMap(map),directionsDisplay.setDirections(s),bounds.union(s.routes[0].bounds),map.fitBounds(bounds)):console.log("status="+i+" (start="+e+", end="+n+")"),o()}))}function nextPin(){0<frogPins.length?calcRoute(frogPins[0],frogPins[1],nextPin):map.fitBounds(bounds)}nextPin();var btnOpen=document.querySelector(".hamburger"),btnClose=document.querySelector(".close"),menu=document.querySelector(".menu-container");btnOpen.addEventListener("click",(function(){menu.style.display="block"})),btnClose.addEventListener("click",(function(){menu.style.display="none"}));var searchInput=document.querySelector(".search-box"),searchImg=document.querySelector(".search-menu"),searchPage=document.querySelector(".home-search"),menuPage=document.querySelector(".menu-container"),closeBtn=document.querySelector(".close-search-page");searchInput.addEventListener("click",(function(){searchPage.style.display="flex"})),searchImg.addEventListener("click",(function(){searchPage.style.display="flex",console.log("click")})),closeBtn.addEventListener("click",(function(){searchPage.style.display="none",console.log("click")}));
//# sourceMappingURL=all.js.map
