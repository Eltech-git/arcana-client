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
  IonImg
} from "@ionic/react";
import { Route } from "react-router-dom";
import React from "react";
import Agents from "./Agents";
import "../theme/signup.css";
import axios from "axios";

class Signform extends React.Component {
  state = {
    nome: "ciccio"
  };

  changeState = () => {
    return new Promise(function(resolve, reject) {
      this.setState({ nome: "puzza" });
      resolve();
    });
  };

  render() {
    return (
      <IonPage>
        <form>
          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput></IonInput>
            <IonButton onClick={console.log(this.state)}>Cambia </IonButton>
          </IonItem>
        </form>
      </IonPage>
    );
  }
}

export default Signform;
