import { useState, useRef } from 'react';

function StateRef() {

    const [name, setName] = useState("");

    const inputRef = useRef(null);

    function focusInput() {

        inputRef.current.focus();

    }

    return (

        <div>

            <h2>useState and useRef</h2>

            <div className="mb-3">

                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            </div>

            <button
                className="btn btn-primary"
                onClick={focusInput}
            >
                Focus Input
            </button>

            <h4 className="mt-3">
                Hello {name}
            </h4>

        </div>

    );

}

export default StateRef;