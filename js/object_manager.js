ymaps.ready().done(function (ym) {
  var myMap = new ym.Map(
    "map",
    {
      center: [57.8136, 28.3496],
      zoom: 11,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  var myCollection = new ymaps.GeoObjectCollection();
  myMap.geoObjects.add(myCollection);

  var circles = [
    [[56.521954, 30.972824], 4000],
    [[58.436048, 28.368572], 4000],
    [[58.769888, 28.298414], 4000],
    [[57.195376, 29.520599], 4000],
    [[57.613873, 29.469808], 4000],
    [[56.401156, 29.474811], 4000],
    [[56.512538, 29.41431], 4000],
    [[56.141558, 29.30459], 4000],
    [[56.101012, 29.058317], 4000],
    [[58.425782, 28.696556], 4000],
    [[56.807304, 29.472125], 4000]
  ];
  for (var i = 0; i < circles.length; i++) {
    myCollection.add(new ymaps.Circle(circles[i]));
  }

  jQuery.getJSON("data.json", function (json) {
    var geoObjects = ym.geoQuery(json).addToMap(myMap).applyBoundsToMap(myMap, {
      checkZoomRange: true,
    });
  });
});
