import {
  IonContent,
  IonHeader,
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
  withIonLifeCycle
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Agent from "../components/Agent";
import "../theme/page.css";
import axios from "axios";
class Agents extends React.Component {
  state = {
    url: "http://61a9362b.ngrok.io/users",
    users: []
  };

  componentWillMount() {
    axios
      .get(this.state.url)
      .then(res => {
        let users = this.state.users;
        users = res.data;
        this.setState({
          users: users
        });
        console.log(res.data);
      })
      .catch(err => {});
    console.log(this.state.users);
  }

  goToDetail = () => {
    this.props.history.push({
      pathname: "/operationdetail"
    });
  };

  addAgent = () => {
    console.log(this.props.agent);
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          {this.state.users.map((agent, i) => (
            <Agent agent={agent} key={i} goToDetail={this.goToDetail} />
          ))}
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Agents);
