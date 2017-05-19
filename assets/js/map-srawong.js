function initialize() {
  var latlng = new google.maps.LatLng(13.727537, 100.524481);
  var myOptions = {
    zoom: 16, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
  };
  var map1 = new google.maps.Map(document.getElementById('map_srawong'), myOptions);
  //create icon
   var icon = new google.maps.MarkerImage('assets/imgs/map-pointer.svg',
    new google.maps.Size(76,100), /*icon size*/
    new google.maps.Point(0,0),  // origin
    new google.maps.Point(60,100) // anchor
    );
  var markerOptions = {
    position: latlng,
    map: map1,
    icon: icon,
    title: ''
  };
  var marker = new google.maps.Marker(markerOptions);

}