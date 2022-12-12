import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
      const response = await axios.get("https://dummyjson.com/users");
      return response.data;
    }
  );

const UserSlice = createSlice ({
    name: "user",
    initialState:{
        user:[],
        loading: 'idle',
        error: null,
        selectedUser:'',
    },
    reducers: {
        addUser : (state, action) => {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.data = action.payload;
            state.data.sort((a, b) => {
              const val1 = a.name.common;
              const val2 = b.name.common;
              return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
            });
            state.loading = "idle";
          }
        });
        builder.addCase(getUsers.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
});

export default UserSlice.reducer;
export const {addUser} = UserSlice.actions;