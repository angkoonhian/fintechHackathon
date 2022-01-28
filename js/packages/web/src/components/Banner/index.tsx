import React from 'react';
import { useEffect } from 'react';
export const Banner = (props: {
  src: string;
  useBannerBg: boolean;
  headingText: string;
  subHeadingText: string;
  actionComponent?: JSX.Element;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const gradient = document.getElementById('bg-gradient');
    if (mainBg && props.useBannerBg) {
      mainBg.style.backgroundImage = `url(${props.src})`;
      mainBg.style.display = 'inline-block';
      if (gradient) {
        gradient.style.display = 'inline-block';
      }
    }

    return () => {
      const mainBg = document.getElementById('main-bg');
      const gradient = document.getElementById('bg-gradient');
      if (mainBg && props.useBannerBg) {
        mainBg.style.backgroundImage = '';
        mainBg.style.display = 'none';
      }
      if (gradient) gradient.style.display = 'none';
    };
  }, [props.src, props.useBannerBg]);

  return (
    <>
      <div id="mobile-banner">
        <img className="banner-img" src={props.src} />
        <div className="banner-content">
          <div id={'main-heading'}>{props.headingText}</div>
          <div id={'sub-heading'}>{props.subHeadingText}</div>
          {props.actionComponent}
        </div>
      </div>
      <div
        id={'current-banner'}
      >
        <span id={'gradient-banner'}></span>
        <div id="banner-inner">
          <div id={'message-container'}>
            <div id={'main-heading'}>{props.headingText}</div>
            <div id={'sub-heading'}>{props.subHeadingText}</div>
            {props.actionComponent}
          </div>
          {props.children}
          <div className="powered-by">
            <span>
              POWERED BY <b>SB2J</b>
            </span>
          </div>
        </div>
      </div>
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span style={{fontSize: 50, marginTop: 90, marginBottom: 30}}>
          About us
        </span>
        <div style={{marginTop: 30}}/>
        <span style={{fontSize: 20, marginBottom: 30}}>First ever platform to offer NFT ETFs. Buy and sell parts of popular NFTs with us today! </span>
        <div style={{flex: 1, flexDirection: 'row', marginTop: 60}}>
          <img src={'/Group 18.png'} style={{width: '50%', float:'left'}}>
          </img>
          <div style={{width: '50%', float:'right', paddingLeft: 30, marginTop: 300}}>
            <span style={{fontSize: 40, marginTop: 30, marginBottom: 30}}>Get Popular NFT at cheaper rates</span>
            <div style={{marginTop: 30}} />
            <span style={{fontSize: 20, marginTop: 30, marginBottom: 30}}>Through the use of ETFs, we create a collection-ETF called exchange traded NFT (ETNFT) where it would be significantly cheaper than buying the whole NFT itself. Similar to other popular ETFs availalbe in the stock market, this brings in the idea of stability into the NFT market. This allows you to be able to own a fraction of NFTs through the use of fractional NFTs.</span>
            
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{fontSize: 40, marginTop: 90, marginBottom: 30}}>ETNFTs</span>
          <div/>
          <span style={{fontSize: 20, marginTop: 30, marginBottom: 30}}>Explore the ETNFTs in the marketplace!</span>
        </div>
      </div>
    </>
  );
};
