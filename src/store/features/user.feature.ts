import { IUser } from "@/interfaces/user.interface";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null as IUser | null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;