import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonText,
  IonLabel,
  IonButton,
  IonInput,
  IonItem,
  IonImg
} from "@ionic/react";
import React from "react";
import "../theme/login.css";
import axios from "axios";

class Login extends React.Component {
  state = {
    login: {
      image: "../images/arcana_white.png",
      name: "ARCANA"
    },
    form: {
      email: "",
      password: ""
    }
  };
  submitHandler = e => {
    e.preventDefault();
    let user = this.state.form;
    axios
      .post(`${process.env.REACT_APP_API}/login`, user)
      .then(res => {
        console.log(res.data);
        if (res.data.error) {
          res.data.error === `Error, email doesn't exist! Please sign up`
            ? this.setState({ errorEmail: res.data.error })
            : this.setState({ errorPassword: res.data.error });
        } else {
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          window.location = "/app";
        }
      })
      .catch(err => {});
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
        <IonContent className="login">
          <IonGrid>
            <IonRow className="image">
              <IonImg src={this.state.login.image} />
            </IonRow>
            <IonRow className="text">
              <IonText>{this.state.login.name}</IonText>
            </IonRow>
          </IonGrid>
          <IonItem className="form">
            <IonLabel position="fixed">Email</IonLabel>
            <IonInput
              type="email"
              placeholder="email"
              onIonChange={event => this.inputChange(event, "email")}
            ></IonInput>
          </IonItem>
          <IonItem className="form">
            <IonLabel position="fixed">Password</IonLabel>
            <IonInput
              type="password"
              placeholder="password"
              onIonChange={event => this.inputChange(event, "password")}
            ></IonInput>
            {console.log(this.state)}
          </IonItem>
          <IonButton
            className="button"
            shape="round"
            onClick={this.submitHandler}
          >
            Login
          </IonButton>
          <IonItem className="link" href="/signup">
            <IonText className="link">Registra nuovo agente</IonText>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
}

export default Login;
