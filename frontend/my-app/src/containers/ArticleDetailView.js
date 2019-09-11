import React from 'react';
import Articles from '../components/Article'
import axios from 'axios';

import {Button, Card, Form, Input} from 'antd';
import CrudForm from '../components/Crud'

class ArticleDetail extends React.Component {

    state = {
        articles: {}
    };


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

    handleDelete = (event) => {
         const userID = this.props.match.params.userID;
         axios.delete(`http://127.0.0.1:8000/api/art/${userID}`);

    };



    render(){
        return(
            <div>
                <Card title={this.state.articles.firstname}>
                    <p>{this.state.articles.surname}</p>
                </Card>
                <CrudForm requestType="put" userID={this.props.match.params.userID} btnText="Update" btnText2="Update"/>

                <Form onSubmit={this.handleDelete}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">Delete</Button>
                  </Form.Item>
                 </Form>

            </div>
        )

    }


}

export default ArticleDetail;