import React from "react";
import { Editor } from "./features/editor/editor";
import { Previewer } from "./features/previewer/previewer";

// const addScript = ({ src, id, onLoad }) => {
//     const exists = document.getElementById(id);
//     if (exists) {
//         return exists;
//     } else {
//         const script = document.createElement("script");
//         script.src = src;
//         script.id = id;
//         script.async = true;
//         script.onLoad = () => {
//             if (onLoad) {
//                 onLoad();
//             }
//         };
//         document.body.appendChild(script);
//         return script;
//     }
// };

// const removeScript = ({ id }) => {
//     const script = document.getElementById(id);
//     if (script) {
//         document.body.removeChild(script);
//     }
// };


export default class App extends React.Component {
    // componentDidMount() {
    //     addScript({
    //         src: "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",
    //         id: "fcc-script",
    //         onLoad: () => {
    //             console.log("FCC script active.")
    //         }
    //     })
    // }

    // componentWillUnmount() {
    //     removeScript({
    //         id: "fcc-script"
    //     })
    // }

    componentDidMount() {
        // UpdateEditor();
    }

    render() {
        return (
            <div id="app">
                <h1>Markdown Editor</h1>
                <Editor />
                <h1>Preview</h1>
                <Previewer />
                
            </div>
    )}
}