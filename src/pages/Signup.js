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

class Signup extends React.Component {
  state = {
    login: {
      image: "../images/arcana_white.png",
      name: "ARCANA"
    },
    signup: {
      name: "Paolo",
      surname: "Rossi",
      email: "paolorossi@gmail.com",
      password: "123",
      location: "Rimini",
      birthDate: "09/04/2003",
      phone: "33366558347",
      companyIDnum: "32"
    },
    nome: "ciccio"
  };

  submitHandler = event => {
    event.preventDefault();

    const agent = this.state.signup;
    console.log(agent);
    axios
      .post(`http://localhost:4000/agents`, { agent })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <IonPage>
        <IonContent className="signup">
          <IonGrid>
            <IonRow>
              <IonImg className="image" src={this.state.login.image} />
            </IonRow>
            <IonRow>
              <IonText className="text">{this.state.login.name}</IonText>
            </IonRow>
            <IonItem className="form">
              <IonLabel position="floating">Nome</IonLabel>
              <IonInput
                type="text"
                placeholder="Nome"
                ionInput={this.inputChange}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Cognome</IonLabel>
              <IonInput type="text" placeholder="Cognome"></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" placeholder="Email"></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" placeholder="Password"></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Indirizzo</IonLabel>
              <IonInput type="text" placeholder="Indirizzo"></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Data di Nascita</IonLabel>
              <IonInput type="date" placeholder="Data di Nascita"></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Cellulare</IonLabel>
              <IonInput
                type="number"
                placeholder="Numero di cellulare"
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">ID Compagnia</IonLabel>
              <IonInput type="number" placeholder="ID Compagnia"></IonInput>
            </IonItem>
            <IonItem className="input">
              <IonLabel position="stacked">Foto profilo</IonLabel>
              <IonInput type="file"></IonInput>
            </IonItem>
            <IonButton
              className="button"
              shape="round"
              type="submit"
              onClick={this.submitHandler}
            >
              Registrati
            </IonButton>
            <IonItem className="link" href="/login">
              <IonText className="link">Già registrato? Login</IonText>
            </IonItem>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default Signup;
