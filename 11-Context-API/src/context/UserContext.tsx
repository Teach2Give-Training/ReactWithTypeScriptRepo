// import { createContext,useContext } from "react";

// interface User {
//       name: string;
//     email: string;
//     age: number;
//     address: {
//         street: string;
//         city: string;
//         state: string;
//     };
// }

// export const UserContext = createContext<User | null>(null)

// export const useUser = () => useContext(UserContext)

import { createContext } from 'react'

export interface User {
  name: string
  email: string
  age: number
  address: {
    street: string
    city: string
    state: string
  }
}

type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextType | null>(null)