import React from "react";

const Token = ({ poolDetails }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <div className="section__title">
              <h2> Token</h2>
              <p>MECOIN is a next-generation meme-powered cryptocurrency with real-world utility. Our ecosystem offers unique features such as NFTs, a secure wallet, community airdrops, play-to-earn gaming, and a decentralized swap platform..</p>
            </div>
          </div>
        </div>
        <div className="row row--relative">
          <div className="col-12">
            <div className="invest invest--big">
              <h2 className="invest__title"> Mecoin Stats</h2>
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="invest__rate-wrap">
                    <div className="invest__rate">
                      <span>Total Supply</span>
                      <p>
                        {poolDetails?.depositToken.totalSupply}{" "}
                        {poolDetails?.depositToken.symbol}
                      </p>
                    </div>
                    <div className="invest__graph">
                      <img src="img/graph/graph2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 offset-lg-1">
                  <div className="invest__rate-wrap">
                    <div className="invest__rate">
                      <span> Total Stake</span>

                      <p className="green">
                        {poolDetails?.depositToken.contractTokenBalance.slice(
                          0,
                          10
                        )}{" "}
                        {poolDetails?.depositToken.symbol}
                      </p>
                    </div>
                    <div className="invest__graph">
                      <img src="img/graph/graph1.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="invest__rate-wrap">
                    <div className="invest__rate">
                      <span>Max Supply</span>
                      <p className="red">
                        {poolDetails?.rewardToken.totalSupply}{" "}
                        {poolDetails?.rewardToken.symbol}
                      </p>
                    </div>
                    <div className="invest__graph">
                      <img src="img/graph/graph3.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 offset-lg-1">
                  <div className="invest__rate-wrap">
                    <div className="invest__rate">
                      <span>ME Price</span>
                      <p className="green">1 mecoin = 0.002POL</p>
                    </div>
                    <div className="invest__graph">
                      <img src="img/graph/graph4.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="invest__info">
                Blockchain Development Course + Pro NFT Marketplace Project 40+
                Hours "Hands-On Course" Climb out of tutorial hell and build an
                interactive Multi Media NFT Marketplace + Blockchain Mastery
                amaze recruiters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
