import { Route, Routes } from 'react-router-dom';
import { HeroresRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
        <Routes>

          {/* <Route path="login/*" element={ */}
        <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
              {/* <Routes>
                <Route path="/*" element={<LoginPage />} />  
              </Routes> */}
            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute>
              <HeroresRoutes />
            </PrivateRoute>
          } />

          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="/*" element={<HeroresRoutes />} /> */}

          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Routes>
    </>
  )
}
