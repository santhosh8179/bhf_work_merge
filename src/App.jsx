import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css'
import MainLayout from './Layout/MainLayout'
import TaskDetails from './Pages/TaskDetails'
import EffortsGraph from './Pages/EffortsGraph'
import Login from './Pages/Login'
import { PrivateRoute } from './Componenets/PrivateRoute'

function App() {
  const user = localStorage.getItem('user') || 'John'

  return (
    <Router>
      <MainLayout>
        <Routes>
          {user ? (
            <>
              <Route
                path="/task-details"
                element={
                  <PrivateRoute>
                    <TaskDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/efforts-graph"
                element={
                  <PrivateRoute>
                    <EffortsGraph />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Login />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
// //ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
