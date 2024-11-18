import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Layout from './Layout';
import '../assets/css/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <AppRouter />
                </Layout>
            </div>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
