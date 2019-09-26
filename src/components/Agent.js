import {IonGrid, IonRow, IonCol, IonText, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonLabel, IonIcon, IonCardHeader, IonImg, IonAvatar, IonChip } from '@ionic/react';
import React from 'react';
import '../theme/card.css'

class Operation extends React.Component {

	state= {
		agent: {
			src: '../images/agent.jpg',
			name: 'Sempronio',
			cases: 4
		}
	}

	render() {
		return (
			<IonCard className="card">

			<IonGrid className="grid">
			<IonAvatar className="avatar">
				<img className="img" src={this.state.agent.src}/>
			</IonAvatar>
			<IonText className="text">{this.state.agent.name}</IonText>
			<IonText className="text">{this.state.agent.cases}</IonText>
			</IonGrid>

	</IonCard>


	  );
	}
};

export default Operation;
