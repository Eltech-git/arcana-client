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
  IonFab,
  IonItem,
  IonTextarea
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
    },
    urlbig: {
      url:
        "https://res.cloudinary.com/dint5f4h7/video/upload/v1570612289/test3_l8ul2y.flac"
    }
  };

  componentDidMount() {
    Geolocation.getCurrentPosition().then(result => {
      let gotlongitude = result.coords.longitude;
      let gotlatitude = result.coords.latitude;
      let request = this.state.request;
      request.lat = gotlatitude;
      request.lng = gotlongitude;
      console.log("latitudine goooooooooooooooooot", gotlatitude);
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

  onStop = () => {
    let audio = this.state.urlbig;
    console.log("audio-------", audio);
    axios
      .post("https://arcana-api.herokuapp.com/speech", audio)
      .then(res => {
        console.log("rispostaaaaaaaaaaaaaaa", res);
        let text = res.data;
        let request = this.state.request;
        request.text = text;
        this.setState({
          request
        });
      })
      .catch(err => {
        console.log(err);
      });

    // this.props.history.push({
    //   pathname: "/app/operationdetail"
    // });
  };
  typeComment = event => {
    let text = event.target.value;
    console.log(text);
    let request = this.state.request;
    request.text = text;
    this.setState({
      request
    });
  };

  createComment = () => {
    console.log("comment");
    let token = localStorage.getItem("token");
    let key = "token";
    axios
      .post(`https://arcana-api.herokuapp.com/agent?${key}=${token}`)
      .then(res => {
        let idUser = res.data;
        axios
          .get(`https://arcana-api.herokuapp.com/users/${idUser}`)
          .then(res => {
            let user = res.data;
            let userlat = this.state.request.lat;
            let userlng = this.state.request.lng;
            user.lat = userlat;
            user.lng = userlng;

            axios
              .patch(`https://arcana-api.herokuapp.com/users/${idUser}`, user)
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {});
        let request = this.state.request;
        request.user = idUser;
        console.log(request);
        axios
          .post("https://arcana-api.herokuapp.com/comments", request)
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
          <IonItem className="input-textarea">
            <IonLabel position="stacked">Scrivi il tuo commento</IonLabel>
            <IonTextarea
              placeholder="aggiungi maggiori informazioni qui..."
              onIonChange={event => this.typeComment(event)}
            ></IonTextarea>
          </IonItem>
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
