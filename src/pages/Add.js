import { IonHeader, IonTitle, IonContent, IonToolbar, IonInput, IonItem, IonPage, IonLabel, IonTextarea, IonButton} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import '../theme/add.css';
import '../theme/header.css';

class Add extends React.Component {

	render() {
		return (

	    <IonPage>
			<IonHeader>
			<IonToolbar className='header'>
			<IonTitle>Nuova Operazione</IonTitle>
			</IonToolbar>
			</IonHeader>
				<IonContent className="input">
					<IonItem className="input">
			      <IonLabel className="label" position="stacked">Nome Operazione</IonLabel>
					<IonInput type="number" placeholder="Nome"></IonInput>
			    </IonItem>
					<IonItem className="input">
			      <IonLabel className="label" position="stacked">Giornate</IonLabel>
			      <IonInput type="number" placeholder="Numero"></IonInput>
			    </IonItem>
					<IonItem className="input">
			      <IonLabel className="label" position="stacked">Indirizzo primo OCP</IonLabel>
					<IonInput type="number" placeholder="Via"></IonInput>
			    </IonItem>
						<IonItem className="input">
				      <IonLabel className="label"  position="stacked">Agente/i</IonLabel>
				      <IonInput placeholder="username"></IonInput>
				    </IonItem>
						<IonItem className="input">
				      <IonLabel className="label"  position="stacked">Target</IonLabel>
						<IonInput placeholder="nome"></IonInput>
				    </IonItem>
						<IonItem className="input">
			      <IonLabel className="label" position="stacked">Immagini</IonLabel>
					<IonInput type="file"></IonInput>
		    		</IonItem>

				<IonItem className="input">
					<IonLabel position="stacked" className="label">Indicazioni Operative</IonLabel>
				<IonTextarea  placeholder="Aggiungi maggiori informazioni qui..."></IonTextarea>
				</IonItem>
				<IonButton className="button" shape="round">Crea</IonButton>
				</IonContent>
	    </IonPage>
	  );
	}
};

export default Add;
