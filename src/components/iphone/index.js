// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import Nav from '../nav';
import { recommendations } from '../../lib/recommendations';
import { locations, partOf, backgroundData } from '../../lib/helperData';
// extract needed weather data
import WeatherFormat from './WeatherFormat';

export default class Iphone extends Component {

 // initial set states

  state = {
    tempType: 'temp_c',
    display: true,
    City: [],
    London: [],
    showDetails: true
  };

 // Change temperature unit
  handleTempUnitChange = () => {
    const currentUnit = this.state.tempType;
    if (currentUnit === 'temp_c') {
      return this.setState({ tempType: 'temp_f' });
    }
    return this.setState({ tempType: 'temp_c' });
  }

  // API call to fetch weather data via wunderground
  fetchWeatherData = (place) => {
    const url = locations[place].url;

    $.ajax({
      url,
      dataType: "jsonp"
    }).done((data) => {
      this.parseResponse(data, place);
    }).fail((err) => {
      return console.log(err.message);
    });
  }

  toggleDetails = (styleName) => {
    const showDetails = this.state.showDetails;
    if (showDetails) {
      $(`.${styleName}`).slideUp('slow');
      return this.setState({ showDetails: !showDetails });
    }
    $(`.${styleName}`).slideDown('slow');
    return this.setState({ showDetails: !showDetails });
  }

  setBackground = (ind = 0) => {
    const grey = ['Cloudy', 'Cloud', 'Fog', 'Mist', 'Haze', 'Overcast'];
    const rain = ['Rainy', 'Rain', 'Drizzle', 'Hail', 'Showers'];
    const weather = this.state.City[ind];
    const city = weather.city.toLowerCase();
    if (city === 'london') {
      return;
    }
    const conditon = weather.cond.split(' ');
    const container = '.' + style.container;
    const elem = document.querySelector(container);
    const elemClasses = elem.classList.toString().split(' ');
    elemClasses.length > 1 ? elem.classList.remove(elemClasses[1]) : '';
    if (partOf(rain, conditon)) {
      elem.classList.add(backgroundData[city].rain);
      return;
    }
    if (partOf(grey, conditon)) {
      elem.classList.add(backgroundData[city].cloud);
      return;
    }
    elem.classList.add(backgroundData[city].style);

  }

  renderMainWeather = () => {
    const tempType = this.state.tempType;
    const tempStyles = this.state.London[0][tempType].avg ? `${style.temperature} ${style.filled}` : style.temperature;
    const weather = this.state.London[0];
    return (
      <div class={style.main}>
        <div class={style.city}>{weather.city}</div>
        <div class={style.conditions}>{weather[tempType].avg}&deg;C</div>
        <div class={style.small}>{weather[tempType].low}&deg;C {weather[tempType].high}&deg;C</div>
      </div>
    );
  }

  renderCityWeather = () => {
    // check if temperature data is fetched, if so add the sign styling to the page
    const tempType = this.state.tempType;
    const tempStyles = this.state.London[0][tempType].avg ? `${style.temperature} ${style.filled}` : style.temperature;
    const weather = this.state.City;
    const forecast = [];
    weather.forEach(day => {
      forecast.push(<div class={style.forecast}>
        <div class={style.forecast_day} >
          <span class={style.day}>{day.day}</span>
          <span class={style.date}>{day.date}</span>
        </div>
        <div class={style.iconUrl}>
          <img src={day.icon_url} />
        </div>
        <div class={style.stats}>
          <div class={style.temp}>
            <span>
              {day[tempType].high}/{day[tempType].low}
              <span class={style.deg}> &deg;{tempType === 'temp_c' ? 'C' : 'F'}</span>
            </span>
          </div>
          <span class={style.temp}>{day.cond}</span>
          <span class={style.temp}>Humidity: {day.humidity}</span>
        </div>
      </div>);
    });
    return <div class={style.city_weather}>
      <div styles={{ "paddingTop": 0 }}>{this.state.City[0].city}</div>
      {forecast}
    </div>;

  }
  // the main render method for the iphone component
  render() {
    // display all weather data
    return (
      <div class={style.container}>
        {this.state.display ?
          <div class={style_iphone.container}>
            <Button class={style_iphone.button}
              text='Display Weather'
              clickFunction={this.fetchWeatherData}
            />
          </div>
          :
          <div>
            <Nav style={style.container} getCondition={this.fetchWeatherData} />
            <div>{this.renderMainWeather()}</div>
            <div class={style.lower}>
              <div class={style.toggle} onClick={this.toggleDetails.bind(null, "hideDetails")}>Toggle</div>
              <div class="hideDetails">
                <div class={style.temp_toggle}>&deg;C
                  <label class={style.switch}>
                    <input type="checkbox" />
                    <div onClick={this.handleTempUnitChange} class={`${style.slider} ${style.round}`}></div>
                  </label>&deg;F
                </div>
                <div class={style.details}>
                  {this.renderCityWeather()}
                  <div class={style.recommendation}>
                    {recommendations[this.state.City[0].cond]}
                    <div class={style.clothings}>
                      <img src="../../assets/wears/dress.png" alt="a dress" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

  parseResponse = (parsed_json, location) => {
    // log error if call returns error
    if (parsed_json.response.error) {
      return console.log('API call failed ',
        parsed_json.response.error.description);
    }

    const weatherInfo =
      WeatherFormat(parsed_json.forecast.simpleforecast.forecastday, location);

    // set states for fields so they could be rendered later on
    if (location === 'London') {
      this.setState({ London: weatherInfo });
    }
    this.setState({ City: weatherInfo, display: false });
    this.setBackground();
  }
}
