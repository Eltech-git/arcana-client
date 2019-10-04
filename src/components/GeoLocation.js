import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

class Geolocation extends React.component {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current", coordinates);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {});
  }
}
export default Geolocation;
