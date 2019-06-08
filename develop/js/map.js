ymaps.ready(init);

let placemarks = [
    {
        latitude: 55.76057640,
        longitude: 37.61539821,
        hintContent: '<div class="map__hint">Кузнецкий мост</div>',
        balloonContent: [   
            '<div class="map__balloon">',
            'Работаем с 10:00 до 19:00',
            '<img class="map__mark-img" src="img/contacts/bars.png"',
            '</div>'
        ]
    },
    {
        latitude: 55.75147691,
        longitude: 37.59617213,
        hintContent: '<div class="map__hint">Новый Арбат</div>',
        balloonContent: [   
            '<div class="map__balloon">',
            'Работаем с 11:00 до 21:00',
            '<img class="map__mark-img" src="img/contacts/bars.png"',
            '</div>'
        ]
    },
    {
        latitude: 55.76444787,
        longitude: 37.56046657,
        hintContent: '<div class="map__hint">1905 года</div>',
        balloonContent: [   
            '<div class="map__balloon">',
            'Работаем с 10:00 до 20:00',
            '<img class="map__mark-img" src="img/contacts/bars.png"',
            '</div>'
        ]
    }
];

function init() {
    let map = new ymaps.Map('map', {
        center: [55.76115714, 37.57969264],
        zoom: 14,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    placemarks.forEach( function(obj) {
        let placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
            hintContent: obj.hintContent,
            balloonContent: obj.balloonContent.join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/mark.png',
            iconImageSize: [46,57],
            iconOffset: [-23,-57]
        });

        map.geoObjects.add(placemark);

    });

};