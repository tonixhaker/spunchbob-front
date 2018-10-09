import React, {Fragment} from 'react';
import { BrowserRouter, Switch,Redirect } from 'react-router-dom';
import routes from './list';
import Public from './Public';
import Private from './Private';

class Routes extends React.Component{


    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((route, i) => {
                                if (route.auth === true) {
                                    return <Private key={i} {...route}  />;
                                }
                                return (
                                    <Public key={i} {...route}  />
                                );
                            })
                        }
                        <Redirect to={'/'} exact />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Routes;
