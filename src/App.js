import React, { useState } from 'react';

// components
import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';

// css
import './app.css';
import userPhoto from './media/img/userPhoto.png';

// contexts
import headerContext from './contexts/context';
import lightContext from './contexts/lightContext';


function App() {
    const [state, setstate] = useState([
        { id: 1, post: "good job bro!", likeCount: 10, img: "http://lizgross.net/wp-content/uploads/2014/03/Angry_Social_Media_Customer.jpg" },
        { id: 2, post: "it's very awesome!", likeCount: 23, img: "https://dailycaring.com/wp-content/uploads/2018/11/mean-dementia.jpg" }
    ])
    let [headerColor, setHeaderColor] = useState(localStorage.getItem("lightMode") === "sun" ? "black" : "#dddddd");
    let [textInner, setTextInner] = useState("");
    let [lightIcon, setLightIcon] = useState(localStorage.getItem("lightMode") === "sun" ? "fas fa-moon" : "fas fa-sun");
    let [lightBool, setLightBool] = useState(localStorage.getItem("lightMode") === "sun" ? true : false);
    let [appBG, setAppBG] = useState(localStorage.getItem("lightMode") === "sun" ? "white" : "black")


    if (!localStorage.getItem("lightMode")) {
        localStorage.setItem("lightMode", "sun");
    }
    const handleStateChange = (textInner) => {
        let newPost = {
            id: state[state.length - 1].id + 1,
            img: userPhoto,
            post: textInner,
            likeCount: "0"
        }
        setstate([
            ...state,
            newPost
        ])
    }

    const handleTextInner = (e) => {
        setTextInner(e.target.value)
    }
    const handleFormClick = (e) => {
        e.preventDefault();
        if (textInner) {
            handleStateChange(textInner);
        }
    }
    const handleLightChange = () => {
        if (lightBool) {
            setLightIcon('fas fa-sun');
            setAppBG("black");
            setHeaderColor("#dddddd");
            localStorage.setItem("lightMode", "moon");
        }
        else {
            setLightIcon('fas fa-moon');
            setAppBG("white");
            setHeaderColor("black");
            localStorage.setItem("lightMode", "sun");
        }
        setLightBool(!lightBool);
    }



    return (
        <div style={{ backgroundColor: appBG }} className="App">
            <div className="wrapper">
                <headerContext.Provider value={headerColor}>
                    <Header />
                </headerContext.Provider>
                <div className="app__cont">
                    <lightContext.Provider value={{ lightIcon, handleLightChange }}>
                        <Aside />
                    </lightContext.Provider>
                    <Main handleStateChange={handleStateChange} state={state} handleFormClick={handleFormClick} handleTextInner={handleTextInner} />
                </div>
            </div>
        </div>
    );
}

export default App;