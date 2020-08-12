import React, { useState } from 'react';
import { AddMember } from './features/AddMember'
import { MemberList } from './features/MemberList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { EditeMember } from './features/EditeMember'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <AddMember />
                            <MemberList />
                        </React.Fragment>
                    )}
                />
                <Route exact path="/members/:memberId" component={EditeMember} />
                <Redirect to="/" />
            </Switch>

        </Router>
    );
}

export default App;
