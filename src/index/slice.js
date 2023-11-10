import { createSlice } from '@reduxjs/toolkit'

const indexSlice = createSlice({
    name: 'index',
    initialState: {
        hasModal: false
    },
    reducers: {
        setHasModal: (state, action) => {
            state.hasModal = action.payload
        }
    },
})

export const {
    setHasModal
} = indexSlice.actions

export default indexSlice.reducer
