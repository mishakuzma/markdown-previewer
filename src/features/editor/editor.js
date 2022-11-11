// import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { parser } from '../parser/parserSlice'

export function Editor() {
    const dispatch = useDispatch()
    // const setText = useState('2');
    
    return(
        <div className="editor"
            onLoad={e => {
                dispatch(parser(e.textarea.target.value));
                console.log("div init.");
            }}>
            <textarea
                id='editor'
                aria-label="Markdown here"
                value="# Header 1
## Header 2

`inline code`

```
code
block
```

- list item 1
- list item 2
- list item 3
---
normal text
**bold text**

![](https://upload.wikimedia.org/wikipedia/commons/e/e4/Globe.png)

>block
>quote"
                // onLoad={e => {
                    // dispatch(parser(e.target.value));
                    // console.log("init dispatch.");
                // }}
                onChange={e => {
                    dispatch(parser(e.target.value));
                    console.log("change dispatch.");
                }}
            >

            </textarea>
        </div>
    )
}