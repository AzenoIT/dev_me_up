import {createContext} from 'react';
import {useNavigate} from 'react-router-dom';

const NavigateContext = createContext('');

export function NavigateProvider({children}) {
    const navigate = useNavigate();

    function handleNavigate(url) {
        return navigate(url);
    }

    return (
        <NavigateContext.Provider value={handleNavigate}>
            {children}
        </NavigateContext.Provider>
    )
}

export default NavigateContext;
