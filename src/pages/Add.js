import { IonHeader, IonTitle, IonContent, IonToolbar, IonInput, IonItem, IonPage, IonLabel, IonTextarea, IonButton, IonText} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Agent from '../components/Agent';
import '../theme/add.css';
import '../theme/header.css';

class Add extends React.Component {
  state = {
    opertion: {
      title: "",
      description: "",
      agentAssigned: "",
      firstOCP: "",
      daysAssigned: "",
      target: ""
    }
  };
  submitHandler = event => {
    event.preventDefault();

    const operation = this.state.operation;
    console.log(operation);
    axios
      .post(`http://localhost:4000/operations`, operation)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

	    <IonPage>
			<IonHeader>
			<IonToolbar className='header'>
			<IonTitle>Nuova Operazione</IonTitle>
			</IonToolbar>
			</IonHeader>
				<IonContent className="input">
					<IonItem className="title">
					<IonText>Operazione</IonText>
					</IonItem>
					<IonItem className="input">
						<IonLabel position="stacked">Nome Operazione</IonLabel>
						<IonInput type="number" placeholder="nome"></IonInput>
			    </IonItem>
					<IonItem className="input">
			      <IonLabel position="stacked">Giornate</IonLabel>
			      <IonInput type="number" placeholder="numero"></IonInput>
			    </IonItem>
					<IonItem className="input">
						<IonLabel position="stacked">Indirizzo primo OCP</IonLabel>
					<IonInput type="number" placeholder="via"></IonInput>
					</IonItem>
					<IonItem className="input">
						<IonLabel position="stacked">Indicazioni Operative</IonLabel>
					<IonTextarea  placeholder="aggiungi maggiori informazioni qui..."></IonTextarea>
					</IonItem>
					<IonItem className="title">
					<IonText>Target</IonText>
					</IonItem>
						<IonItem className="input">
							<IonLabel  position="stacked">Target</IonLabel>
						<IonInput placeholder="nome"></IonInput>
						</IonItem>
						<IonItem className="input">
						<IonLabel position="stacked">Immagini</IonLabel>
						<IonInput type="file"></IonInput>
						</IonItem>
						<IonItem className="input">
						<IonLabel  position="stacked">Targa</IonLabel>
						<IonInput placeholder="numero"></IonInput>
						</IonItem>
						<IonItem className="title">
						<IonText>Seleziona agenti</IonText>
						</IonItem>
						<Agent />
						<Agent />
						<Agent />
						<Agent />

						<IonButton className="button" shape="round">Crea operazione</IonButton>
				</IonContent>
	    </IonPage>
	  );
	}
};

export default Add;
