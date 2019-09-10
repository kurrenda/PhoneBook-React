import React from 'react';
import Articles from '../components/Article'
import axios from 'axios';

import { Card } from 'antd';
import CrudForm from '../components/Crud'

class ArticleDetail extends React.Component {

    state = {
        articles: {}
    }

    componentDidMount() {
        const userID = this.props.match.params.userID;
        axios.get(`http://127.0.0.1:8000/api/art/${userID}`)
            .then( res => {
                this.setState(({
                    articles: res.data
                }));
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Card title={this.state.articles.firstname}>
                    <p>{this.state.articles.surname}</p>
                </Card>
                <CrudForm requestType="put" userID={this.props.match.params.userID} btnText="Update"/>


            </div>
        )

    }


}

export default ArticleDetail;