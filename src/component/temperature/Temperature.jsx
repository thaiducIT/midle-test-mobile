import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Temperature = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // get device location
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      const API_KEY = 'YOUR_API_KEY';
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`;

      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [location]);

  return (
    <View>
      {weatherData ? (
        <View>
          <Text>{weatherData.name}</Text>
          <Text>{weatherData.main.temp} °C</Text>
          <Text>{weatherData.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
};

export default Temperature;