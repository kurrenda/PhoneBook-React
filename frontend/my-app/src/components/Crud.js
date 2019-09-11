import React from 'react';

import { Form, Input, Button} from 'antd';
import axios from 'axios'

class CrudForm extends React.Component {

    handleFormSubmit = (event, requestType, userID) =>{
        event.preventDefault();
        const firstname = event.target.elements.firstname.value;
        const surname = event.target.elements.surname.value;

        switch (requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/art/', {
                   firstname: firstname,
                   surname: surname
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/art/${userID}/`, {
                   firstname: firstname,
                   surname: surname
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));

            case 'delete':
                return axios.delete(`http://127.0.0.1:8000/api/art/${userID}/`, {
                   firstname: firstname,
                   surname: surname
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    };

  render() {

    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.userID)} >
          <Form.Item label="First Name" >
            <Input name="firstname" placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Surname" >
            <Input name="surname" placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default CrudForm