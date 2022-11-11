import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
//import * as Redux from "@reduxjs/toolkit"

import App from "./App"
import store from "./app/store"
import "./index.scss"

// class Preview extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     // }

//     // marked is the markdown parser being used for preview.
//     parsed_html = marked.parse(this.state.value);

//     render() {
//         return (
//             <div className="preview">
//                 parsed_html
//             </div>
//         )
//     }
// }

// class Editor extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: "",
//             isPreview: false
//         }
//         this.onChange = (e) => {
//             this.setState({
//                 value: e.target.value
//             })
//         }
//     }
//     render() {
//         return (
//             // create a textarea that stores user input in state
//             <textarea className="editor"
//                 value={this.props.text}
//                 onChange={this.props.onChange}
//             />
//         )
//     }
//     }

// class FCCScript extends React.Component {
//     render() {
//         return(
//             <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
//         )
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Editor />
//                 <Preview />
//                 <FCCScript />
//             </div>
//         )
//     }
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Provider store={store}>
            <App />
        </Provider>
);