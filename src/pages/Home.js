import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail';
import Tab from '../components/Tab';
import '../theme/page.css';

class Home extends React.Component {

	render() {
		return (
	    <IonPage>
				<Header />
	      <IonContent className="page">
	        <Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
	      </IonContent>
	    </IonPage>
	  );
	}
};

export default Home;
