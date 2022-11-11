import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0,
//     },
//     reducers: {
//         increment: (state) => {
//             state.value += 1
//         },
//         decrement: (state) => {
//             state.value -=1
//         },
//         incrementByAmount: (state, action) => {
//             state.value += action.payload
//         },
//     },
// })

export const markdownSlice = createSlice({
    name: "parser",
    initialState: {
        // input: "",
        // output: "",
        output: marked.parse(
`# Header 1
## Header 2

\`inline code\`

\`\`\`
code
block
\`\`\`

- list item 1
- list item 2
- list item 3
---
normal text
** bold text **

![](https://upload.wikimedia.org/wikipedia/commons/e/e4/Globe.png)

> block
> quote`
        )
},
    reducers: {
        parser: (state, action) => {
            state.output = marked.parse(action.payload)
        },
        // parser: (state) => {
        //     state.output = marked.parse(state.input)
        // },
    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { parser } = markdownSlice.actions
// export default counterSlice.reducer
export default markdownSlice.reducer