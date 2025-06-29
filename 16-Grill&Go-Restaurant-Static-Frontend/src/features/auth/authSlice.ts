import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

interface AuthState{
    user: null |any;
    token:string | null;
    isAuthenticated:boolean;
    userType:string | null
}

const initialState:AuthState ={
    user: null,
    token:null,
    isAuthenticated:false,
    userType:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action:PayloadAction<{user:any;token:string;userType:any}>)=>{
            state.user = action.payload;
            state.token = action.payload.token;
            state.userType = action.payload.userType;
            state.isAuthenticated = true
        },
        clearCredentials:(state)=>{
             state.user = null;
            state.token = null;
            state.userType = null;
            state.isAuthenticated = false
        }
    }
})

export const{setCredentials,clearCredentials} =authSlice.actions
export default authSlice.reducer