import React from "react";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

class Camera extends React.Component {
  state = {
    image: "empty"
  };
  componentWillMount() {
    defineCustomElements(window);
  }
  takePicture = () => {
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
      .then(image => {
        console.log("image", image);
        this.setState({ image });
        this.props.sendPhoto(image);
      })
      .catch(err => {
        console.log("err", err);
      });

    // let photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  };

  render() {
    return (
      <div>
        <span>{this.state.image.dataUrl}</span>
        <button onClick={this.takePicture}>PHOTO</button>;
      </div>
    );
  }
}

export default Camera;
