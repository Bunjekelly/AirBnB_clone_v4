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
});