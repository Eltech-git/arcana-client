import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonImg, IonText,  IonAvatar, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Operation from '../components/Operation';
import LargeComment from '../components/LargeComment';

import '../theme/detail.css';

class OperationDetail extends React.Component {

	state = {
		header: {
			src: '../images/woman.jpg',
			case: ' Tradimento Bianchi e Rossi',
			cases: 4
		},
		comments: false,
	}

	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
				<IonHeader>
					<IonToolbar className="detail-header">
						<IonGrid className="grid-detail">
							<IonAvatar className="text">
							<IonImg className="image" src={this.state.header.src}/>
							</IonAvatar>
							<IonText className="text">{this.state.header.case}
							</IonText>
						</IonGrid>
					</IonToolbar>
				</IonHeader>
				<LargeComment />
				</IonContent>
	    </IonPage>
	  );
	}
};

export default OperationDetail;
