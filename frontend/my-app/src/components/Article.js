import React from 'react';
import { List, Avatar, Icon, Input } from 'antd';

const { Search } = Input;



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);



const Articles  = (props) => {

    return(

   <div>
  <List

    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}

    renderItem={item => (
      <List.Item
        key={item.firstname}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          title={<a href={`asd/${item.id}`}>{item.firstname}</a>}
          description={item.surname}
        />
      </List.Item>
    )}
  />
   </div>
    )
};

export default Articles;