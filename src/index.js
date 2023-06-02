import React from "react";
import { createRoot } from "react-dom/client";
//Import any components you might need here
import Root from "./root"
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";


/* Optionally, you can import and destructure 
   anything else you may need here from src/component/index.js
   Below is an example of that with Main   
*/
//import {Main} from "./components";


const container = document.getElementById("root")
const root = createRoot(container)

//Some things might be missing here...
root.render(
        <Router>
        <Provider store={store}>
          <Root />
        </Provider>
      </Router>
)
