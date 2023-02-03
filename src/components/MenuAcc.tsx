import { IonTabButton,IonTabBar,IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar } from '@ionic/react';
import { addCircle, addCircleOutline, home, homeOutline, notifications, notificationsOutline,cashOutline, person, personOutline, search, searchOutline, list, logOut, shareOutline, share, cash } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import { enter,chevronBack, chevronForward, trashOutline } from 'ionicons/icons';

import  './Style.css';
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import { personCircle,airplane} from 'ionicons/icons';

import './floating-tab-bar.css';
const Menu: React.FC<any> = () => {
    

    
    const tabs = [

        {
          name: "Home",
          url: "/acc",
          activeIcon: home,
          icon: homeOutline,
         
        },{
          name: "Ajouter Solde",
          url: "/soldeadd",
          activeIcon: cashOutline,
          icon: cash,
         
        },
        {
          name: "Encherir",
          url: "/insertenchere",
          activeIcon:shareOutline,
          icon: share,
         
        },
        {
          name: "Log Out",
          url: "/",
          activeIcon: logOut,
          icon: logOut,
         
        },
      ];
    
      const [ activeTab, setActiveTab ] = useState(tabs[0].name);
    return (
        <IonTabBar slot="bottom" >
          
            { tabs.map((tab, barIndex) => {

              const active = tab.name === activeTab;
              const redirect=()=>{
                var url:string= tab.url ;
                window.location.replace(tab.url);
              }
              return (
              
              <IonTabButton key={ `tab_${ barIndex }` } tab={ tab.name } onClick={redirect}>
                  <IonIcon icon={ active ? tab.activeIcon : tab.icon } color={'danger'} />{tab.name}
                </IonTabButton>
              );
            })}
          </IonTabBar>
    );
  };

  export default Menu;