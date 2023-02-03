import { IonGrid,IonRow,IonCol,IonTitle,IonApp, IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar, IonProgressBar, useIonLoading } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';

//import styles from './Liste.module.scss';
import React,{useEffect,useState} from "react";
import { logOut } from 'ionicons/icons';
import Menu from './Menu';
import MenuAcc from './MenuAcc';
import AffichageCandidat from './AffichageEncheres';

import { useRef } from 'react';
const Acceuil= () => {
	const pageRef = useRef();
  const [persone,setPersone]=useState([]);
  const [loader,setLoader]=useIonLoading();
  loader({
    message:"chargement",
    spinner:'crescent',
    mode:'ios',
    color:'danger'
    
  })
    
    useState(()=>{fetch('https://repositoryenchere-production.up.railway.app/encheres/historiqueEnchere/'+sessionStorage.getItem("idutilisateur"),{
      method:'GET',headers:{'Content-Type':'application/json'}

  })
  .then(response=> { return response.json();}).then((text)=>  {setPersone(text);setLoader(false);
  });

 
  },[])

  

    return (
      <IonPage ref={ pageRef }>
		<IonHeader>
        <IonToolbar>
          <IonTitle>Liste de vos  encheres </IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ logOut } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      {persone instanceof Array 
  ? persone.map((prs, key) => {
    return (
      <div key={key} style={{ height: "100%" }}>
          <AffichageCandidat personne={prs} key={key + "essai"} />
        </div>
    );
  })
  : <p>No data available</p>
}

     
        
      </IonContent>
      
      <MenuAcc/>
      
      
	  </IonPage>
    );
  };

  export default Acceuil;