import { IonContent, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel, IonButton, IonInput, IonItem, IonImg} from '@ionic/react';
import { Route } from 'react-router-dom';
import React from 'react';
import Agents from './Agents';
import '../theme/login.css';

class Login extends React.Component {

	state= {
		login: {
			image: '../images/arcana_white.png',
			name: 'ARCANA'
		}
	}

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
						<IonInput type="email" placeholder="email"></IonInput>
					</IonItem>
					<IonItem className="form">
						<IonLabel position="fixed">Password</IonLabel>
						<IonInput type="password" placeholder="password"></IonInput>
					</IonItem>
					<IonButton className="button" shape="round">Login</IonButton>
					<IonItem className="link" href="/signup">
						<IonText className="link">Registra nuovo agente</IonText>
					</IonItem>

				</IonContent>
	    </IonPage>
	  );
	}
};

export default Login;
