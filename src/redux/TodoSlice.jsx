import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk(
    "todos/getTodos",
    async () => {
      const response = await axios.get("https://dummyjson.com/todos");
      return response.data;
    }
  );

const TodoSlice = createSlice ({
    name: "todo",
    initialState:{
        todo:{},
        loading: 'idle', 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state, action) => {
            if(state.loading === 'idle') {
                state.loading = "pending";
            }
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            if(state.loading === 'pending') {
                state.data = action.payload;
                state.loading = "idle";
            }
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            if(state.loading === "pending") {
                state.loading = 'idle';
                state.error = "Error occured"
            }
        });
    }
});
export default TodoSlice.reducer;