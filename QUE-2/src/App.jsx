import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import FunctionComponent from './components/FunctionComponent';
import ConditionalList from './components/ConditionalList';
import Counter from './components/Counter';
import StateRef from './components/StateRef';
import DigitalClock from './components/DigitalClock';
import ManualValidation from './components/ManualValidation';
import LibraryValidation from './components/LibraryValidation';
import Employees from './components/Employees';
import Students from './components/Students';

function App() {

    return (

        <BrowserRouter>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <Link className="navbar-brand" to="/">
                        React App
                    </Link>

                    <div className="navbar-nav">

                        <Link className="nav-link" to="/function">
                            Function
                        </Link>

                        <Link className="nav-link" to="/conditional">
                            Conditional
                        </Link>

                        <Link className="nav-link" to="/counter">
                            Counter
                        </Link>

                        <Link className="nav-link" to="/state-ref">
                            State & Ref
                        </Link>

                        <Link className="nav-link" to="/clock">
                            Clock
                        </Link>

                        <Link className="nav-link" to="/manual-validation">
                            Manual Form
                        </Link>

                        <Link className="nav-link" to="/library-validation">
                            Formik Form
                        </Link>

                        <Link className="nav-link" to="/employees">
                            Employees
                        </Link>

                        <Link className="nav-link" to="/students">
                            Students
                        </Link>

                    </div>

                </div>

            </nav>


            <div className="container mt-4">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/function"
                        element={<FunctionComponent />}
                    />

                    <Route
                        path="/conditional"
                        element={<ConditionalList />}
                    />

                    <Route
                        path="/counter"
                        element={<Counter />}
                    />

                    <Route
                        path="/state-ref"
                        element={<StateRef />}
                    />

                    <Route
                        path="/clock"
                        element={<DigitalClock />}
                    />

                    <Route
                        path="/manual-validation"
                        element={<ManualValidation />}
                    />

                    <Route
                        path="/library-validation"
                        element={<LibraryValidation />}
                    />

                    <Route
                        path="/employees"
                        element={<Employees />}
                    />

                    <Route
                        path="/students"
                        element={<Students />}
                    />

                </Routes>

            </div>

        </BrowserRouter>

    );

}

export default App;