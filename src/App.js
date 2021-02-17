import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';

// css
import './app.css';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="app__cont">
                    <Aside />
                    <Main />
                </div>
            </div>
        </div>
    );
}

export default App;