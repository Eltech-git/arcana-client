import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Agent from '../components/Agent';
import '../theme/page.css';

class Agents extends React.Component {

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
					<Agent goToDetail={this.goToDetail}/>
				)
			}

			</IonContent>

	    </IonPage>
	  );
	}
};

export default Agents;
