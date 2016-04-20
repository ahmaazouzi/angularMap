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
    }
];

var app1 = angular.module('app1', []);
app1.controller('mappa', function($scope){
    var mapOptions = {
          center: {lat: 39.0119, lng: -98.4842},
          zoom: 5,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER}      
      };
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.markers = [];

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
            infoWindow.setContent('<h2>'+ marker.nana+'</h2><p>'+marker.content+'</p>')
            infoWindow.open($scope.map, marker);
            if ($(".col-md-4").is(":visible")){
                $(".col-md-4").slideToggle( "slow");
            }

        });

        }

        for (i in cities){
            Markado(cities[i])};

        $scope.openInfoWindow = function(e, markerito){
            e.preventDefault();
            google.maps.event.trigger(markerito, 'click');
            $scope.map.panTo(markerito.getPosition())}
});

$("button").click(function() {
  $(".col-md-4").slideToggle( "slow");
});
