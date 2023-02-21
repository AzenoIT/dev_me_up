import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const goTo = (navigator, viewName) => {
    return () => {
        return navigator.navigate(viewName);
    }
}

export default Stack;