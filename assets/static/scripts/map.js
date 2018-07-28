ymaps.ready(() => {
    initYmaps(ymaps, 'map');
    console.log('init maps')
});

function initYmaps(ymaps, container) {
    const myMap = new ymaps.Map(container, {
        center: [59.94, 30.30],
        controls: [],
        zoom: 11
    });

    const coords = 
    [ 
        [ 59.97, 30.31 ],
        [ 59.95, 30.38 ],
        [ 59.91, 30.48 ],
        [ 59.88, 30.31 ] 
    ]

    const myCollection = new ymaps.GeoObjectCollection();

    for (let i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i], {}, { 
            iconLayout: "default#image",
            iconImageHref: "images/content/contact/map-marker.svg",
            iconImageSize: [ 46, 57.727 ]
        }));
    }
    
    myMap.geoObjects.add(myCollection);
}