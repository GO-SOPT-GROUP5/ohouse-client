import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CheckListEditPage from './pages/CheckListEditPage';
import CheckListPage from './pages/CheckListPage';
import CheckListShowPage from './pages/CheckListShowPage';
import ErrorPage from './pages/ErrorPage';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import MainLayout from './pages/MainLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/list" element={<ListPage />} />
              <Route path="/checklist" element={<CheckListPage />} />
              <Route path="/checklist/:checklistId" element={<CheckListShowPage />} />
              <Route path="/checklist/:checklistId/edit" element={<CheckListEditPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
