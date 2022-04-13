import { BrowserRouter as Router} from 'react-router-dom'
import { AppRoutes as Routes } from './AppRoutes'

import Header  from './components/Header'
import Footer  from './components/Footer'

import './styles/global.css'


export function App() {
  return (
    <Router >
      {/* Header */}
        <Header />

        <Routes />

      {/* Footer */}
      <Footer />

    </Router>
  );
}

