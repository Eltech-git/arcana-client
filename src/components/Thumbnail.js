import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonLabel, IonIcon, IonCardHeader, IonImg, IonAvatar, IonChip } from '@ionic/react';
import React from 'react';
import '../theme/card.css'

class Thumbnail extends React.Component {

	state= {
		header: {
			src: '../images/woman.jpg',
			agent: 'Sempronio',
			cases: 4
		}
	}

	render() {
		return (
			<IonCard className="card">

			<IonGrid className="grid">
			<IonAvatar className="avatar">
				<img className="img" src={this.state.header.src}/>
			</IonAvatar>
			<IonText className="text"> Tradimento Bianchi e Rossi</IonText>
			<IonText className="text">23/09</IonText>
			</IonGrid>

		<IonCardContent>
			La troia sta succhiando cazzi
		</IonCardContent>

	</IonCard>


	  );
	}
};

export default Thumbnail;
