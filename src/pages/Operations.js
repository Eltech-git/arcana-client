import {
  IonContent,
  IonPage,
  IonIcon,
  IonFab,
  IonFabButton,
  withIonLifeCycle
} from "@ionic/react";
import "../theme/page.css";
import React from "react";
import Operation from "../components/Operation";
import { add, nuclear } from "ionicons/icons";
import axios from "axios";
import "../theme/page.css";

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
    url: `${process.env.REACT_APP_API}/users`
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
      .post(`${process.env.REACT_APP_API}/agent?token=${token}`)
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
