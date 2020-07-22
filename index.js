/*global variables*/
    /*let venueValue = document.getElementById('formName').value;*/
    /*let venueEncoded = encodeURI(venueValue);*/

/*fetch from SunriseSunset API*/
function fetchLongiLati() {
    console.log('fetchLongiLati activated');
    let addressValue = document.getElementById('formAddress').value;
    /*let addressEncoded = encodeURI(addressValue);*/
    let requestLongiLati = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCc_CaGw29Hr8YeCBjcBo1kfJo7HHfujPs&address=' + addressValue;
    fetch(requestLongiLati)
        .then(response => response.json())
            .then(responseJson => fetchSun(responseJson))
                /*.then (responseJson => fetchWeather)*/
                    .catch(error => console.log(error));
};

/*extract longitude/latitude data, then fetch sunrise/sunset times*/
function fetchSun() {
    console.log('fetchSun activated');
    let dateValue = document.getElementById('formDate').value;
    let dateEncoded = encodeURI(dateValue);
    let lati = responseJson.geometry.location.lat;
    let longi = message.geometry.location.lng;
    fetch('https://api.sunrise-sunset.org/json?lat='+lati+'&lng='+longi+'&date='+dateEncoded)
        .then(response => response.json())
            .then(responseJson => displaySun(responseJson))
                .catch(error => console.log(error));
};

/*fetch from Openweather API*/
/* FUTURE FEATURE
function fetchWeather() {
    console.log('fetchWeather activated');
    const OWKey = '787e359aa12588a9799f38f147abda6f'
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=`+lati+`&lon=`+longi+`&appid=`+OWKey)
        .then(response => response.json())
            .then(responseJson => displayWeather(responseJson))
                .catch(error => console.log(error));
}
*/

/*fetch from Google Image Search API*/


/*reveal results*/


/*display sunrise/sunset*/
function displaySun() {
    console.log('displaySun activated');
    let sunriseTime = responseJson.results.sunrise;
    let sunsetTime = responseJson.results.sunset;
    $('.display-sunriseTime').append(`${sunriseTime}`);
    $('.display-sunsetTime').append(`${sunsetTime}`);
};


/*empties display containers*/
function emptyContainers() {
    console.log('emptyContainers activated');
    $('.display-sunriseTime').empty();
    $('.display-sunsetTime').empty();
    /*$('.weather-results').empty();
    $('.image-results').empty();*/
}

/*handle click submit button*/
function clickSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        console.log('clickSubmit Activated');
        $('.results-container').removeClass('hidden');        
        emptyContainers();
        fetchLongiLati();
    });
};

/*handle app*/
function handleApp() {
    console.log('Ready to look at some suns and stuff');
    $(clickSubmit);
}

$(handleApp);