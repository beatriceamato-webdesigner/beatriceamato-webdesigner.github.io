import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LanguageProvider from './utils/LanguageProvider';
import RouteList from './RouteList';

function App() {
  const locale = useSelector((state) => state.language.locale);

  return (
    <LanguageProvider locale={locale}>
      <HashRouter>
        <RouteList />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
