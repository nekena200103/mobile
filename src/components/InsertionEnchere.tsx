import { useIonAlert,IonSelectOption,IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar, IonSelect, useIonLoading } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';

import  './Style.css';
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import { personCircle,logInOutline } from 'ionicons/icons';
import Menu from './Menu';
import MenuAcc from './MenuAcc';
const InsertionEnchere: React.FC<any> = () => {
    const [tabcategorie,setTab]=useState([]);
    const [loader,setLoader]=useIonLoading();
    const [value,setValue]=useState();
    const [preventAlert]=useIonAlert();
    loader({
        mode:'ios',
        message:'chargement',
        spinner:'circles'
    });
    function removeT(datetime:any) {
        return datetime.replace("T", " ");
      }
     const loaddonnees=async ()=>{
        const categorie:any=document.getElementById('categorie') as HTMLInputElement|null;
        const designationProduit:any=document.getElementById('designationProduit') as HTMLInputElement|null;
        const sommedepart:any=document.getElementById('sommedepart') as HTMLInputElement|null;
        const datefin:any=document.getElementById('datefin') as HTMLInputElement|null;
        
        
        const data=
        {
            idcategorie:categorie.value,
            designationProduit:designationProduit.value,
            sommeDepart:sommedepart.value,
            idenchereur:sessionStorage.getItem("idutilisateur"),
            datefin:datefin.value+"+00:00"
        }
        
       
        await fetch('https://repositoryenchere-production.up.railway.app/encheres/insertEnchere/',{
            method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(response=>{
            preventAlert({
                header:"Succes",
                message:"Votre insertion est reussie",
                mode:'ios',
                buttons:['OK']
            })
            window.location.replace("/acc");
            
        }
        )
          
        }
       
       
          
        useState(()=>{fetch('https://repositoryenchere-production.up.railway.app/categoriesproduit',{
            method:'GET',headers:{'Content-Type':'application/json'}
      
        })
        .then(response=> { return response.json();}).then((text)=>  {setTab(text);setLoader();
        });
      
        console.log(tabcategorie)
        })
    
    
    
    return (
        <IonApp  >
             <IonHeader>
                    <IonToolbar>
                        <IonTitle class='flex-center'>
                          Faire une enchere
                        </IonTitle>
                    </IonToolbar>
                    
                </IonHeader>
        <IonContent class='flex-center' color={'light'} >
        
                
               
                
                <IonRow class='ampidinina'>
                    <IonCol>
                        <IonItem>
                        <IonLabel position="floating"> Designation Produit</IonLabel>
                        <IonInput
                            type="text" min="0" style={{'height':'20%'} }  step={'0.10'} id="designationProduit" required
                        >
                        </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow >
                    <IonCol>
                        <IonItem>
                        <IonLabel position="floating"> Prix de depart</IonLabel>
                        <IonInput
                            type="number" min="0" style={{'height':'20%'} }  step={'0.10'} id="sommedepart" required
                        >
                        </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonText  color={'dark'}> Categorie</IonText>
                <IonRow >
                    <IonCol>
                   
                        <IonItem>
                        
                       
                        <IonSelect
                             style={{'height':'200%','opacity':'0%'} } id="categorie"  interface={'action-sheet'} mode='ios'
                        >
                             { 
      tabcategorie.map((prs:any,key) => {
        
                console.log(prs)
                return (
                    <div key={ key } style={{'height':'60%'}}> <IonSelectOption value={prs.idcategorieproduit} color= {'dark'}><p>{prs.intitulecategorieproduit}</p></IonSelectOption></div>
                );
            })}
                             
                            
                        </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                
                <IonText color={'dark'}>Date fin</IonText>
                <IonRow >
                    <IonCol>
                        <IonItem>
                        
                        <IonInput
                            type="datetime-local"  style={{'height':'20%'} }  step={'0.10'} id="datefin" 
                        >
                        </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton  type='submit' onClick={loaddonnees} expand="block" color={'danger'}  >
                            <IonIcon slot='start' icon={logInOutline}/>
                        <IonText color={'light'}>Inserer</IonText>
                        </IonButton>   
                    </IonCol>
                </IonRow>
                
    </IonContent>
    <MenuAcc/>
    </IonApp>
    );
  };

  export default InsertionEnchere;