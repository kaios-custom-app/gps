window.addEventListener('DOMContentLoaded', function() {

  'use strict';

    var options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      document.write('Your current position is:\n');
      document.write(`Latitude : ${crd.latitude}\n`);
      document.write(`Longitude: ${crd.longitude}\n`);
      document.write(`More or less ${crd.accuracy} meters.\n`);
    }

    function error(err) {
      document.write(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

});
