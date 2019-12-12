// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import TestErrorBoundary from './ErrorBoundary';
import TestTryCatch from './TestTryCatch';

// React.lazy 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，我们推荐 Loadable Components 这个库。
import MyErrorBoundary from './MyErrorBoundary';
const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));
// const AnotherComponent = import('./OtherComponent');
// const AnotherComponent = import('./AnotherComponent');

function MyComponent() {
    return (
        <div>
            <MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <section>
                        <OtherComponent />
                        <AnotherComponent />
                        <TestErrorBoundary />
                        <TestTryCatch />
                    </section>
                </Suspense>
            </MyErrorBoundary>
        </div>
    );
}

// ReactDOM.render(
//     <MyComponent />,
//     document.getElementById("root")
// )