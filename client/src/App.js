import React, { Component, Fragment } from 'react';

// Styles Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Components
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/shoppingList/ShoppingList';


// App component
class App extends Component {
    render() {
        return (
            <Fragment>
                <AppNavBar />
                <ShoppingList />
            </Fragment>
        );
    } // render
} // App

export default App;
