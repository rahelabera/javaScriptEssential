function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
  
    const apiKey = '2f89820a67640cf46f00285eaaedf97f';
  
    let url;
  
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
      alert("Please enter either city OR latitude & longitude");
      return;
    }
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
  
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('weatherInfo').innerHTML =
          `<p>${error.message}</p>`;
      });
  }
  
  document.getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);