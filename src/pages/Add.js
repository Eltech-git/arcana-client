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

class Add extends React.Component {
  state = {
    operation: {
      title: "",
      description: "",
      firstOCP: "",
      agentAssigned:"",
      daysAssigned: 0,
			email: '',
      target: ''
    },
    target: {
      name: "",
      vehiclePlate: "",
      pictures: []
    },
		email: '',
		users: []
  };

  submitHandler = event => {
    event.preventDefault();
		const email = this.state.email

		const target = this.state.target;
		axios
			.post(`http://localhost:4000/targets`, target)
			.then(data => {
				const ope = this.state.operation;
				ope.target = data._id
				axios
					.post(`http://localhost:4000/createoperation`, ope)
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				console.log(err);
			});


			this.props.history.goBack()


  };

	componentWillMount() {
		axios
      .get(`http://localhost:4000/users`)
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
		console.log(name)
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

	getAgent = (event) => {
		let id = event.target.value
		let operation = this.state.operation
		operation.agentAssigned = id
		this.setState({
			operation
		})
	}



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
					<IonItem>
		        <IonLabel>Seleziona agente</IonLabel>
					<IonSelect value={this.state.operation.agentAssigned} interface="action-sheet" placeholder="Seleziona uno" onIonChange={event => this.getAgent(event)} >
							{this.state.users.map((n, i) =>
								<IonSelectOption key={i} value={n._id}>
									{`${n.name}    Operazioni: ${n.assignedOP.length}`}
								</IonSelectOption>
							)}
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
