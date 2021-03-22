import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";

const SSDPage = () => (
    <div>
        <h1>SSD Page</h1>
    </div>
)

const App = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/SSD" component={SSDPage} />
            </Switch>
        </div>
    )
}

export default App;
