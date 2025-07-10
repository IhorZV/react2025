import React from 'react';

import {MyComponent} from "./components/MyComponent/MyComponent";

const App = () => {
    return (
        <div>
            <MyComponent>
                <h3>hello children</h3>
            </MyComponent>
        </div>
    );
};

export {App};