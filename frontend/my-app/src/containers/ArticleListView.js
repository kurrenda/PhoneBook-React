import React from 'react';
import Articles from '../components/Article'
import axios from 'axios';
import CrudForm from '../components/Crud'


class ArticleList extends React.Component {

    state = {
        articles: []
    }
    



    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/art/')
            .then( res => {
                this.setState(({
                    articles: res.data
                }));
                console.log(res.data);
            })
    }

     componentDidUpdate() {
        axios.get('http://127.0.0.1:8000/api/art/')
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
            <Articles data={this.state.articles} />
            <br/>
            <h2>Create an User </h2>
            <CrudForm requestType="post"
            userId={null}  btnText="Create"/>
            </div>
        )

    }


}

export default ArticleList;