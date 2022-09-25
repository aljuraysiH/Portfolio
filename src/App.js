import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Modal from './components/Modal/Modal';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  }, [i18n.language]);

  return (
    <>
      <Modal />
      <ToastContainer
        position='top-center'
        autoClose={3000}
        closeOnClick
        rtl={i18n.language === 'ar' ? true : false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`app ${i18n.language === 'ar' ? 'ar' : ''}`}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='*' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
