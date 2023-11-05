$(document).ready(function () {
    $("input").on('change', function () {

        let saveAmenity = {};

        $("input").each(function () {
            const amenityId = $(this).data('id');
            const amenityName = $(this).data('name');

            if ($(this).is(":checked")) {
                saveAmenity[amenityId] = amenityName;
            } else {
                delete saveAmenity[amenityId];
            }
        });

        let amenityList = Object.values(saveAmenity).join(', ');
        $(".amenities h4").text(amenityList);
    });

    // To make request to api
    function apiStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        });
    }
    apiStatus()

});
