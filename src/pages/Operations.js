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
import {add, nuclear} from 'ionicons/icons';
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
					title: '',
          target: {
            pictures: [],
						name: ''
          }
        }
      ],
      companyIDnum: 0,
      agentAssigned: []
    },
    url: "http://localhost:4000/users"
  };

  goToDetail = (i) => {

    this.props.history.push({
      pathname: "/operationdetail",
			assignedOP: this.state.user.assignedOP,
			index: i
    });
  };

  componentWillReceiveProps(props) {
    console.log("ionViewWillEnter event fired");
		let token = localStorage.getItem('token')
		let key = 'token'
		console.log(token)
		console.log(key)

    axios
      .post(`http://localhost:4000/agent?${key}=${token}`)
      .then(res => {
				let idUser = res.data
				console.log(res.data)
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
        }).catch(err => {});


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
					<Operation operation={operation} key={i} goToDetail={() => this.goToDetail(i)} history={this.props.history} />
				))}
				<IonFab vertical="bottom" horizontal="end" slot="fixed" >
					<IonFabButton href="/add"color="light">
						<IonIcon icon={add} />
				</IonFabButton>
				</IonFab>
				<IonFab vertical="bottom" horizontal="start" slot="fixed">
					<IonFabButton href="/detailwork"color="light">
						<IonIcon icon={nuclear} />
				</IonFabButton>
				</IonFab>
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Operations);
