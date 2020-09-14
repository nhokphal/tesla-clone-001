import React from 'react';
import '../../Containers/TeslaBattery.css';
import TeslaNotice from '../../Components/TeslaNotice/TeslaNotice';
import TeslaCar from '../../Components/TeslaCar/TeslaCar';

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaNotice />
        <TeslaCar />
      </form>
    )
  }
}
export default TeslaBattery;