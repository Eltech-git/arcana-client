import { IonContent, IonCard, IonCardHeader, IonRow, IonCol, IonText,IonCardSubtitle, IonCardTitle, IonIcon, IonLabel, IonButton, IonCardContent, IonItem, IonAvatar, IonGrid, IonTitle, IonImg} from '@ionic/react';
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
					<IonCardSubtitle>Commento </IonCardSubtitle>
					<IonCardTitle>Trovato l'amante</IonCardTitle>
				</IonCol>
				<IonAvatar className="avatar">
					<IonImg className="img" src={this.state.comment.image}/>
				</IonAvatar>
			</IonGrid>
			</IonCardHeader>

		<IonCardContent>
			<IonTitle> 27/08/2019 </IonTitle>
			Keep close to Nature's heart... and break clear away, once in awhile,
			and climb a mountain or spend a week in the woods. Wash your spirit clean.
		</IonCardContent>
	</IonCard>
	  );
	}
};

export default LargeComment;
