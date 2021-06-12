import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {GlobalQuestionnStoreProvider} from './context/store';
import './App.css';
import Home from './pages/home';
import Question from './pages/question';
import Choice from './pages/choice';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <GlobalQuestionnStoreProvider>
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: "url(./quizback.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/question" exact>
              <Question />
            </Route>
            <Route path="/choice" exact>
              <Choice />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalQuestionnStoreProvider>
  );
}

export default App;
