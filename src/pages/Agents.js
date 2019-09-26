import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Agent from '../components/Agent';
import '../theme/page.css';

class Agents extends React.Component {

	render() {
		return (
	    <IonPage>
			<IonContent className="page">
			{
				[...Array(10).keys()].map(n =>
					<Agent />
				)
			}
			</IonContent>

	    </IonPage>
	  );
	}
};

export default Agents;
