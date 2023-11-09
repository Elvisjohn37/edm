import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import { useSelector } from 'react-redux'
import { TAppRoute, TUser } from './approute/approute'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const Login = lazy(() => import('./pages/Login'))
const Todo = lazy(() => import('./pages/User'))

function AppRoute() {

    const login: any = useSelector((state: TAppRoute) => state.login)
    console.log(login.login)
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={'..Loading'}>
                            <MainLayout />
                        </Suspense>
                    }
                >
                    <Route
                        index
                        element={
                            <Suspense fallback={'..Loading'}>
                                {login.login.isLogin ? <Todo /> : <Login />}
                            </Suspense>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <Suspense fallback={'..Loading'}>
                                <Todo />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={'..Loading'}>
                                <PageNotFound />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute
