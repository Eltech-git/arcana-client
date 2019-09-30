import { IonContent, IonCard, IonCardHeader, IonRow, IonCol, IonText,IonCardSubtitle, IonCardTitle, IonIcon, IonLabel, IonButton, IonCardContent, IonItem, IonAvatar, IonGrid, IonTitle, IonImg} from '@ionic/react';
import {play} from 'ionicons/icons';
import React from 'react';
import '../theme/comment.css';

class LargeComment extends React.Component {

	state= {
		comment: {
			image: '../images/lover.jpg'
		}
	}

	render() {
		return (
			<IonCard className="largecomment">
			<IonCardHeader className="head">
			<IonGrid className="grid-largecomment">
				<IonCol>
					<IonCardSubtitle className="subtitle">Commento </IonCardSubtitle>
				<IonCardTitle className="title">Trovato l'amante</IonCardTitle>
				</IonCol>
				<img className="img" src={this.state.comment.image}/>
			</IonGrid>
			</IonCardHeader>
		<IonCardContent className="content">
		<IonGrid className="grid-content">
		<IonGrid className="text-content">
		<IonText color="light">27/08/2019</IonText>
		<IonText color="light">L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove ha incontrato la signora Rossi.
		</IonText>
		</IonGrid>
		<IonIcon className="icon" icon={play} />
		</IonGrid>
		</IonCardContent>
		</IonCard>
	  );
	}
};

export default LargeComment;
