import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Operation from '../components/Operation';
import '../theme/page.css';

class Operations extends React.Component {

	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
				{
					[...Array(10).keys()].map(n =>
						<Operation />
					)
				}

	      </IonContent>

	    </IonPage>
	  );
	}
};

export default Operations;
