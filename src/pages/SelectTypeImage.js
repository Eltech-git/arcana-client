import {
  IonContent,
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
  IonButton,
  IonInput,
  IonItem,
  IonImg,
  IonRouterLink,
  IonHeader,
  IonFab,
  IonFabButton
} from "@ionic/react";
import { Route } from "react-router-dom";
import { person, logoModelS, image, mic } from "ionicons/icons";
import React from "react";
import Agents from "./Agents";
import "../theme/select.css";
import axios from "axios";

class SelectTypeImage extends React.Component {
  state = {
    url: this.props.location.image,
    _id: this.props.location._id
  };

  moveToRecord = () => {
    // axios.post("faccia/sdsdfdsf");
    // window.location = "record";
    this.props.history.push({
      pathname: "/record"
    });
  };

  componentWillMount() {
    console.log(this.props.location.image);
  }

  // url mandare

  checkFace = e => {
    let check = this.state;
    axios
      .post(`http://61a9362b.ngrok.io/face`, check)
      .then(data => {
        console.log("data >>>", data);
      })
      .catch(err => {
        console.log("err >>>", err);
      });
  };

  checkPlate = e => {
    let check = {
      url:
        "https://static.allaguida.it/r/845X0/www.allaguida.it/img/Alfa-Romeo-Giulia4.jpg"
    };
    axios
      .post(`http://61a9362b.ngrok.io/plate`, check)
      .then(data => {
        console.log("data >>>", data);
      })
      .catch(err => {
        console.log("err >>>", err);
      });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="login">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonText>Riconoscimento</IonText>
            </IonToolbar>
          </IonHeader>
          <IonGrid className="grid-select">
            <IonButton
              onClick={this.checkFace}
              className="button"
              shape="round"
            >
              <IonIcon icon={person} />
              Viso
            </IonButton>
            <IonButton
              className="button"
              shape="round"
              onClick={this.checkPlate}
            >
              <IonIcon icon={logoModelS} />
              Targa
            </IonButton>
            <IonButton className="button" shape="round">
              <IonIcon icon={image} />
              Altro
            </IonButton>
            <span>Viso riconosciuto</span>
          </IonGrid>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="light" onClick={this.moveToRecord}>
              <IonIcon icon={mic} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  }
}

export default SelectTypeImage;
