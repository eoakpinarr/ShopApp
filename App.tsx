import React from 'react'
import StackNavigator from './src/navigation/StackNavigator'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ModalPortal } from "react-native-modals"

const App = () => {
    return (
        <>
            <Provider store={store}>
                <StackNavigator />
                <ModalPortal />
            </Provider>
        </>
    )
}

export default App;