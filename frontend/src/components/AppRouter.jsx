import {Route, Routes} from 'react-router-dom';
import Properties from './Properties';
import Property from './Property';
import About from './About';
import NotFound from './NotFound';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/location/:id" element={<Property />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;