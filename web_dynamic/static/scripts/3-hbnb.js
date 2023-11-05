$(document).ready(function () {
    $("input").on('change', function () {

        let saveAmenity = {};

        $("input").each(function () {
            let amenityId = $(this).data('id');
            let amenityName = $(this).data('name');

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
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });


    const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search';

    $.ajax({
        type: 'POST',
        url: apiUrl,
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function (valuePla) {
            valuePla.forEach(place => {
                let guest = (place.max_guest !== 1) ? 's' : '';
                let bathroom = (place.number_bathrooms !== 1) ? 's' : '';
                let roomNum = (place.number_rooms !== 1) ? 's' : '';
                let placeArticle = `<article>
                    <div class="title_box">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                        <div class="max_guest">${place.max_guest} Guest${guest}</div>
                        <div class="number_rooms">${place.number_rooms}
                        Bedroom${roomNum}</div>
                        <div class="number_bathrooms">${place.number_bathrooms}
                        Bathroom${bathroom}</div>
                    </div>
                    <div class="user">
                        
                    </div>
                    <div class="description">
                        ${place.description}
                    </div>
                </article>`;
                $('.valuePla').append(placeArticle);
            });
        }
    });
});
