import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />

            <TinderCards />
            <SwipeButtons />
          </Route>
          {/* <Route path="/">
            <h1>I am homepage</h1>
          </Route> */}
        </Switch>
      </Router>
      {/* {header} */}
      {/* {Tinder cards} */}
      {/* {Button below tinder card} */}

      {/* {Chat Screen} */}
      {/* {Individual chat screen} */}
    </div>
  );
}

export default App;
