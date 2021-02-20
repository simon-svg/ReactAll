import React, { useState } from 'react';
import headerContext from './context';

import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';

// css
import './app.css';


function App() {
    const [state, setstate] = useState([
        { id: 1, post: "good job bro!", likeCount: 10, img: "http://lizgross.net/wp-content/uploads/2014/03/Angry_Social_Media_Customer.jpg" },
        { id: 2, post: "it's very awesome!", likeCount: 23, img: "https://dailycaring.com/wp-content/uploads/2018/11/mean-dementia.jpg" }
    ])
    const [headerColor, setHeaderColor] = useState("black");
    let [textInner, setTextInner] = useState("");

    const handleStateChange = (textInner) => {
        let newPost = {
            id: state[state.length - 1].id + 1,
            img: "https://dailycaring.com/wp-content/uploads/2018/11/mean-dementia.jpg",
            post: textInner,
            likeCount: "22"
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
        setHeaderColor("red")
        handleStateChange(textInner);
    }


    return (
        <div className="App">
            <div className="wrapper">
                <headerContext.Provider value={headerColor}>
                    <Header />
                </headerContext.Provider>
                <div className="app__cont">
                    <Aside />
                    <Main handleStateChange={handleStateChange} state={state} handleFormClick={handleFormClick} handleTextInner={handleTextInner} />
                </div>
            </div>
        </div>
    );
}

export default App;