import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        addUser: (state, action) => {
            state.users.unshift({ ...action.payload, id: state.users.length + 1 })
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (st) => action.payload.id !== st.id
            )
        },
        editUser: (state, action) => {
            state.users = state.users.map((st) =>
                st.id === action.payload.id ? { ...st, ...action.payload } : st
            )
        },
        saveEditUser: (state) => {
            state.users = state.users.map((user) =>
                user.newValue ? { ...user, name: user.newValue } : user
            )
        },
        removedNewValue: (state) => {
            state.users = state.users.map((user) => {
                user.newValue && delete user.newValue
                return user
            })
        },
    },
})

export const {
    setUsers,
    addUser,
    deleteUser,
    editUser,
    saveEditUser,
    removedNewValue,
} = userSlice.actions

export default userSlice.reducer
