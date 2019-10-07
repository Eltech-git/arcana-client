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
  IonItem,
	IonThumbnail,
	IonButton,
	IonDatetime,
	IonSelect,
	IonLabel,
	IonList,
	IonInput,
	IonSelectOption,
	IonCheckbox,
	IonRange,
	IonAvatar,
	IonToggle
} from "@ionic/react";
import React from "react";
import axios from "axios";
import moment from 'moment';
import "../theme/profile.css";

class Profile extends React.Component {

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
							let data = moment(res.data.birthDate).format('L')
							console.log(data)
							user.birthDate = data
				      this.setState({
				        user: user
				      });
				      console.log(res.data);
				    })
				    .catch(err => {});
        }).catch(err => {});

  }


  render() {
    return (
			<IonPage>
        <IonContent className="page">
					<IonHeader>
					<IonToolbar className="detail-header">
									<IonText className="text">Il tuo profilo
									</IonText>
							</IonToolbar>
						</IonHeader>
					<IonGrid className="grid-profile">
						<IonGrid className="grid-list">
							<IonItem className="profile-text">
								<IonLabel className="profile-label" position="stacked">Nome</IonLabel>
							<IonInput disabled>{this.state.user.name}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">Cognome</IonLabel>
							<IonInput disabled>{this.state.user.surname}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">Email</IonLabel>
							<IonInput disabled>{this.state.user.email}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">Indirizzo</IonLabel>
							<IonInput disabled>{this.state.user.location}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">Data di nascita</IonLabel>
							<IonInput disabled>{this.state.user.birthDate}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">Cellulare</IonLabel>
							<IonInput disabled>{this.state.user.phone}</IonInput>
							</IonItem>
							<IonItem className="profile-text">
								<IonLabel position="stacked">ID compagnia</IonLabel>
							<IonInput disabled>{this.state.user.companyIDnum}</IonInput>
							</IonItem>
						</IonGrid>
						<IonAvatar className="avatar-profile">
			        <img src={this.state.user.avatar}/>
			      </IonAvatar>
					</IonGrid>
				</IonContent>
			</IonPage>

    );
  }
}

export default Profile;
