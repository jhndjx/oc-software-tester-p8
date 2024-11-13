import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Layout from './Layout';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router
                future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
                }}
            >
                <div className="App">
                    <Layout>
                        <AppRouter />
                    </Layout>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;