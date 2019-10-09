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
  IonFabButton,
  IonAvatar
} from "@ionic/react";
import { Route } from "react-router-dom";
import { person, logoModelS, image, mic, logoIonic } from "ionicons/icons";
import React from "react";
import Agents from "./Agents";
import "../theme/select.css";
import axios from "axios";

class SelectTypeImage extends React.Component {
  state = {
    url: this.props.location.image,
    opID: this.props.location.operationID,
    _id: this.props.location._id,
    faceRecon: {
      isIdentical: false,
      confidence: 0
    },
    result: `Indice di affinità volti`,
    target: {},
    large: false
  };

  moveToRecord = () => {
    // axios.post("faccia/sdsdfdsf");
    // window.location = "record";
    this.props.history.push({
      pathname: "/app/record",
      image: this.state.url,
      operationID: this.state.opID
    });
  };

  componentWillMount() {
    console.log(this.props.location.image);

    axios
      .get(`${process.env.REACT_APP_API}/targets/${this.props.location._id}`)
      .then(res => {
        let target = res.data;
        console.log(target);
        this.setState({
          target: target
        });
      });
  }

  // url mandare

  checkFace = e => {
    this.setState({
      result: "Elaborazione affinità volti...attendere prego"
    });
    let check = this.state;
    console.log("check", check);

    axios
      .post(`${process.env.REACT_APP_API}/face`, check)
      .then(data => {
        let recon = data.data;
        this.setState({
          faceRecon: recon,
          result: `Indice di affinità volti: `
        });
        console.log("data >>>", data.data);
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
      .post(`${process.env.REACT_APP_API}/plate`, check)
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
              <IonText>Riconoscimento Viso</IonText>
            </IonToolbar>
          </IonHeader>
          <IonGrid className="grid-photos">
            <IonGrid className="grid-target">
              <IonText className="target-text">Target</IonText>
              <IonAvatar className="avatar-select">
                <img src={this.state.target.pictures} />
              </IonAvatar>
            </IonGrid>
            <IonGrid className="grid-target">
              <IonText className="target-text">Soggetto</IonText>
              <IonAvatar className="avatar-select">
                <img src={this.state.url.dataUrl} />
              </IonAvatar>
            </IonGrid>
          </IonGrid>
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
            <IonText className="text">{`${this.state.result} ${
              this.state.faceRecon.confidence === 0
                ? ""
                : this.state.faceRecon.confidence * 100 + " %"
            }`}</IonText>
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
