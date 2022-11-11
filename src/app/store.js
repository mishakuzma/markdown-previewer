import { configureStore } from "@reduxjs/toolkit";
import { markdownSlice } from "../features/parser/parserSlice";

export default configureStore({
    reducer: {
        parser: markdownSlice.reducer
    },
})