/*global variables*/
    let dateValue = document.getElementById('formDate').value;
    let venueValue = document.getElementById('formName').value;
    let addressValue = document.getElementById('formAddress').value;
    let dateEncoded = encodeURI(dateEncoded);
    let venueEncoded = encodeURI(venueValue);
    let addressEncoded = encodeRI(addressValue);

/*fetch from SunriseSunset API*/
function fetchSunriseSunset() {
    let requestSunriseSunset = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAgxqv-S0ZW8i0nQCAPsQ-eMnC6T4ZDCmU&address=' + addressEncoded;
    fetch(requestSunriseSunset)
};

/*fetch from Openweather API*/


/*fetch from Google Image Search API*/


/*reveal results*/


/*display sunrise*/


/*display sunset*/


/*display weather*/


/*display Google Images*/


/*create Streetview URL*/


/*pass Google Streetview URL*/


/*redirect to Google Streetview on button click*/


/*handle click submit button*/
function clickSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        console.log('clickSubmit Activated');        
    });
};

/*handle app*/