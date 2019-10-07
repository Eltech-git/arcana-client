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
  IonSelectOption,
  IonSelect
} from "@ionic/react";
import React from "react";
import { arrowRoundBack, add } from "ionicons/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Camera from "../components/Camera";
import Header from "../components/Header";
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";

import "../theme/detail.css";

class DetailWork extends React.Component {
  state = {
    operationID: "5d943cb303dd9307d82d432e",
    operation: {
      comments: [],
      dayDone: 0,
      title: "",
      description: "",
      firstOCP: "",
      daysAssigned: 0,
      target: {
        pictures: [],
        name: "",
        _id: ""
      }
    },
    url: "http://61a9362b.ngrok.io/operations/5d943cb303dd9307d82d432e"
  };

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(res => {
        let operation = this.state.operation;
        operation = res.data;

        this.setState({
          operation: operation
        });
        console.log(res.data);
      })
      .catch(err => {});
  }

  sendPhoto = image => {
    // axios.post("faccia/sdsdfdsf");
    // window.location = "record";
    this.props.history.push({
      pathname: "/selectimage",
      image: image,
      _id: this.state.operation.target._id,
      operationID: this.state.operationID
    });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonGrid className="grid-detail">
                <Link to="/operations">
                  <IonIcon className="back" icon={arrowRoundBack} />
                </Link>
                <IonAvatar className="text">
                  <IonImg src={this.state.operation.target.pictures[0]} />
                </IonAvatar>
                <IonText className="text">{this.state.operation.title}</IonText>
              </IonGrid>
            </IonToolbar>
          </IonHeader>
          {this.state.operation.comments.map((comment, i) => (
            <LargeComment comment={comment} />
          ))}

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="light">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <Camera sendPhoto={this.sendPhoto} />
        </IonContent>
      </IonPage>
    );
  }
}

export default DetailWork;
