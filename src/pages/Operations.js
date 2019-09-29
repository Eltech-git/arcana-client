import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Operation from '../components/Operation';
import LargeComment from '../components/LargeComment';

import '../theme/page.css';

class Operations extends React.Component {

	goToDetail = () => {
		this.props.history.push({
			pathname: '/operationdetail'
		})
	}

	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
				{
					[...Array(10).keys()].map(n =>
						<Operation goToDetail={this.goToDetail}/>
					)
				}
	      </IonContent>

	    </IonPage>
	  );
	}
};

export default Operations;
