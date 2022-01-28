import React from 'react';
import { Layout,Row, Col, Card, Button } from 'antd';
import { StaticPage } from '../../components/StaticPage';
import { data } from './staticData';

export const StaticPageView = () => {
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <div style={{height: '500px'}}>
        <div style={{float:'left', width: '35%'}}>
        <Card  style={{}} cover={<img src={'/bg.png'}/>}>
          <span>John Wick</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Followed</Button>
        </Card>
        </div>
        <div style={{float:'right', width: '65%'}}>
        <Card title="Default size card" style={{}}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        </div>
      </div>
    </Layout>
  );
};
