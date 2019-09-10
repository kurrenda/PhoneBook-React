import React from 'react';
import {Route} from 'react-router-dom'
import ArticleList from './containers/ArticleListView'
import ArticleDetail from './containers/ArticleDetailView'
import Form from './containers/Form'


const BaseRouter = () => (
    <div>
        <Route exact path='/asd' component={ArticleList} />
        <Route exact path='/asd/:userID' component={ArticleDetail} />
        <Route exact path='/' component={Form} />


    </div>
);

export default BaseRouter;