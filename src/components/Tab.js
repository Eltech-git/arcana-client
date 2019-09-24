import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText,  IonTabs, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import '../theme/header.css';

class Tab extends React.Component {



	render() {
		return (
					<IonTabBar slot="bottom">
						<IonTabButton tab="schedule">
							<IonIcon name="calendar" />
							<IonLabel>Schedule</IonLabel>
							<IonBadge>6</IonBadge>
						</IonTabButton>

						<IonTabButton tab="speakers">
							<IonIcon name="contacts" />
							<IonLabel>Speakers</IonLabel>
						</IonTabButton>

						<IonTabButton tab="map">
							<IonIcon name="map" />
							<IonLabel>Map</IonLabel>
						</IonTabButton>

						<IonTabButton tab="about">
							<IonIcon name="information-circle" />
							<IonLabel>About</IonLabel>
						</IonTabButton>
					</IonTabBar>
	  );
	}
};

export default Tab;
