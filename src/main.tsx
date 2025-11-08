import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'; 
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);