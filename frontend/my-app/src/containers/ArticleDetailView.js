import React from 'react';
import Articles from '../components/Article'
import axios from 'axios';

import { Card } from 'antd';


class ArticleDetail extends React.Component {

    state = {
        articles: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/art/${articleID}`)
            .then( res => {
                this.setState(({
                    articles: res.data
                }));
                console.log(res.data);
            })
    }

    render(){
        return(
            <Card title={this.state.articles.title}>
                <p>{this.state.articles.content}</p>
            </Card>
        )

    }


}

export default ArticleDetail;