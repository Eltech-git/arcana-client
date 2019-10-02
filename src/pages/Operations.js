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
import Camera from "../components/Camera";
import axios from "axios";
import "../theme/page.css";

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
          target: {
            pictures: []
          }
        }
      ],
      companyIDnum: 0,
      agentAssigned: []
    },
    url: `http://253e7407.ngrok.io/users/5d9434bb03dd9307d82d4329`
  };

  goToDetail = () => {
    this.props.history.push({
      pathname: "/operationdetail"
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

  sendToTarghe = image => {
    axios.post("targe.com/sdfsd");
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <Camera sendPhoto={this.sendToTarghe} />
          {this.state.user.assignedOP.map((o, i) => (
            <Operation o={o} key={i} goToDetail={this.goToDetail} />
          ))}
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Operations);
