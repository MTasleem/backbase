import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import "../HomePage/HomePage.css";
import MakeMoney from '../MakeMoney';
import RecentTransaction from '../RecentTransaction/RecentTransaction';
import Header from '../Header/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="main-container">
                {/* <BoxContainer /> */}
                <Header />
                <section className="wrap-content">
                    <MakeMoney />
                    <RecentTransaction />
                </section>
            </div>
            // <div className="jumbotron-custom">
            //     <div className="col-sm-12 col-md-12 col-lg-12 remove-padding">
            //         {alert.message &&
            //             <div className={`alert ${alert.type}`}>{alert.message}</div>
            //         }
            //         <Router history={history}>
            //             <Switch>
            //                 <PrivateRoute exact path="/" component={HomePage} />
            //                 <Route path="/login" component={LoginPage} />
            //                 <Redirect from="*" to="/" />
            //             </Switch>
            //         </Router>
            //     </div>
            // </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };