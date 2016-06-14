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

    var infoWindow = new google.maps.InfoWindow({maxWidth:350});

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
            //infoWindow.setContent('<div id="iw-container"><div class="iw-title">'+ marker.nana+'</div></div>')


    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+
        marker.nana + '&format=json&callback=wikiCallback';



    infoWindow.setContent('<div id="iw-container">' +
                    '<div class="iw-title">' + marker.nana + '</div>' +
                    '<div class="iw-content">' +
                      //'<img>'  + //src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="275" width="322">' +
                      '<p id="wiki">' + 
                      //'<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>')


        var $wikiElem = $('#wiki');

        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            jsonp: "callback",
            //callback function
            success: function(response){
                var articleList = response[2];
                var linka = response[1];

                // for (var i = 0; i < articleList.length; i++){
                //     articleStr = articleList[i];
                articleStr = articleList[0];
                linkada = linka[0];
                var url = 'http://en.wikipedia.org/wiki/' + linkada;
                 $wikiElem.append(articleStr + '<a style="color:lightblue" href="' + 
                    url+
                     '">' + '</br>Read more..' + '</a>');
                        //'<li><a href="' + url + '">' +
                         
                         //+ '</a></li>'
                         //);
                // }
            }
        })


        var $img = $(".iw-content");
        var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=320x275&location='+
            marker.nana + '';
        $img.append('<img class="bgimg" src="' + streetViewUrl + '">')        



            infoWindow.open($scope.map, marker);

        });

        }

        for (i in cities){
            Markado(cities[i])};

        $scope.openInfoWindow = function(e, markerito){
            e.preventDefault();
            google.maps.event.trigger(markerito, 'click');
            $scope.map.panTo(markerito.getPosition())}


google.maps.event.addListener($scope.map, 'click', function() {
    infoWindow.close();
  });


google.maps.event.addListener(infoWindow, 'domready', function() {
   var iwOuter = $('.gm-style-iw');
   var iwBackground = iwOuter.prev();
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});

   iwOuter.parent().parent().css({left: '115px'});
   iwBackground.children(':nth-child(1)').attr('style',
    function(i,s){ return s + 'left: 76px !important;'});
   iwBackground.children(':nth-child(3)').attr('style',
    function(i,s){ return s + 'left: 76px !important;'});
   iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px',
    'z-index' : '1'});
   var iwCloseBtn = iwOuter.next();
    iwCloseBtn.css({'display': 'none'});
   // iwCloseBtn.css({opacity: '1', right: '38px', top: '3px',
   //  border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
});

});



var duration = 'slow';
$("button").click(function() {
  $(".col-md-4").animate({width:'toggle'}, 150);
});

$(".fa-angle-left").click(function() {
  $(".col-md-4").animate({width:'toggle'}, 150);
});



