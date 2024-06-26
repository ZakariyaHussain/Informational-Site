jQuery(function(e) {
    "use strict";
    google.maps.event.addDomListener(window, "load", function() {
        var e, t, o = {
                zoom: 15,
                draggable: !0,
                scrollwheel: !1,
                animation: google.maps.Animation.DROP,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: new google.maps.LatLng(-37.813628, 144.963058),
                styles: [{
                    stylers: [{
                        saturation: -100
                    }, {
                        gamma: 1
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.business",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.business",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.place_of_worship",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.place_of_worship",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        visibility: "on"
                    }, {
                        saturation: 50
                    }, {
                        gamma: 0
                    }, {
                        hue: "#82c1e1"
                    }]
                }, {
                    featureType: "administrative.neighborhood",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#c5c5c5"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "labels.text",
                    stylers: [{
                        weight: .9
                    }, {
                        color: "#000"
                    }]
                }, {
                    featureType: "transit.station",
                    elementType: "labels.icon",
                    stylers: [{
                        gamma: 1
                    }, {
                        saturation: 50
                    }]
                }]
            },
            i = document.getElementById("map"),
            s = new google.maps.Map(i, o),
            l = [
                ['<p"class="logomap">Fab</p>', -37.813628, 144.963058, "img/pin.png"]
            ],
            a = new google.maps.InfoWindow;
        for (t = 0; t < l.length; t++) e = new google.maps.Marker({
            position: new google.maps.LatLng(l[t][1], l[t][2]),
            animation: google.maps.Animation.BOUNCE,
            map: s,
            icon: l[t][3]
        }), google.maps.event.addListener(e, "click", function(e, t) {
            return function() {
                a.setContent(l[t][0]), a.open(s, e)
            }
        }(e, t))
    })
});