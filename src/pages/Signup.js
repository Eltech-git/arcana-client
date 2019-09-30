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
    form: {
      name: " ",
      surname: " ",
      email: " ",
      password: " ",
      location: " ",
      birthDate: " ",
      phone: 0,
      companyIDnum: " ",
      avatar: " "
    }
  };

  submitHandler = event => {
    event.preventDefault();

    const agent = this.state.form;
    console.log(agent);
    axios
      .post(`http://localhost:4000/signup`, agent)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputChange = (event, field) => {
    let name = event.target.value;
    let form = this.state.form;
    form[field] = name;
    this.setState({
      form
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
                onIonChange={event => this.inputChange(event, "name")}
              ></IonInput>
              {console.log(this.state.form)}
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Cognome</IonLabel>
              <IonInput
                type="text"
                placeholder="Cognome"
                onIonChange={event => this.inputChange(event, "surname")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                placeholder="Email"
                onIonChange={event => this.inputChange(event, "email")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                placeholder="Password"
                onIonChange={event => this.inputChange(event, "password")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Indirizzo</IonLabel>
              <IonInput
                type="text"
                placeholder="Indirizzo"
                onIonChange={event => this.inputChange(event, "location")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Data di Nascita</IonLabel>
              <IonInput
                type="date"
                placeholder="Data di Nascita"
                onIonChange={event => this.inputChange(event, "birthDate")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">Cellulare</IonLabel>
              <IonInput
                type="number"
                placeholder="Numero di cellulare"
                onIonChange={event => this.inputChange(event, "phone")}
              ></IonInput>
            </IonItem>
            <IonItem className="form">
              <IonLabel position="floating">ID Compagnia</IonLabel>
              <IonInput
                type="number"
                placeholder="ID Compagnia"
                onIonChange={event => this.inputChange(event, "companyIDnum")}
              ></IonInput>
            </IonItem>
            <IonItem className="input">
              <IonLabel position="stacked">Foto profilo</IonLabel>
              <IonInput
                type="file"
                onIonChange={event => this.inputChange(event, "avatar")}
              ></IonInput>
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