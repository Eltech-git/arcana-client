import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonBadge,
  IonIcon,
  IonLabel,
  IonFabButton,
  IonFab,
  withIonLifeCycle
} from "@ionic/react";

import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { arrowRoundBack, add } from "ionicons/icons";

class Camera extends React.Component {
  state = {
    image: "empty"
  };
  componentWillMount() {
    defineCustomElements(window);
  }
  takePicture = () => {
    Plugins.Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      correctOrientation: true,
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
  // <div>
  // 	<span>{this.state.image.dataUrl}</span>
  // 	<button onClick={this.takePicture}>PHOTO</button>;
  // </div>

  render() {
    return (
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="light" onClick={this.takePicture}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    );
  }
}

export default Camera;
