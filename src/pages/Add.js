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
  IonButton
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import "../theme/add.css";
import "../theme/header.css";
import axios from "axios";

class Add extends React.Component {
  state = {
    opertion: {
      title: "",
      description: "",
      agentAssigned: "",
      firstOCP: "",
      daysAssigned: "",
      target: ""
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
  };

  inputChange = (event, field) => {
    let name = event.target.value;
    let form = this.state.operation;
    form[field] = name;
    this.setState({
      form
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
          <IonItem className="input">
            <IonLabel position="stacked">Nome Operazione</IonLabel>
            <IonInput
              type="number"
              placeholder="Nome"
              onIonChange={event => this.inputChange(event, "title")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Giornate</IonLabel>
            <IonInput
              type="number"
              placeholder="Numero"
              onIonChange={event => this.inputChange(event, "daysAssigned")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Indirizzo primo OCP</IonLabel>
            <IonInput
              type="number"
              placeholder="Via"
              onIonChange={event => this.inputChange(event, "firstOCP")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Agente/i</IonLabel>
            <IonInput
              placeholder="username"
              onIonChange={event => this.inputChange(event, "agentAssigned")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Target</IonLabel>
            <IonInput
              placeholder="nome"
              onIonChange={event => this.inputChange(event, "target")}
            ></IonInput>
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Immagini</IonLabel>
            <IonInput type="file"></IonInput>
          </IonItem>

          <IonItem className="input">
            <IonLabel position="stacked">Indicazioni Operative</IonLabel>
            <IonTextarea
              placeholder="Aggiungi maggiori informazioni qui..."
              onIonChange={event => this.inputChange(event, "description")}
            ></IonTextarea>
          </IonItem>
          <IonButton
            className="button"
            shape="round"
            onClick={this.submitHandler}
          >
            Crea
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Add;
