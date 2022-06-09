import { Route, Router, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { VacaDetail } from '../pages/VacaDetail';

export function AppRouter() {
    return (
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<VacaDetail />} />
        </Routes> 
    );
}