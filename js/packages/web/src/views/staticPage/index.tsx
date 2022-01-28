import React, { useEffect, useMemo, useState } from 'react';
import { Layout,Row, Col, Card, Button, Avatar, Modal, Input  } from 'antd';
import { StaticPage } from '../../components/StaticPage';
import { data } from './staticData';
import { Link, useParams, useHistory } from 'react-router-dom';

const {Meta} = Card
export const StaticPageView = () => {

  const auctionDummy = [
    {
      auction: {
        pubkey: "1"
      }
    },
    {
      auction: {
        pubkey: "2"
      }
    },
    {
      auction: {
        pubkey: "3"
      }
    },
    {
      auction: {
        pubkey: "4"
      }
    },
    {
      auction: {
        pubkey: "5"
      }
    },
    {
      auction: {
        pubkey: "6"
      }
    },
    {
      auction: {
        pubkey: "7"
      }
    },
    {
      auction: {
        pubkey: "8"
      }
    },
    {
      auction: {
        pubkey: "9"
      }
    },
    {
      auction: {
        pubkey: "10"
      }
    }
  ]
  const artName = ["Overflowing Blue", "Squiggle", "Yee", "Yellow Pointing", "Red Bridge"]
  const imageArray = [
    '/collection2.png',
    '/collection3.png',
    '/collection4.png',
    '/collection5.png',
    '/collection6.png',
    '/collection7.png',
    '/collection7-1.png',
    '/collection8.png',
    '/collection9.png',
    '/Rectangle 23.png',
  ]

  const authorNames = [
    "@Johnny", "@Alex", "@Timo"
  ]
  const priceBid= [
    "1ETH", "1ETH", "1ETH"
  ]
  const { val } = useParams<{ val: string }>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const history = useHistory();

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/about/1.3")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log("----------> what is val: ", val)
  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <div style={{height: '500px'}}>
        <div style={{float:'left', width: '35%', }}>
        <Card  style={{height: '500px'}} cover={<img src={'/bg.png'}/>}>
          <div className="auction-gray-wrapper">

            <Meta
              avatar={<Avatar size="large" src="https://joeschmoe.io/api/v1/random" />}
              title="John Wick"
                
            />
            <div>
              <span style={{color: 'white', fontSize: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div>
              <Button style={{marginTop: '15px', marginLeft: '15px'}}>Followed</Button>
            </div>
          </div>
        </Card>
        </div>
        <div style={{float:'right', width: '65%'}}>
        <Card style={{height: '500px', backgroundColor: '#671AE4', padding: '15px'}}>
          <div>
            <span style={{color: 'white', fontSize: '40px'}}>Overflowing Blue ETF</span>
          </div>
          <div>
            <span style={{color: 'white', fontSize: '20px'}}>Showcasing famous landscapes and artworks from my village. This place holds beautiful memories of my childhood and I can’t wait to share it with the world!</span>
          </div>
          <div style={{position: 'absolute', bottom: 30, left: '0', paddingLeft: '15px'}}>
            <div>
              <span style={{color: 'lightgray', fontSize: '30px'}}>Vacancies Left</span>
            </div>
            <div>
              <span style={{ fontSize: '25px'}}>{val === '1.3' ? '2/10' : '3/10'}</span> 
            </div>
            <div>
              <span style={{color: 'lightgray', fontSize: '30px', marginTop: '10px'}}>Current Price</span>
            </div>
            <div>
              <span style={{ fontSize: '25px', marginBottom: '10px'}}>{val === '1' ? '0.1 ETH' : '0.11ETH'}</span>
            </div>
          </div>
          <div style={{position: 'absolute', bottom: 30, right: 20, paddingRight: '35px'}}>
            <Button onClick={()=>showModal()}>
              Buy now
            </Button>
          </div>
          <Modal title="About to purchase Overflowing Blue ETF" visible={isModalVisible} onOk={()=>handleOk()} onCancel={()=>handleCancel()}>
            <span>You are about to purchase a spot in the Overflowing Blue ETF, please click Okay to proceed.</span>
          </Modal>
        </Card>
        </div>
      </div>
      <div style={{ paddingTop: 30, paddingBottom: 30}}>
        <span style={{color: 'white', fontSize: '40px'}}>View the NFTs in this ETF</span>
        
      </div>
      <div style={{paddingBottom: 30}}>
        <span>Own a fraction of these popular artworks!</span>
      </div>
        <Row>
          <div className="artwork-grid">
            {
              auctionDummy.map((auction, index) => (
                <Link
                  key={auction.auction.pubkey}
                  to={`/auction/${auction.auction.pubkey}`}
                >
                  {/* <AuctionRenderCard auctionView={auction} /> */}
                  <Card hoverable={true} className={`auction-render-card`} bordered={false}>
                    <div className={'card-art-info'}>
                      <div className="auction-gray-wrapper">
                        <div className={'card-artist-info'}>
                          <span>{authorNames[index % 3]}</span>
                        </div>
                        <div className={'art-content-wrapper'}>
                          <img src={imageArray[index]} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className={'art-name'}>{artName[index % 5]}</div>
                        <div className="auction-info-container">
                          <div className={'info-message'}>ENDING IN</div>
                          <span>23:12:01</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-bid-info">
                      {/* <span className={'text-uppercase info-message'}>{status}</span> */}
                      <span>{priceBid[index % 3]}</span>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </Row>
    </Layout>
  );
};
