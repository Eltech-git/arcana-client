import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonImg,
  IonText,
  IonAvatar,
  IonTabBar,
  IonTabButton,
  IonBadge,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonFabButton,
  IonFab
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactMic } from "react-mic";
import { mic, micOff, checkmark } from "ionicons/icons";

import "../theme/detail.css";

class RecordAudio extends React.Component {
  state = {
    record: false,
    image: "",
    operationID: ""
  };

  ionViewWillEnter() {
    console.log("RecordAudio");
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = recordedBlob => {
    console.log("recordedBlob", recordedBlob);
    axios
      .post("http://3ef3c07b.ngrok.io/speech", recordedBlob)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    this.props.history.push({
      pathname: "/app/operationdetail"
    });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonText className="text">
                Registra il tuo commento (max 50 sec)
              </IonText>
              <IonGrid className="grid-detail"></IonGrid>
            </IonToolbar>
          </IonHeader>
          {console.log(
            "oooooooooperatioooooooooooon",
            this.props.location.operationID
          )}
          ;
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#000000"
            backgroundColor="rgba(219, 224, 241, 0.02)"
          />
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="light" onClick={this.stopRecording}>
              <IonIcon icon={micOff} />
            </IonFabButton>
          </IonFab>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="light" onClick={this.startRecording}>
              <IonIcon icon={mic} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  }
}

export default RecordAudio;
