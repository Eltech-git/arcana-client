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
  IonFab,
  IonFabButton,
  withIonLifeCycle
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";
import { add, nuclear } from "ionicons/icons";
import axios from "axios";
import "../theme/page.css";
require("dotenv").config();

class Operations extends React.Component {
  state = {
    user: {
      _id: "",
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
    url: "http://3ef3c07b.ngrok.io/users"
  };

  goToDetail = i => {
    this.props.history.push({
      pathname: "/app/operationdetail",
      assignedOP: this.state.user.assignedOP,
      index: i
    });
  };

  getUser = () => {
    let token = localStorage.getItem("token");
    axios
      .post(`http://3ef3c07b.ngrok.io/agent?token=${token}`)
      .then(res => {
        let idUser = res.data;
        console.log(res.data);
        axios
          .get(`${this.state.url}/${idUser}`)
          .then(res => {
            let user = this.state.user;
            user = res.data;
            this.setState({
              user: user
            });
            console.log(res.data);
          })
          .catch(err => {});
      })
      .catch(err => {});
  };

  componentWillMount() {
    // axios.get(`localhost:4000/operations?agent=${agentId}`, {
    // 	headers: {
    // 		Authorization: `Bearer ${token}`
    // 	}
    // }).then()
    this.getUser();
  }

  ionViewDidEnter() {
    console.log("I enter");
    this.getUser();
  }

  // componentWillReceiveProps(props) {
  // 	axios
  //     .get(`${this.state.url}/${this.state.user._id}`)
  //     .then(res => {
  //       let user = this.state.user;
  //       user = res.data;
  //       this.setState({
  //         user: user
  //       });
  //       console.log(res.data);
  //     })
  //     .catch(err => {});
  //
  // }

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
            <IonFabButton href="/app/add" color="light">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton href="/app/detailwork" color="light">
              <IonIcon icon={nuclear} />
            </IonFabButton>
          </IonFab>
        </IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="/app/add" color="light">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Operations);
