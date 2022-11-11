import React from 'react'
import { useSelector } from 'react-redux'

export function Previewer() {
    const parsed_html = useSelector((state) => state.parser.output)

    return (
        <div className="previewer">
            <div className="convertOutput"
                dangerouslySetInnerHTML={{ __html: parsed_html }}></div>
        </div>
    )
}