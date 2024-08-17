import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layout/Layout'
import Team from '../pages/Team'
import Projects from '../pages/Projects/Projects'
import Login from '../pages/Login/Login'
import AdmPage from '../pages/AdmPage/AdmPage'
import ClientProjects from '../pages/ClientProjects/ClientProjects'
import PrivatedRoute from './PrivatedRouter'

export default function Router() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/adm'
          element={
            <PrivatedRoute
              element={<AdmPage />}
              requireAdmin
            />
          }
        />
        <Route path='/clientprojects' element={
          <PrivatedRoute
            element={<ClientProjects />}
          />
        } />
      </Route>
    </Routes>
  )
}