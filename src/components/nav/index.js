// import preact
import { h, render, Component } from 'preact';
// import the button component
import style from './style';
import { backgroundData } from '../../lib/helperData';

// build the nav component
export default class Nav extends Component {
  changeCity = (e) => {
    const city = e.target.value.toLowerCase();
    this.props.getCondition(backgroundData[city].place);
  }

  render() {
    const imgPath = '../../assets/backgrounds/';
    return (
      <div class={style.city_buttons}>
        <select onChange={this.changeCity}>
          <option selected disabled hidden>Select City</option>
          <option value="big ben">Big Ben</option>
          <option value="buckingham">Buckingham Palace</option>
          <option value="greenwich">Greenwich</option>
          <option value="st pauls">St. Pauls</option>
          <option value="shards">Shards</option>
          <option value="tower bridge">Tower Bridge</option>
        </select>
      </div>
    );
  }
}
