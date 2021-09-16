import "./App.css";
import Home from './Components/HomeApp';
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
    return <div className="App">
        <Provider store={store}>
            <Home />
        </Provider>
    </div>;
}

export default App;
