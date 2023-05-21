import { Route, Routes } from 'react-router-dom';
import { HeroresRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <div className='container'>

        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="/*" element={<HeroresRoutes />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Routes>

      </div>
    </>
  )
}
