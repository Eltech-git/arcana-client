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
import AgentA from "../components/AgentA";
import "../theme/page.css";
import axios from "axios";
class Agents extends React.Component {
  state = {
    url: "http://localhost:4000/users",
    users: []
  };
  ionViewDidEnter() {
    console.log("ionViewWillEnter event fired");
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

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          {this.state.users.map((a, i) => (
            <AgentA a={a} key={i} goToDetail={this.goToDetail} />
          ))}
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Agents);
