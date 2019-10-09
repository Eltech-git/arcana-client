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
import "../theme/detail.css";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactMic } from "react-mic";
import { mic, micOff, checkmark, nuclear } from "ionicons/icons";
import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;

class RecordAudio extends React.Component {
  state = {
    record: false,
    image: "",
    operationID: "",
    request: {
      lat: 0,
      lng: 0,
      operation: this.props.location.operationID,
      picture: this.props.location.image.dataUrl,
      text:
        "Si richiede attività di OCP su soggetto per sospetta infedeltà copniugale, il soggetto lavora in via delle pere dalle ore 09.00 alle ore 14.00, si sospetta che esca con l'amante il giovedì sera per recarsi presso il ristorante pane e olio di via di ripetta"
    }
  };

  componentWillMount() {
    Geolocation.getCurrentPosition().then(result => {
      let gotlongitude = result.coords.longitude;
      let gotlatitude = result.coords.latitude;
      let request = this.state.request;
      request.lat = gotlatitude;
      request.lng = gotlongitude;
      console.log(gotlatitude);
      console.log(gotlongitude);
      this.setState({ request });
    });
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
      .post("http://dba26fb1.ngrok.io/speech", recordedBlob)
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

  createComment = () => {
    console.log("comment");
    let token = localStorage.getItem("token");
    let key = "token";
    axios
      .post(`http://dba26fb1.ngrok.io/agent?${key}=${token}`)
      .then(res => {
        let idUser = res.data;
        let request = this.state.request;
        request.user = idUser;
        console.log(request);
        axios
          .post("http://dba26fb1.ngrok.io/comments", request)
          .then(res => {
            console.log(res);
            this.props.history.push({
              pathname: "/app/operationdetail"
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {});
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
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton color="light" onClick={this.createComment}>
              <IonIcon icon={nuclear} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  }
}

export default RecordAudio;
