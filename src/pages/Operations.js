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
  IonFabButton,
  IonFab,
  withIonLifeCycle
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";
import Camera from "../components/Camera";
import axios from "axios";
import "../theme/page.css";
import { add, nuclear } from "ionicons/icons";
require("dotenv").config();

class Operations extends React.Component {
  state = {
    user: {
      avatar: "",
      email: "",
      location: "",
      name: "",
      surname: "",
      birthDate: "",
      phone: "",
      assignedOP: [
        {
          comments: [],
          title: "",
          target: {
            pictures: [],
            name: ""
          }
        }
      ],
      companyIDnum: 0,
      agentAssigned: []
    },
    url: `http://687c40a9.ngrok.io/users/5d9434bb03dd9307d82d4329`
  };

  goToDetail = i => {
    this.props.history.push({
      pathname: "/operationdetail",
      assignedOP: this.state.user.assignedOP,
      index: i
    });
  };

  ionViewWillEnter() {
    console.log("ionViewWillEnter event fired");
    axios
      .get(this.state.url)
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

  componentWillReceiveProps(props) {
    axios
      .get(this.state.url)
      .then(res => {
        let user = this.state.user;
        user = res.data;
        this.setState({
          user: user
        });
        console.log(res.data);
      })
      .catch(err => {});
  }

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          {this.state.user.assignedOP.map((operation, i) => (
            <Operation
              operation={operation}
              key={i}
              goToDetail={() => this.goToDetail(i)}
              history={this.props.history}
            />
          ))}
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton href="/add" color="light">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton href="/detailwork" color="light">
              <IonIcon icon={nuclear} />
            </IonFabButton>
          </IonFab>
        </IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="/add" color="light">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Operations);
