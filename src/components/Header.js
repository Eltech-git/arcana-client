import { IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import React from 'react';
import '../theme/header.css';

class Header extends React.Component {

	state= {
		header: {
			src: '../images/logo_white.png',
			agent: 'Sempronio',
			cases: 4
		}
	}

	render() {
		return (
	      <IonHeader >
	        <IonToolbar className='header'>
					<IonGrid>
					<IonRow>
					<IonCol className="ion-text-center">
						<img height="50px" src={this.state.header.src}/>
					</IonCol>
					<IonCol>
					<IonText>
						<h1>{this.state.header.agent}</h1>
					</IonText>
					</IonCol>
					<IonCol className="ion-text-center">
					<IonText>
						<h1>{this.state.header.cases}</h1>
					</IonText>
					</IonCol>
					</IonRow>
						</IonGrid>
	        </IonToolbar>
	      </IonHeader>
	  );
	}
};

export default Header;
