import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "../header/navigation";
import UploadButton from "../upload-button/upload-button";
import Editor from "../editor/editor";

const App = () => {
    return (
        <div className="container">
            <Router>
                <Navigation/>
                <Route path="/"
                       component={UploadButton}
                       exact/>
                <Route path="/editor" component={Editor}/>
            </Router>
        </div>
    )
};

export default App;
