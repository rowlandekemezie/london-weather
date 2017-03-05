import style from '../components/iphone/style';

export const locations = {
  "London": {
    "url": "http://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/London.json"
  },
  "Buckingham": {
    "url": "http://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/Buckingham.json"
  },
  "St. Pauls": {
    "url": "http://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/City%20of%20London.json"
    //url for shards, st pauls and tower bridge are not available at the moment
  },
  "Tower Bridge": {
    "url": "http://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Bermondsey.json"
    //url for shards, st pauls and tower bridge are not available at the moment
  },
  "Shards": {
    "url": "http://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Minchinhampton.json"
    //url for shards, st pauls and tower bridge are not available at the moment
  },
  "Greenwich": {
    "url": "http://api.wunderground.com/api/56e8a29514044fcf/forecast/q/Uk/Greenwich.json"
  },
  "Big Ben": {
    "url": "http://api.wunderground.com/api/2cf6aee65910be39/forecast/q/UK/Puddle%20Dock.json"
    //url for shards, st pauls and tower bridge are not available at the moment
  }
};

export const backgroundData = {
  buckingham: {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.buckingham_night_rain : style.buckingham_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.buckingham_night : style.buckingham_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.buckingham_night : style.buckingham_day,
    place: "Buckingham"
  },
  greenwich: {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.greenwich_night_rain : style.greenwich_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.greenwich_night : style.greenwich_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.greenwich_night : style.greenwich_day,
    place: "Greenwich"
  },
  "st pauls": {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.st_pauls_night_rain : style.st_pauls_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.st_pauls_night : style.st_pauls_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.st_pauls_night : style.st_pauls_day,
    place: "St Pauls"
  },
  shards: {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.shards_night_rain : style.shards_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.shards_night : style.shards_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.shards_night : style.shards_day,
    place: "Shards"
  },
  "tower bridge": {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.tower_bridge_night_rain : style.tower_bridge_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.tower_bridge_night : style.tower_bridge_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.tower_bridge_night : style.tower_bridge_day,
    place: "Tower Bridge"
  },
  "big ben": {
    rain: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.bigben_night_rain : style.bigben_day_rain,
    cloud: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.bigben_night : style.bigben_day_grey,
    sunny: new Date().getHours() > 18 || new Date().getHours < 6 ?
      style.bigben_night : style.bigben_day,
    place: "Big Ben"
  }
};

export function partOf(listOne, listTwo) {
  let result = false;
  listOne.forEach(item => {
    if (listTwo.includes(item)) {
      result = true;
    }
  });
  return result;
}
