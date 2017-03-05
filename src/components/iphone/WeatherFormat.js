export default function WeatherFormat(forecasts, location) {
  return forecasts.map((forecast) => {
    const data = {
      temp_c: {},
      temp_f: {}
    };

    data.day = forecast.date.weekday_short;
    data.date = `${forecast.date.day} ${forecast.date.monthname_short}`;

    data.temp_c.avg = ((parseInt(forecast.high.celsius, 10) +
      parseInt(forecast.low.celsius, 10)) / 2).toFixed(2);
    data.temp_f.avg = ((parseInt(forecast.high.fahrenheit, 10) +
      parseInt(forecast.low.fahrenheit, 10)) / 2).toFixed(2);

    data.temp_c.low = forecast.low.celsius;
    data.temp_c.high = forecast.high.celsius;
    data.temp_f.low = forecast.low.fahrenheit;
    data.temp_f.high = forecast.high.fahrenheit;
    data.cond = forecast.conditions;
    data.icon_url = forecast.icon_url;
    data.humidity = forecast.avehumidity;
    data.city = location;
    return data;
  });
}