import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter';
import Layout from './Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <AppRouter/>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
