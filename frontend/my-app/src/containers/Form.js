import React from "react";

import {
  Input,
  Form,
  Select,
  Spin,
    Icon,
} from 'antd';

import Results from "./Results";
import axios from 'axios';
const { Option } = Select;
const { Search } = Input;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class FilterForm extends React.Component {

    state = {
        results: [],
        loading: false,
        error:null
    };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        const q = values['searchTitle'];
        console.log(q);

      this.setState({loading: true});

      if (!err) {
          axios.get('http://127.0.0.1:8000/api/filter', {
             params: {
                 q
             }
          })
          .then(res => {
              this.setState({
                  loading: false,
                  results: res.data
              })
          })
          .catch(err => {
              this.setState({ error: "There was an error"});
              console.log(err)
          })
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {error, loading, results} = this.state;
    const formItemLayout = {
      wrapperCol: { span: 14, offset: 6 },
    };
    return (
        <div>
            {error && <span> There was an error</span>}

            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item>
                  <h1 className="ant-form-text">Filter:</h1>
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("searchTitle")(
                    <Search

                     placeholder="input search text"
                     onSearch={value => console.log(value)}

                    />)}
                </Form.Item>
            </Form>
            {loading ? (
                <div>
                    <Spin indicator={antIcon}/>
                </div> ) : ( <Results users={results}/>
                )}
        </div>
    );
  }
}

const WrappedFilterForm = Form.create({ name: 'validate_other' })(FilterForm);

export default WrappedFilterForm;