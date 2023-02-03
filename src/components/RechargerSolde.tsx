import { IonSelectOption,IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar, IonSelect } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';
import MenuAcc from './MenuAcc';
import  './Style.css';
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import { personCircle,logInOutline } from 'ionicons/icons';
import Menu from './Menu';

const RechargerSolde: React.FC<any> = () => {
    
    const [value,setValue]=useState();
     const loaddonnees=async ()=>{
        const valeur:any=document.getElementById('valeur') as HTMLInputElement|null;
        const data=
        {
            valeur:valeur.value,
            idutilisateur:sessionStorage.getItem("idutilisateur")
        }
        
       
        await fetch('https://repositoryenchere-production.up.railway.app/solde/rechargerSolde',{
            method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(response=>{
         
            window.location.replace('/acc');
        }
        )
          
        }
    
    
    
    
    
    return (
        <IonApp  >
             <IonHeader>
                    <IonToolbar>
                        <IonTitle class='flex-center'>
                          Ajouter de l'argent a votre solde
                        </IonTitle>
                    </IonToolbar>
                    
                </IonHeader>
        <IonContent class='flex-center' color={'light'} >
        
                
               
                
                <IonRow class='ampidinina'>
                    <IonCol>
                        <IonItem>
                        <IonLabel position="floating"> Valeur en ariary</IonLabel>
                        <IonInput
                            type="number" min="0" style={{'height':'20%'} }  step={'0.10'} id="valeur" required
                        >
                        </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                
                <IonRow>
                    <IonCol>
                        <IonButton  onClick={loaddonnees} expand="block" color={'dark'}  >
                            <IonIcon slot='start' icon={logInOutline}/>
                        <IonText color={'light'}>RechargerSolde</IonText>
                        </IonButton>   
                    </IonCol>
                </IonRow>
                
    </IonContent>
    <MenuAcc/>
    </IonApp>
    );
  };

  export default RechargerSolde;