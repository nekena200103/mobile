import { IonTabButton,IonTabBar,IonInput,IonRow,IonTitle,IonApp,IonCol,IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonText, IonToolbar } from '@ionic/react';
import { addCircle, addCircleOutline, home, homeOutline, notifications, notificationsOutline,cashOutline, person, personOutline, search, searchOutline } from 'ionicons/icons';

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
          url: "/home",
          activeIcon: enter,
          icon: enter,
         
        },
        
      ];
    
      const [ activeTab, setActiveTab ] = useState(tabs[0].name);
    return (
        <IonTabBar slot="bottom">
           <h2>Inscription</h2> 
            { tabs.map((tab, barIndex) => {

              const active = tab.name === activeTab;

              return (
              
              <IonTabButton key={ `tab_${ barIndex }` } tab={ tab.name } href={ tab.url }>
                  <IonIcon icon={ active ? tab.activeIcon : tab.icon }  color={'danger'}/>Inscription
                </IonTabButton>
              );
            })}
          </IonTabBar>
    );
  };

  export default Menu;