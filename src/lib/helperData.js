import style from '../components/iphone/style';

export const locations = {
  "London": {
    "url": "https://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/London.json"
  },
  "Buckingham": {
    "url": "https://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/Buckingham.json"
  },
  "St. Pauls": {
    //url for shards, st pauls and tower bridge are not available at the moment
    "url": "http://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/City%20of%20London.json"
  },
  "Tower Bridge": {
    //url for shards, st pauls and tower bridge are not available at the moment
    "url": "https://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Bermondsey.json"
  },
  "Shards": {
    //url for shards, st pauls and tower bridge are not available at the moment
    "url": "https://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Minchinhampton.json"
  },
  "Greenwich": {
    "url": "https://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/Greenwich.json"
  },
  "Big Ben": {
    //url for shards, st pauls and tower bridge are not available at the moment
    "url": "https://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Puddle%20Dock.json"
  }
};


// Background collection for different spots in London
export const backgroundData = {
  buckingham: {
    rain: isNight() ? style.buckingham_night_rain : style.buckingham_day_rain,
    cloud: isNight() ? style.buckingham_night : style.buckingham_day_grey,
    sunny: isNight() ? style.buckingham_night : style.buckingham_day,
    place: "Buckingham"
  },
  greenwich: {
    rain: isNight() ? style.greenwich_night_rain : style.greenwich_day_rain,
    cloud: isNight() ? style.greenwich_night : style.greenwich_day_grey,
    sunny: isNight() ? style.greenwich_night : style.greenwich_day,
    place: "Greenwich"
  },
  "st pauls": {
    rain: isNight() ? style.st_pauls_night_rain : style.st_pauls_day_rain,
    cloud: isNight() ? style.st_pauls_night : style.st_pauls_day_grey,
    sunny: isNight() ? style.st_pauls_night : style.st_pauls_day,
    place: "St Pauls"
  },
  shards: {
    rain: isNight() ? style.shards_night_rain : style.shards_day_rain,
    cloud: isNight() ? style.shards_night : style.shards_day_grey,
    sunny: isNight() ? style.shards_night : style.shards_day,
    place: "Shards"
  },
  "tower bridge": {
    rain: isNight() ? style.tower_bridge_night_rain : style.tower_bridge_day_rain,
    cloud: isNight() ? style.tower_bridge_night : style.tower_bridge_day_grey,
    sunny: isNight() ?  style.tower_bridge_night : style.tower_bridge_day,
    place: "Tower Bridge"
  },
  "big ben": {
    rain: isNight() ? style.bigben_night_rain : style.bigben_day_rain,
    cloud: isNight() ? style.bigben_night : style.bigben_day_grey,
    sunny: isNight() ? style.bigben_night : style.bigben_day,
    place: "Big Ben"
  }
};

// Validate the time of the day
function isNight() {
  return (new Date().getHours() > 18 || new Date().getHours < 6) ? true : false;
}

export const partOf = (listOne, listTwo) => {
  let result = false;
  listOne.forEach(item => {
    if (listTwo.includes(item)) {
      result = true;
    }
  });
  return result;
};
