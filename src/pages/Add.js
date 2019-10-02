import {
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonInput,
  IonItem,
  IonPage,
  IonLabel,
  IonTextarea,
  IonButton,
  IonText
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Agent from "../components/Agent";
import "../theme/add.css";
import "../theme/header.css";
import axios from "axios";

class Add extends React.Component {
  state = {
    operation: {
      title: "",
      description: "",
      firstOCP: "",
      // agentAssigned:"",
      daysAssigned: 0
      // target: ""
    },
    target: {
      name: "",
      vehiclePlate: "",
      pictures: []
    }
  };
  submitHandler = event => {
    event.preventDefault();

    const operation = this.state.operation;
    console.log(operation);
    axios
      .post(`http://localhost:4000/operations`, operation)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    const target = this.state.target;
    axios
      .post(`http://localhost:4000/targets`, target)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputChangeOP = (event, field) => {
    let name = event.target.value;
    let operation = this.state.operation;
    operation[field] = name;
    this.setState({
      operation
    });
  };
  inputChangeTA = (event, field) => {
    let name = event.target.value;
    let target = this.state.target;
    target[field] = name;
    this.setState({
      target
    });
  };
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="header">
            <IonTitle>Nuova Operazione</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="input">
          <IonItem className="title">
            <IonText>Operazione</IonText>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Nome Operazione</IonLabel>
            <IonInput
              type="text"
              placeholder="nome"
              onIonChange={event => this.inputChangeOP(event, "title")}
            ></IonInput>
            {console.log(this.state.operations)}
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Giornate</IonLabel>
            <IonInput
              type="number"
              placeholder="numero"
              onIonChange={event => this.inputChangeOP(event, "daysAssigned")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Indirizzo primo OCP</IonLabel>
            <IonInput
              type="text"
              placeholder="via"
              onIonChange={event => this.inputChangeOP(event, "firstOCP")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Indicazioni Operative</IonLabel>
            <IonTextarea
              placeholder="aggiungi maggiori informazioni qui..."
              onIonChange={event => this.inputChangeOP(event, "description")}
            ></IonTextarea>
          </IonItem>
          <IonItem className="title">
            <IonText>Target</IonText>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Target</IonLabel>
            <IonInput
              placeholder="nome"
              onIonChange={event => this.inputChangeTA(event, "name")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Immagini</IonLabel>
            <IonInput
              type="file"
              onIonChange={event => this.inputChangeTA(event, "pictures")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Targa</IonLabel>
            <IonInput
              placeholder="numero"
              onIonChange={event => this.inputChangeTA(event, "vehiclePlate")}
            ></IonInput>
          </IonItem>
          <IonItem className="title">
            <IonText>Seleziona agenti</IonText>
          </IonItem>

          <IonButton
            className="button"
            shape="round"
            onClick={this.submitHandler}
          >
            Crea operazione
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Add;
