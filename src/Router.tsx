import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import ListPage from './pages/ListPage';
import CheckListPage from './pages/CheckListPage';
import ErrorPage from './pages/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/help' element={<HelpPage />} />
            <Route path='/list' element={<ListPage />} />
            <Route path='/checklist' element={<CheckListPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
