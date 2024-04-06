const API_KEY = `d12a66a872e04e3288a143205240604`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch(error => {
            setInnerText('city', "try agen");

            setInnerText('temperature', "0");
            setInnerText('condition', "0");

            // console.error('There was a problem fetching the weather data:', error);
        });

    document.getElementById('city-name').value = "";
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
function displayTemperature(temperature) {
    console.log(temperature);
    setInnerText('city', temperature.location.name);
    setInnerText('temperature', temperature.current.temp_c);
    setInnerText('condition', temperature.current.condition.text);

    // Ensure the URL starts with either https:// or http://
    const iconUrl = temperature.current.condition.icon.startsWith('//') ? 'https:' + temperature.current.condition.icon : temperature.current.condition.icon;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl);
}


