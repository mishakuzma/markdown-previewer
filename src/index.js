import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import * as Redux from "@reduxjs/toolkit"
import "./index.scss"

class Preview extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="preview">
                <Editor />
                <FCCScript />
            </div>
        )
    }
}

class Editor extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
class FCCScript {
    render() {
        return(
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        )
    }
}

const store = Redux.configureStore()
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <Preview />
        <FCCScript />
    </Provider>
);