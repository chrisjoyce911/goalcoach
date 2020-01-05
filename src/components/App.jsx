import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }


    render() {
        return (
            <div style={{ margin: '5px' }}>
                <h3>Goal Coach</h3>
                <hr />
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign Out
            </button>
            </div>
        )
    }
}

export default App;