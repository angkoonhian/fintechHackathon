import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, CardProps } from 'antd';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';

const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
  Own = '4',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);

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
    }
  ]
  const artName = ["Overflowing Blue ETF", "Squiggle ETF", "Yee ETF"]
  const imageArray = [
    '/collect.png',
    '/Group 28.png',
    '/Group 29.png'
  ]

  const authorNames = [
    "@Johnny", "@Alex", "@Timo"
  ]
  const priceBid= [
    "0.005ETH", "0.003ETH", "0.005ETH"
  ]
  return (
    <>
      <Banner
        src="/main-banner.svg"
        headingText="The amazing world of SB2J and ETNFTs."
        subHeadingText="Buy exclusive ETNFTs."
        actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}
        useBannerBg
      />
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Live
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
                {hasResaleAuctions && (
                  <TabPane
                    tab="Secondary Marketplace"
                    key={LiveAuctionViewState.Resale}
                  ></TabPane>
                )}
                <TabPane tab="Ended" key={LiveAuctionViewState.Ended}></TabPane>
                {connected && (
                  <TabPane
                    tab="Participated"
                    key={LiveAuctionViewState.Participated}
                  ></TabPane>
                )}
                {connected && (
                  <TabPane
                    tab="My Live Auctions"
                    key={LiveAuctionViewState.Own}
                  ></TabPane>
                )}
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {/* {!isLoading &&
                  [...Array(10)].map((_, idx) => <CardLoader key={idx} />)} */}
                {
                  auctionDummy.map((auction, index) => (
                    <Link
                      key={auction.auction.pubkey}
                      to={`/about/1`}
                    >
                      {/* <AuctionRenderCard auctionView={auction} /> */}
                      <Card hoverable={true} className={`auction-render-card`} bordered={false}>
                        <div className={'card-art-info'}>
                          <div className="auction-gray-wrapper">
                            <div className={'card-artist-info'}>
                              <span>{authorNames[index]}</span>
                            </div>
                            <div className={'art-content-wrapper'}>
                              <img src={imageArray[index]} style={{width: '100%', height: '100%'}}/>
                            </div>
                            <div className={'art-name'}>{artName[index]}</div>
                            <div className="auction-info-container">
                              <div className={'info-message'}>ENDING IN</div>
                              <span>23:12:01</span>
                            </div>
                          </div>
                        </div>
                        <div className="card-bid-info">
                          {/* <span className={'text-uppercase info-message'}>{status}</span> */}
                          <span>{priceBid[index]}</span>
                        </div>
                      </Card>
                    </Link>
                  ))}
              </div>
            </Row>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
