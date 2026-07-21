import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

/**
 * Root application component.
 * Lays out the Navbar, Sidebar, main routed content, and Footer.
 * TODO (team): replace the static layout with real auth-aware navigation
 * once the Login/Register flow is implemented.
 */
function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          <AppRoutes />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
