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
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";
import axios from "axios";
import "../theme/page.css";

class Operations extends React.Component {
  state = {
    user: {}
  };

  goToDetail = () => {
    this.props.history.push({
      pathname: "/operationdetail"
    });
  };

  ionViewDidEnter() {
    console.log("ionViewWillEnter event fired");
    axios
      .get("http:localhost:4000/users/5d91e1a47492b06ee913f321")
      .then(res => {
        let user = this.state.user;
        user = res.data;
        this.setState({
          user: user
        });
        console.log(res.data);
      })
      .catch(err => {});
    console.log(this.state.user);
  }

  render() {
    return (
      <IonPage>
        <IonContent className="page"></IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Operations);
