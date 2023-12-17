import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginView from "./views/LoginView/LoginView";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import BoardView from "./views/BoardView/BoardView";
import SubmitView from "./views/SubmitView/SubmitView";
import {getBoard, getBoards, getSchools, getUsers} from "./api";
import "./style.css"
import Token from "./models/Token";
import {Buffer} from 'buffer';
import AdminDashboardView from "./views/AdminDashboardView/AdminDashboardView";
import {loadMatches} from "./loaders";


function App() {
    const token = localStorage.getItem('accessToken')

    if (!token) return <LoginView />

    const decodedToken = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()) as Token
    const isAdmin = decodedToken.isAdmin

    const router = createBrowserRouter([
        {
            path: "/",
            element: <DashboardView isAdmin={isAdmin} />,
            loader: async () => { return await loadMatches(token) }
        },
        {
            path: "/dashboard",
            element: <DashboardView isAdmin={isAdmin} />,
            loader: async () => { return await loadMatches(token) }
        },
        {
            path: "/dashboard/boards/:matchId",
            element: <BoardView isAdmin={isAdmin} />,
            loader: async ({ params }) => {
                const { matchId } = params
                if (matchId) {
                    const boards = await getBoards(token, matchId)
                    return { boards }
                }
            }
        },
        {
            path: "/dashboard/submit/:boardId",
            element: <SubmitView />,
            loader: async ({ params }) => {
                const { boardId } = params
                if (boardId) {
                    const board = await getBoard(token, boardId)
                    return { board }
                }
            }
        },
        {
            path: "/dashboard/admin",
            element: <AdminDashboardView />,
            loader: async () => {
                const { matches } = await loadMatches(token, true)
                return { matches, users: await getUsers(token), schools: await getSchools(token) }
            }
        }
    ]);

    return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
