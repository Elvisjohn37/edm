import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './pages/user/slice'
import loginReducer from './pages/login/slice'
import indexReducer from './index/slice'

export default configureStore({
    reducer: {
        todo: todoReducer,
        login: loginReducer,
        index: indexReducer,
    },
})
