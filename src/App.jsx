import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FormComponent from './components/formComponent';
import Layouts from './components/layouts';
import Navbar from './components/navBar';
import AccordionShowcase from './components/accordian';
// import AvatarGroupShowcase from './components/avatarGroup';
import CommonComponents from './components/commonComponents';
import Home from './components/home';
// import { Breadcrumbs } from '@cloudwick/astral-ui';
import EmptyStateShowcase from './components/emptyState';

// const BreadcrumbsWrapper = () => {
//   const location = useLocation();
//   const paths = location.pathname.split('/').filter(path => path);
//   const breadcrumbs = [
//     { name: "Home" },
//     { name: "Datasets" },
//     { name: "Views" },
//     { name: "My Data" },
//     { name: "Settings" },
//     { name: "Details" }
//   ];

//   return (
//     <Breadcrumbs>
//       {breadcrumbs.map((c, idx) => (
//         <Breadcrumbs.Item key={idx} href="#">
//           {c.name}
//         </Breadcrumbs.Item>
//       ))}
//     </Breadcrumbs>
//   );
// };

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = (isDark) => {
    setIsDarkMode(isDark); 
  };

  return (
    <div className={isDarkMode ? 'adp-dark text-gray-200' : ''}>
      <Router>
        <Navbar onToggleChange={handleToggleChange} />
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path='/accordion' element={<AccordionShowcase />} />
          {/* <Route path='/avatar' element={<AvatarGroupShowcase />} /> */}
          <Route path="/empty" element={<EmptyStateShowcase />} />
          <Route path="/common" element={<CommonComponents />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
