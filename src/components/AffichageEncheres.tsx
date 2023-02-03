import {IonModal,IonImg,IonCard,IonGrid,IonRow,IonCol,IonTitle,IonApp, IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import {eye,airplane, chevronBack, chevronForward, trashOutline } from 'ionicons/icons';
//import styles from './Liste.module.scss';
import React,{useEffect,useState} from "react";
import { heart,close } from 'ionicons/icons';
import Menu from './Menu';
import AvionModal from './UtilisateurModal';
import style2 from './Card.module.css';
const AffichageCandidat: React.FC = (personne:any) => {
    console.log(personne)
    /*const casepas=()=>{
      
         fetch('http://localhost:8080/casepas/'+personne.personne.user.idutilisateur,{
            method:'POST',headers:{'Content-Type':'application/json'}

        })
        .then(response=>{
          
           window.location.replace('/acc');
        })
    }
    const match=()=>{
      
      fetch('http://localhost:8080/match/'+personne.personne.user.idutilisateur,{
         method:'POST',headers:{'Content-Type':'application/json'}

     })
     .then(response=>{
      window.location.replace('/acc');
     })
 }*/
    return (
        
            <IonCard className={style2.col} >
                <IonHeader >
                    <IonToolbar color={'danger'}>
                        <IonTitle color={'dark'}>
                           {personne.personne.designationProduit}  
                        </IonTitle>
                    </IonToolbar>
                    
                </IonHeader>
           <IonContent fullscreen color={'dark'}>

           <IonToolbar style={{'height':'100%'}}>
                        <IonTitle color={'light'} style={{'height':'20%'}}>
                           Date Debut:{personne.personne.dateEnchere}  
                        </IonTitle >
                        <IonTitle color={'light'} style={{'height':'20%'}}>
                           IdEnchereur:{personne.personne.idenchereur} 
                        </IonTitle>
                        <IonTitle color={'light'} style={{'height':'20%'}}>
                           Somme de Depart:{personne.personne.sommedepart}  Ar
                        </IonTitle>
                        <IonTitle color={'light'} style={{'height':'20%'}}>
                           Status:{personne.personne.statut} 
                        </IonTitle>
                        
            </IonToolbar>
                            
           
           </IonContent>
            <IonFooter>
                
            </IonFooter>
            
          </IonCard>
        
    );
  };

  export default AffichageCandidat;