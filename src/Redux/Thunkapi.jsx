import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const fetchTodos = createAsyncThunk('apicall/fetchTodos',async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})
const apiSlice = createSlice({
    name:'apicall',
    initialState:{todos:[],status:null,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(fetchTodos.pending,(state)=>{
            state.status = 'loading'
          })
          .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.todos = action.payload;
          })
          .addCase(fetchTodos.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
          })
    }
})
export default apiSlice.reducer;
