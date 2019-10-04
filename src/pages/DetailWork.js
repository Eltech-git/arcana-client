import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonImg, IonText,  IonAvatar, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle,IonFabButton,IonFab, IonItem, IonSelectOption, IonSelect } from '@ionic/react';
import React from 'react';
import {arrowRoundBack, add} from 'ionicons/icons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Operation from '../components/Operation';
import LargeComment from '../components/LargeComment';

import '../theme/detail.css';

class DetailWork extends React.Component {

	state = {
		operation: {
          comments: [],
					dayDone: 0,
          title: '',
					description: '',
					firstOCP: '',
					daysAssigned: 0,
					target: {
						pictures: [],
						name: ''
				}
		},
		url: 'http://localhost:4000/operations/5d9454b103dd9307d82d4331'
	}

	componentDidMount() {
		axios
      .get(this.state.url)
      .then(res => {
        let operation = this.state.operation;
        operation = res.data;
        this.setState({
          operation: operation
        });
        console.log(res.data);
      })
      .catch(err => {});
	}


	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
			<IonItem>
        <IonLabel>Action Sheet</IonLabel>
        <IonSelect
          interface="action-sheet"
          placeholder="Select One"
        >
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="purple">Purple</IonSelectOption>
          <IonSelectOption value="yellow">Yellow</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
        </IonSelect>
      </IonItem>

				</IonContent>
	    </IonPage>
	  );
	}
};

export default DetailWork;
