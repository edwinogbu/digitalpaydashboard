import React from 'react';

const WelcomeHeader = () => {
    return (
        <div className="welcome-header">
            <div className="row">
                <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
                    <div className="wel-come-name">
                        <h4>Welcome, <span>Soeng Souy</span></h4>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-7">
                    <div className="welcome-wallet">
                        <div className="wallet-list">
                            <span>Wallet: 56, 444658</span>
                        </div>
                        <div className="bookingrange btn-book ms-2 me-2">
                            <img src="assets/img/icon/calendar-icon.svg" alt="" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DashWidget = () => {
    return (
        <div className="dash-widget-blk">
              <ul>
                <li>
                  <div className="premium-box box-blue">
                    <img src="assets/img/icon/dash-icon-01.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-blue">
                    <h4>BTC</h4>
                    <h3>$ 76,5498</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-01.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-pink">
                    <img src="assets/img/icon/dash-icon-02.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-pink">
                    <h4>Ethereum</h4>
                    <h3>$ 11,723.40</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-02.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-green">
                    <img src="assets/img/icon/dash-icon-03.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-green">
                    <h4>Ripple </h4>
                    <h3>$ 1,070.39</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-03.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-orange">
                    <img src="assets/img/icon/dash-icon-04.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-orange">
                    <h4>Cardeno </h4>
                    <h3>$ 10,143,40</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-04.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-light">
                    <img src="assets/img/icon/dash-icon-05.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-light">
                    <h4>NEO </h4>
                    <h3>$ 46,5198</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-05.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-dark">
                    <img src="assets/img/icon/dash-icon-06.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-dark">
                    <h4>Stellar </h4>
                    <h3>$ 76,598</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-06.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-sky">
                    <img src="assets/img/icon/dash-icon-07.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-sky">
                    <h4>EOS </h4>
                    <h3>$ 1,070.39</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-07.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="premium-box box-litcoin">
                    <img src="assets/img/icon/dash-icon-08.svg" alt="" />
                  </div>
                  <div className="premium-name-blk title-litcoin">
                    <h4>Litecoin </h4>
                    <h3>$ 11,723.40</h3>
                  </div>
                  <div className="premium-img">
                    <img src="assets/img/wave-08.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
    );
};

const MoneyFlow = () => {
    return (
        <div className="border-watch">
            <div className="row">
                <div className="col d-flex align-items-center">
                    <div className="watch-head flow-time-blk">
                        <h4>Money Flow</h4>
                        <div className="flow-times">
                            <h5>Last:</h5>
                            <span className="flow-blue">0.03242000</span>
                        </div>
                        <div className="flow-times">
                            <h5>24High:</h5>
                            <span className="flow-green">0.03242000</span>
                        </div>
                        <div className="flow-times">
                            <h5>24V:</h5>
                            <span className="flow-light-blue">0.03242000</span>
                        </div>
                        <div className="flow-times">
                            <h5>24Low:</h5>
                            <span className="flow-red">0.03242000</span>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <ul className="time-variant">
                        {/* Your list items */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Chart = () => {
    return <div id="chartdiv"></div>;
};

const MarketCapitalizations = () => {
    return (
        <div className="buy-form mb-0">
            <div className="border-watch">
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <div className="watch-head">
                            <h4>Market Capitalizations</h4>
                        </div>
                    </div>
                    <div className="col-auto d-flex">
                        <div className="bookingrange btn-book me-2">
                            <span></span>
                        </div>
                        <div className="down-range">
                            <a href="javascript:;"><img src="assets/img/icon/down-icon.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="datatable table  custom-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Currency</th>
                            <th style={{ minWidth: '110px' }}>Price</th>
                            <th style={{ minWidth: '110px' }}>Market Cap</th>
                            <th style={{ minWidth: '110px' }}>Volume</th>
                            <th style={{ minWidth: '110px' }}>Circulating Supply</th>
                            <th style={{ minWidth: '90px' }}>Change(24h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Your table rows */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const WelcomeDashboard = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <WelcomeHeader />
                    <DashWidget />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="buy-form">
                        <MoneyFlow />
                        <Chart />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <MarketCapitalizations />
                </div>
            </div>
        </div>
    );
};

export default WelcomeDashboard;
