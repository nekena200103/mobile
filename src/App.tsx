import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


import Acceuil from './components/Acceuil';
import Login from './components/Login';
import Entry from './components/Entry';
import RechargerSolde from './components/RechargerSolde';
import InsertionEnchere from './components/InsertionEnchere';

import AffichageCandidat from './components/AffichageEncheres';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Login />
        </Route>
        
        <Route exact path="/">
          <Entry />
        </Route>
        
        <Route exact path="/acc">
          <Acceuil />
        </Route>
        <Route exact path="/soldeadd">
          <RechargerSolde />
        </Route>
        <Route exact path="/insertenchere">
          <InsertionEnchere/>
        </Route>
        
        <Route exact path="/Acc">
          <Acceuil/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
