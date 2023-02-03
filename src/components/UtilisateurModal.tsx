import { IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { bulb, exitOutline, micOutline, personOutline } from "ionicons/icons";


import styles from "./TalkModal.module.css";

 const UtilisateurModal : React.FC<{idavion:any,dismiss:any}> = (idavion:any,dismiss:any) => {
    function  show()
    {
       
        return dismiss;
    }


	return (
        
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Details sur l'avion </IonTitle>

                    <IonButtons slot="end">
                        <IonButton color="primary" onClick={ show() }>
                        <IonIcon icon={ exitOutline } />
                        
                        </IonButton>
                    </IonButtons>
                    </IonToolbar>
                </IonHeader>
        </IonPage>
    
	);
}
export default UtilisateurModal;