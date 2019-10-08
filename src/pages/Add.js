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
  IonText,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonAvatar,
  IonImg
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Agent from "../components/Agent";
import "../theme/add.css";
import "../theme/header.css";
import axios from "axios";
import dotenv from "dotenv";

class Add extends React.Component {
  state = {
    operation: {
      title: "",
      description: "",
      firstOCP: "",
      agentAssigned: "",
      daysAssigned: 0,
      email: "",
      target: ""
    },
    target: {
      name: "",
      vehiclePlate: "",
      pictures: [],
      descriptionOfSubject: ""
    },
    email: "",
    users: []
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.state.email;

    const target = this.state.target;

    let data = new FormData();

    data.append("name", this.state.target.name);
    data.append("vehiclePlate", this.state.target.vehiclePlate);
    data.append("pictures", this.state.target.pictures[0]);
    data.append("descriptionOfSubject", this.state.target.descriptionOfSubject);
    data.append("title", this.state.operation.title);
    data.append("daysAssigned", this.state.operation.daysAssigned);
    data.append("firstOCP", this.state.operation.firstOCP);
    data.append("description", this.state.operation.description);
    data.append("agentAssigned", this.state.operation.agentAssigned);

    axios
      .post(`http://74fe330c.ngrok.io/createoperation`, data)
      .then(res => {
        console.log(res);
        this.props.history.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    axios
      .get(`http://74fe330c.ngrok.io/users`)
      .then(res => {
        let users = this.state.users;
        users = res.data;
        this.setState({
          users: users
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  inputChangeOP = (event, field) => {
    let name = event.target.value;
    console.log(name);
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

  getAgent = event => {
    let id = event.target.value;
    let operation = this.state.operation;
    operation.agentAssigned = id;
    this.setState({
      operation
    });
  };

  getFile = event => {
    console.log("e", event);
    console.log("t", event.target.files[0]);
    let photo = event.target.files[0];
    let target = this.state.target;
    target.pictures.push(photo);
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
            <IonLabel position="stacked">Immagine</IonLabel>
            <input type="file" onChange={event => this.getFile(event)} />
          </IonItem>
          <IonItem className="input">
            <IonLabel position="stacked">Targa</IonLabel>
            <IonInput
              placeholder="numero"
              onIonChange={event => this.inputChangeTA(event, "vehiclePlate")}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Seleziona agente</IonLabel>
            <IonSelect
              value={this.state.operation.agentAssigned}
              interface="action-sheet"
              placeholder="Seleziona uno"
              onIonChange={event => this.getAgent(event)}
            >
              {this.state.users.map((n, i) => (
                <IonSelectOption key={i} value={n._id}>
                  {`${n.name}    Operazioni: ${n.assignedOP.length}`}
                </IonSelectOption>
              ))}
            </IonSelect>
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
