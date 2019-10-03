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
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";
import Camera from "../components/Camera";
import axios from "axios";
import { Link } from "react-router-dom";
import { arrowRoundBack, add } from "ionicons/icons";

import "../theme/detail.css";

class OperationDetail extends React.Component {
  state = {
    header: {
      src: "../images/woman.jpg",
      case: " Tradimento Bianchi e Rossi",
      cases: 4,
      image: "../images/lover.jpg"
    },
    comments: false,
    comment: {
      image: "../images/lover.jpg",
      largeContent: `L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi.`,
      smallContent: ""
    },
    operation: {
      comments: [
        {
          pictures: ""
        }
      ],
      target: {}
    }
  };

  ionViewWillEnter() {
    console.log("ionViewWillEnter event fired");
    axios
      .get(this.state.url)
      .then(res => {
        let user = this.state.user;
        user = res.data;
        this.setState({
          user: user
        });
        console.log(res.data);
      })
      .catch(err => {});
    console.log(this.state.user);
  }

  sendToFaccia = image => {
    axios.post("faccia/sdsdfdsf");
  };

  // {this.state.operation.comments.map((comment, i) => (
  // 	<LargeComment comment={comment} />
  // ))}

  // {this.state.operation.title}
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
                  <IonImg />
                </IonAvatar>
                <IonText className="text"></IonText>
              </IonGrid>
            </IonToolbar>
          </IonHeader>
          <Camera />
        </IonContent>
      </IonPage>
    );
  }
}

export default OperationDetail;
