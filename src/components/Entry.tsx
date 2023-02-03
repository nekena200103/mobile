import { IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar, useIonAlert } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';

import  './Style.css';
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import { personCircle,logInOutline } from 'ionicons/icons';
import Menu from './Menu';
const Login: React.FC<any> = () => {
    const [preventAlert]=useIonAlert();
    const loaddonnees=async ()=>{
        const nominput:any=document.getElementById('nom') as HTMLInputElement|null;
        const prenominput:any=document.getElementById('motdepasse') as HTMLInputElement|null;
        var andrana:any;
        const data=
        {
            nom:nominput.value,
            prenom:prenominput.value,
            
        }
       
        
        await fetch('https://repositoryenchere-production.up.railway.app/Login/checkUser/'+nominput.value+'/'+prenominput.value,{
            method:'POST',headers:{'Content-Type':'application/json'}

        })
        .then(response=>{
          
           return response.text()
        }
        ).then((text)=>  andrana=text );
        console.log(andrana)
          if (andrana!='-1') {
            sessionStorage.setItem("idutilisateur",andrana)
            window.location.replace('/acc')
          }else{
            preventAlert({
                header:"Erreur",
                message:"mot de passe ou utilisateur inexistant",
                mode:'ios',
                buttons:['OK']
            })
          }
        }
    
    
    
    
    
    
    return (
        <IonApp  >
            
        <IonContent class='flex-center' color={'light'} >
        
                <IonIcon
                    
                    icon={personCircle}
                className="loginicon" color={'danger'}/>
                
                <IonRow>
                    <IonCol>
                        <IonItem color={'dark'}>
                        <IonLabel position="floating" color={'light'}> Pseudo</IonLabel>
                        <IonInput
                            type="text" id='nom' color={'light'} placeholder="namana"
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
                            type="password" id='motdepasse' color={'light'} placeholder="namana"
                            
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
        < Menu />
    </IonApp>
    );
  };

  export default Login;