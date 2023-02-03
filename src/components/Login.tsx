import { IonSelectOption,IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar, IonSelect } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';

import  './Style.css';
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import { personCircle,logInOutline } from 'ionicons/icons';
import Menu from './Menu';

const Login: React.FC<any> = () => {
    
    const [value,setValue]=useState();
     const loaddonnees=async ()=>{
        const pseudoinput:any=document.getElementById('pseudo') as HTMLInputElement|null;
        const mdpinput:any=document.getElementById('mdp') as HTMLInputElement|null;
        
        const data=
        {
            pseudo:pseudoinput.value,
            mdp:mdpinput.value
        }
       
       
        await fetch('https://repositoryenchere-production.up.railway.app/Login/register/'+pseudoinput.value+'/'+mdpinput.value,{
            method:'POST',headers:{'Content-Type':'application/json'},
           
        })
        .then(response=>{
         
            window.location.replace("/");
        }
        )
          
        }
    
    
    
    
    
    return (
        <IonApp  >
             <IonHeader>
                    <IonToolbar>
                        <IonTitle class='flex-center' color={'danger'}>
                          INSCRIVEZ-VOUS
                        </IonTitle>
                    </IonToolbar>
                    
                </IonHeader>
                <IonContent class='flex-center' color={'light'} >
        
        <IonIcon
            
            icon={personCircle}
        className="loginicon" color={'danger'}/>
        
        <IonRow>
            <IonCol>
                <IonItem color={'dark'}>
                <IonLabel position="floating" color={'light'}> Pseudo</IonLabel>
                <IonInput
                    type="text" id='pseudo' color={'light'} 
                >
                </IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol >
                <IonItem color={'dark'}>
                <IonLabel position="floating" color={'light'}> Password</IonLabel>
                <IonInput
                    type="password" id='mdp' color={'light'} 
                    
                    >
                </IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonButton type='button' onClick={loaddonnees} expand="block" color={'dark'}>
                    <IonIcon slot='start' icon={logInOutline} color={'danger'}/>
                    <IonText color={'light'}>Login</IonText>
                
                </IonButton>   
            </IonCol>
        </IonRow>
        
</IonContent>
        
    </IonApp>
    );
  };

  export default Login;