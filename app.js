var cities = [
    {
        city : 'Toronto',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu nulla.',
        lat : 43.7000,
        longa : -79.4000
    },
    {
        city : 'New York',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu!',
        lat : 40.6700,
        longa : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu nulla.',
        lat : 41.8819,
        longa : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu nulla.',
        lat : 34.0500,
        longa : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu nulla.',
        lat : 36.0800,
        longa : -115.1522
    },
        {
        city : 'Los Angeles',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nunc, sit amet lacinia augue. Praesent sodales mi ante, ac finibus sem maximus eget. Ut non bibendum odio, in suscipit nisl. Aenean ut sem in ligula varius sodales. Sed in libero nec velit tincidunt ultrices. Vivamus imperdiet quam accumsan ullamcorper posuere. Etiam arcu leo, luctus sed mollis sit amet, blandit eu nulla.',
        lat : 34.0500,
        longa : -118.2500
    },

];

var app1 = angular.module('app1', []);
app1.controller('mappa', function($scope){

    var styles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]


    var mapOptions = {
          center: {lat: 39.0119, lng: -98.4842},
          zoom: 5,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT}      
      };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.map.setOptions({styles: styles});
    $scope.markers = [];

    $scope.myData = JSON.stringify(cities);

    var infoWindow = new google.maps.InfoWindow({maxWidth:200});

    var Markado = function(argumado){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(argumado.lat, argumado.longa),
            map: $scope.map,
            title: argumado.city
        });

        marker.content = '<div>' + argumado.desc + '</div>'
        marker.nana = argumado.city

        $scope.markers.push(marker);
        marker.addListener('click', function() {
            infoWindow.setContent('<h2>'+ marker.nana+'</h2>')
            infoWindow.open($scope.map, marker);

        });

        }

        for (i in cities){
            Markado(cities[i])};

        $scope.openInfoWindow = function(e, markerito){
            e.preventDefault();
            google.maps.event.trigger(markerito, 'click');
            $scope.map.panTo(markerito.getPosition())}



});


var duration = 'slow';
$("button").click(function() {
  $(".col-md-4").animate({width:'toggle'}, 150);
});

$("i").click(function() {
  $(".col-md-4").animate({width:'toggle'}, 150);
});



