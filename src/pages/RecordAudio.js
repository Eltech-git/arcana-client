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

import "../theme/detail.css";

class RecordAudio extends React.Component {
  state = {};

  ionViewWillEnter() {
    console.log("RecordAudio");
  }

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonGrid className="grid-detail"></IonGrid>
            </IonToolbar>
          </IonHeader>
          <button>Record Audio</button>
        </IonContent>
      </IonPage>
    );
  }
}

export default RecordAudio;
