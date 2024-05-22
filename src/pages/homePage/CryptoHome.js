import React from 'react'
// import './styles.css'


function CryptoHome() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Digital PayOut - Buy &amp; Sell Digital Assets In The Digital PayOut
    </title>
    {/* Bootstrap CSS */}
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    {/* Bootstrap JS and jQuery */}
    {/* Custom CSS */}
    <link rel="stylesheet" href="./styles.css" />
    {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\n.carousel-text {\n \n  background: rgba(0, 0, 0, 0.5);\n  padding: 50px;\n  border-radius: 10px;\n}\n\n.testimonial-content {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n}\n\n.carousel-inner {\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-item {\n  width: 100%;\n}\n\n.carousel-item img {\n  width: 100%;\n}\n\n\n\n.hero {\n  position: relative;\n  overflow: hidden;\n}\n\n.carousel-item {\n  height: 100vh; /* Adjust this to fit your design */\n  background-size: cover;\n  background-position: center;\n}\n\n.carousel-inner {\n  position: relative;\n}\n\n.hero-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n\n.caption-left {\n      position: absolute;\n  top: -70%;\n  left: -70%;\n  right: -70%;\n  bottom: -70;\n  transform: translate(-20%, -10%);\n  text-align: left;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 50px;\n  border-radius: 10px;\n  width:300px;\n} \n/* .carousel-text {\n \n background: rgba(0, 0, 0, 0.5);\n padding: 50px;\n border-radius: 10px;\n} */\n\n/* styles.css */\n.testimonial-carousel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.testimonial-card {\n    background-color: #f9f9f9;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n.testimonial-card img {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    margin-bottom: 10px;\n}\n\n.testimonial-card h3 {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n}\n\n.testimonial-card p {\n    font-size: 0.9rem;\n    color: #555;\n}\n\n\n\n  "
      }}
    />
    {/* 
      - #HEADER
    */}
    <header className="header" data-header="">
      <div className="container">
        <a href="#" className="logo">
          <img
            src="./assets/images/logo.svg"
            width={32}
            height={32}
            alt="Cryptex logo"
          />
          Digital PayOut
        </a>
        <nav className="navbar" data-navbar="">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link active" data-nav-link="">
                Homepage
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Buy Crypto
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Markets
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Sell Crypto
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                BITUSDT
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler=""
        >
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button>
        <a href="login2.html" className="btn btn-outline">
          Account
        </a>
        <a href="register2.html" className="btn btn-outline">
          Register
        </a>
        {/* <a href="login.html" class="btn btn-outline">Wallet</a> */}
      </div>
    </header>
    <main>
      <article>
        <section className="section hero " aria-label="hero" data-section="">
          <div className="container-fluid section-hero">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage: 'url("./assets/images/testimonial/crt4.jpg")'
                  }}
                >
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">Bryan Adams</h1>
                    <p className="hero-text text-light caption-left">
                      Digital PayOut is the easiest, safest, and fastest way to
                      buy &amp; sell crypto asset exchange.
                    </p>
                    <a href="#" className="btn btn-primary mt-5">
                      Get started now
                    </a>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage:
                      'url("./assets/images/testimonial/cert2.jpg")'
                  }}
                >
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">David Johnson</h1>
                    <p className="hero-text text-white font-weight-bold caption-left">
                      Thanks to Digital PayOut,
                      <br /> I've been able to diversify my investment portfolio
                      with ease.
                      <br /> Their platform is top-notch!
                    </p>
                    <a href="#" className="btn btn-primary mt-5">
                      Explore
                    </a>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: 'url("./assets/images/testimonial/crt6.jpg")'
                  }}
                >
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">Jan Johnson</h1>
                    <p className="hero-text text-white caption-left">
                      Thanks to Digital PayOut,
                      <br /> I've been able to diversify my investment portfolio
                      with ease.
                      <br /> Their platform is top-notch!
                    </p>
                    <a href="#" className="btn btn-primary">
                      Discover
                    </a>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="section trend"
          aria-label="crypto trend"
          data-section=""
        >
          <div className="container">
            <div
              id="cryptoCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <div class="carousel-inner"> */}
              <div className="trend-tab">
                {/* <ul class="tab-nav text-center" style="border: 3px solid white"> */}
                {/* <ul class="tab-nav" style="display: flex; justify-content: center; align-items: center;"> */}
                <ul
                  className="tab-nav"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "3px solid white",
                    borderRadius: 50
                  }}
                >
                  <li className="mx-5" style={{ display: "inline-block" }}>
                    <button className="tab-btn text-capitalize">
                      Digital Payout Crypto Company
                    </button>
                  </li>
                  <li style={{ display: "inline-block" }}>
                    <h1 className="card-title text-center text-white">
                      Clients Testimonials
                    </h1>
                  </li>
                  <li className="mx-5">
                    {/* Carousel controls */}
                    <a
                      className="carousel-control-prev"
                      href="#cryptoCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon text-white"
                        aria-hidden="true"
                      />
                      Previous
                      <span className="sr-only text-white">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#cryptoCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      Next
                      <span className="sr-only text-white">Next</span>
                    </a>
                  </li>
                </ul>
                {/* <div id="cryptoCarousel" class="carousel slide" data-ride="carousel">   */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <ul className="tab-content">
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/crt4.jpg"
                              width={250}
                              height={250}
                              alt="bitcoin logo"
                            />
                            <a href="#" className="card-title">
                              Bitcoin <span className="span">BTC/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="46168.95">
                            USD 46,168.95
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge red">
                              The customer support at Digital Payout is excellent.
                              <br />
                              They helped me navigate complex transactions.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card active">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/cert2.jpg"
                              width={250}
                              height={250}
                              alt="ethereum logo"
                            />
                            <a href="#" className="card-title">
                              Jane Smith <span className="span">ETH/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="3480.04">
                            USD 3,480.04
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge green">
                              I've been using Digital Payout for years. <br />
                              Their cryptocurrency exchange platform is top-notch!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/crt6.jpg"
                              width={250}
                              height={250}
                              alt="tether logo"
                            />
                            <a href="#" className="card-title">
                              Tether <span className="span">USDT/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value={1.0}>
                            USD 1.00
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge red">
                              Digital Payout's low fees and fast execution
                              <br />
                              make it my go-to platform for crypto trading.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/crto1.jpg"
                              width={250}
                              height={250}
                              alt="bnb logo"
                            />
                            <a href="#" className="card-title">
                              BNB <span className="span">BNB/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="443.56">
                            USD 443.56
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge red">
                              Digital Payout's security features give me peace of
                              mind.
                              <br />
                              My assets are safe!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul className="tab-content">
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/cer5.jpg"
                              width={250}
                              height={250}
                              alt="bitcoin logo"
                            />
                            <a href="#" className="card-title">
                              Bitcoin <span className="span">BTC/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="46168.95">
                            USD 46,168.95
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge red">
                              The customer support at Digital Payout is excellent.
                              <br />
                              They helped me navigate complex transactions.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card active">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/cert2.jpg"
                              width={250}
                              height={250}
                              alt="ethereum logo"
                            />
                            <a href="#" className="card-title">
                              Esther <span className="span">ETH/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="3480.04">
                            USD 3,480.04
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge green">
                              I've been using Digital Payout for years.
                              <br />
                              Their cryptocurrency exchange platform is top-notch!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/crt4.jpg"
                              width={250}
                              height={250}
                              alt="tether logo"
                            />
                            <a href="#" className="card-title">
                              Theresa Paul
                            </a>
                          </div>
                          <data className="card-value" value={1.0}>
                            USD 1.00
                          </data>
                          <div className="card-analytics">
                            <span className="span">USDT/USD</span>
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge  text-primary">
                              Digital Payout's low fees and fast execution <br />
                              make it my go-to platform for crypto trading.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img
                              src="./assets/images/testimonial/crt6.jpg"
                              width={250}
                              height={250}
                              alt="bnb logo"
                            />
                            <a href="#" className="card-title">
                              Barnard Joe<span className="span">BNB/USD</span>
                            </a>
                          </div>
                          <data className="card-value" value="443.56">
                            USD 443.56
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value="36641.20">
                              36,641.20
                            </data>
                            <div className="badge  text-secondary">
                              Digital Payout's security features give me peace of
                              mind.
                              <br />
                              My assets are safe!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>
        {/* <figure class="hero-banner">
        <img src="./assets/images/hero-banner.png" width="570" height="448" alt="hero banner" class="w-100">
      </figure> */}
        <section
          className="section trend"
          aria-label="crypto trend"
          data-section=""
        >
          <div className="container">
            <div className="trend-tab">
              <ul className="tab-nav">
                <li>
                  <button className="tab-btn active">Crypto</button>
                </li>
                <li>
                  <button className="tab-btn">DeFi</button>
                </li>
                <li>
                  <button className="tab-btn">BSC</button>
                </li>
                <li>
                  <button className="tab-btn">NFT</button>
                </li>
                <li>
                  <button className="tab-btn">Metaverse</button>
                </li>
                <li>
                  <button className="tab-btn">Polkadot</button>
                </li>
                <li>
                  <button className="tab-btn">Solana</button>
                </li>
                <li>
                  <button className="tab-btn">Opensea</button>
                </li>
                <li>
                  <button className="tab-btn">Makersplace</button>
                </li>
              </ul>
              <ul className="tab-content">
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/coin-1.svg"
                        width={24}
                        height={24}
                        alt="bitcoin logo"
                      />
                      <a href="#" className="card-title">
                        Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="46168.95">
                      USD 46,168.95
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">-0.79%</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card active">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/coin-2.svg"
                        width={24}
                        height={24}
                        alt="ethereum logo"
                      />
                      <a href="#" className="card-title">
                        Ethereum <span className="span">ETH/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="3480.04">
                      USD 3,480.04
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge green">+10.55%</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/coin-3.svg"
                        width={24}
                        height={24}
                        alt="tether logo"
                      />
                      <a href="#" className="card-title">
                        Tether <span className="span">USDT/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value={1.0}>
                      USD 1.00
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">-0.01%</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/coin-4.svg"
                        width={24}
                        height={24}
                        alt="bnb logo"
                      />
                      <a href="#" className="card-title">
                        BNB <span className="span">BNB/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="443.56">
                      USD 443.56
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">-1.24%</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*- #MARKET*/}
        {/* <section class="section market" aria-label="market update" data-section style="background-image: url('./assets/images/fly-coins.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"> */}
        <section
          className="section market"
          aria-label="market update"
          data-section=""
          style={{
            backgroundColor: "#804080",
            backgroundImage: 'url("/assets/images/fly-coins.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <section class="section market" aria-label="market update" data-section> */}
          <div
            className="container "
            style={{
              backgroundColor: "#804080",
              backgroundImage: 'url("./assets/images/fly-coins.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="title-wrapper">
              <h2 className="h2 section-title">Digital PayOut Market Update</h2>
              <a href="#" className="btn-link">
                See All Coins
              </a>
            </div>
            <div
              className="market-tab"
              style={{
                backgroundImage: 'url("./assets/images/fly-coins.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <ul className="tab-nav">
                <li>
                  <button className="tab-btn active">View All</button>
                </li>
                <li>
                  <button className="tab-btn">Metaverse</button>
                </li>
                <li>
                  <button className="tab-btn">Entertainment</button>
                </li>
                <li>
                  <button className="tab-btn">Energy</button>
                </li>
                <li>
                  <button className="tab-btn">NFT</button>
                </li>
                <li>
                  <button className="tab-btn">Gaming</button>
                </li>
                <li>
                  <button className="tab-btn">Music</button>
                </li>
              </ul>
              {/* <figure class="hero-banner"> */}
              <table
                className="market-table"
                style={{
                  backgroundImage: 'url("./assets/images/fly-coins.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 57,
                  height: 448
                }}
              >
                <thead
                  className="table-head"
                  style={{ backgroundColor: "#1815c5" }}
                >
                  <tr className="table-row table-title">
                    <th className="table-heading" />
                    <th className="table-heading" scope="col">
                      #
                    </th>
                    <th className="table-heading" scope="col">
                      Name
                    </th>
                    <th className="table-heading" scope="col">
                      Last Price
                    </th>
                    <th className="table-heading" scope="col">
                      24h %
                    </th>
                    <th className="table-heading" scope="col">
                      Market Cap
                    </th>
                    <th className="table-heading" scope="col">
                      Last 7 Days
                    </th>
                    <th className="table-heading" />
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      1
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-1.svg"
                          width={20}
                          height={20}
                          alt="Bitcoin logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Bitcoin <span className="span">BTC</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update green">+1.45%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-1.svg"
                        width={100}
                        height={40}
                        alt="profit chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      2
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-2.svg"
                          width={20}
                          height={20}
                          alt="Ethereum logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Ethereum <span className="span">ETH</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update red">-5.12%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-2.svg"
                        width={100}
                        height={40}
                        alt="loss chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      3
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-3.svg"
                          width={20}
                          height={20}
                          alt="Tether logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Tether <span className="span">USDT/USD</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update green">+1.45%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-1.svg"
                        width={100}
                        height={40}
                        alt="profit chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      4
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-4.svg"
                          width={20}
                          height={20}
                          alt="BNB logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            BNB <span className="span">BNB/USD</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update red">-3.75%%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-2.svg"
                        width={100}
                        height={40}
                        alt="loss chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      5
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-5.svg"
                          width={20}
                          height={20}
                          alt="Solana logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Solana <span className="span">SOL</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update green">+1.45%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-1.svg"
                        width={100}
                        height={40}
                        alt="profit chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      6
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-6.svg"
                          width={20}
                          height={20}
                          alt="XRP logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            XRP <span className="span">XRP</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update red">-2.22%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-2.svg"
                        width={100}
                        height={40}
                        alt="loss chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      7
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-7.svg"
                          width={20}
                          height={20}
                          alt="Cardano logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Cardano <span className="span">ADA</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update green">+0.8%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-1.svg"
                        width={100}
                        height={40}
                        alt="profit chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-data">
                      <button
                        className="add-to-fav"
                        aria-label="Add to favourite"
                        data-add-to-fav=""
                      >
                        <ion-icon
                          name="star-outline"
                          aria-hidden="true"
                          className="icon-outline"
                        />
                        <ion-icon
                          name="star"
                          aria-hidden="true"
                          className="icon-fill"
                        />
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">
                      8
                    </th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img
                          src="./assets/images/coin-8.svg"
                          width={20}
                          height={20}
                          alt="Avalanche logo"
                          className="img"
                        />
                        <h3>
                          <a href="#" className="coin-name">
                            Avalanche <span className="span">AVAX</span>
                          </a>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">$56,623.54</td>
                    <td className="table-data last-update green">+1.41%</td>
                    <td className="table-data market-cap">$880,423,640,582</td>
                    <td className="table-data">
                      <img
                        src="./assets/images/chart-1.svg"
                        width={100}
                        height={40}
                        alt="profit chart"
                        className="chart"
                      />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* - #INSTRUCTION*/}
        <section
          className="section instruction"
          aria-label="instruction"
          data-section=""
        >
          <div className="container">
            <h2 className="h2 section-title">How It Works</h2>
            <p className="section-text">
              Digital Payout makes buying and selling digital assets incredibly
              easy for me. I highly recommend it to anyone looking to get into
              crypto.
            </p>
            <ul className="instruction-list">
              <li>
                <div className="instruction-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/instruction-1.png"
                      width={96}
                      height={96}
                      loading="lazy"
                      alt="Step 1"
                      className="img"
                    />
                  </figure>
                  <p className="card-subtitle">Step 1</p>
                  <h3 className="h3 card-title">
                    Download the Digital Payout App
                  </h3>
                  <p className="card-text">
                    Download the Digital Payout app from your app store to get
                    started.
                  </p>
                </div>
              </li>
              <li>
                <div className="instruction-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/instruction-2.png"
                      width={96}
                      height={96}
                      loading="lazy"
                      alt="Step 2"
                      className="img"
                    />
                  </figure>
                  <p className="card-subtitle">Step 2</p>
                  <h3 className="h3 card-title">Connect Your Digital Wallet</h3>
                  <p className="card-text">
                    Connect your digital wallet securely to your Digital Payout
                    account.
                  </p>
                </div>
              </li>
              <li>
                <div className="instruction-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/instruction-3.png"
                      width={96}
                      height={96}
                      loading="lazy"
                      alt="Step 3"
                      className="img"
                    />
                  </figure>
                  <p className="card-subtitle">Step 3</p>
                  <h3 className="h3 card-title">Start Trading</h3>
                  <p className="card-text">
                    Begin trading cryptocurrencies with ease using Digital
                    Payout's intuitive platform.
                  </p>
                </div>
              </li>
              <li>
                <div className="instruction-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/instruction-4.png"
                      width={96}
                      height={96}
                      loading="lazy"
                      alt="Step 4"
                      className="img"
                    />
                  </figure>
                  <p className="card-subtitle">Step 4</p>
                  <h3 className="h3 card-title">Earn Money</h3>
                  <p className="card-text">
                    Explore various investment opportunities and earn profits
                    through Digital Payout.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #ABOUT
  */}
        <section className="section about" aria-label="about" data-section="">
          <div className="container">
            <figure className="about-banner">
              <img
                src="./assets/images/about-banner.png"
                width={748}
                height={436}
                loading="lazy"
                alt="about banner"
                className="w-100"
              />
            </figure>
            <div className="about-content">
              <h2 className="h2 section-title">What Is Digital Payout</h2>
              <p className="section-text">
                Explore a variety of trading options on Digital Payout. You can
                engage in various types of coin transactions such as Spot Trade,
                Futures Trade, P2P, Staking, Mining, and margin trading.
              </p>
              <ul className="section-list">
                <li className="section-item">
                  <div className="title-wrapper">
                    <ion-icon name="checkmark-circle" aria-hidden="true" />
                    <h3 className="h3 list-title">
                      View real-time cryptocurrency prices
                    </h3>
                  </div>
                  <p className="item-text">
                    Stay updated with real-time cryptocurrency prices and market
                    trends on Digital Payout.
                  </p>
                </li>
                <li className="section-item">
                  <div className="title-wrapper">
                    <ion-icon name="checkmark-circle" aria-hidden="true" />
                    <h3 className="h3 list-title">
                      Buy and sell BTC, ETH, XRP, and more
                    </h3>
                  </div>
                  <p className="item-text">
                    Easily buy and sell a variety of cryptocurrencies including
                    BTC, ETH, XRP, and many others on Digital Payout.
                  </p>
                </li>
              </ul>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </section>
        {/* 
    - #APP
  */}
        <section className="section app" aria-label="app" data-section="">
          <div className="container">
            <div className="app-content">
              <h2 className="h2 section-title">
                Free Your Money &amp; Invest With Confidence
              </h2>
              <p className="section-text">
                With Digital Payout, you can be sure your trading skills are
                matched
              </p>
              <ul className="section-list">
                <li className="section-item">
                  <div className="title-wrapper">
                    <ion-icon name="checkmark-circle" aria-hidden="true" />
                    <h3 className="h3 item-title">
                      Buy, Sell, And Trade On The Go
                    </h3>
                  </div>
                  <p className="item-text">
                    Manage Your Holdings From Your Mobile Device
                  </p>
                </li>
                <li className="section-item">
                  <div className="title-wrapper">
                    <ion-icon name="checkmark-circle" aria-hidden="true" />
                    <h3 className="h3 item-title">Take Control Of Your Wealth</h3>
                  </div>
                  <p className="item-text">
                    Rest Assured You (And Only You) Have Access To Your Funds
                  </p>
                </li>
              </ul>
              <div className="app-wrapper">
                <a href="#">
                  <img
                    src="./assets/images/googleplay.png"
                    width={135}
                    height={40}
                    loading="lazy"
                    alt="get it on google play"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/images/appstore.png"
                    width={120}
                    height={40}
                    loading="lazy"
                    alt="download on the app store"
                  />
                </a>
              </div>
            </div>
            <div className="app-banner">
              <img
                src="./assets/images/app-banner.png"
                width={618}
                height={526}
                loading="lazy"
                alt="app banner"
                className="w-100"
              />
              <span className="span">Scan To Download</span>
            </div>
          </div>
        </section>
      </article>
    </main>
    {/* 
      - #FOOTER
    */}
    <footer
      className="footer"
      style={{
        backgroundImage: 'url("./assets/images/cryptocurrency.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="footer-top" data-section="">
        <div
          className="container"
          style={{
            backgroundImage: 'url("./assets/images/fly-coins.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff"
          }}
        >
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="./assets/images/logo.svg"
                width={50}
                height={50}
                alt="Digital Payout logo"
              />
              Digital Payout
            </a>
            <h2 className="footer-title">Let's talk! 🤙</h2>
            <a href="tel:+123456789101" className="footer-contact-link">
              +12 345 678 9101
            </a>
            <a
              href="mailto:hello.digitalpayout@gmail.com"
              className="footer-contact-link"
            >
              hello.digitalpayout@gmail.com
            </a>
            <address className="footer-contact-link">
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </address>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Products</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Spot
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Inverse Perpetual
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                USDT Perpetual
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Exchange
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Launchpad
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Digital Wallet
              </a>
            </li>
          </ul>
          <ul className="footer-list" style={{ color: "#fff" }}>
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Buy Crypto
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Markets
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Trading Fee
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Referral Program
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                API
              </a>
            </li>
          </ul>
          <ul className="footer-list" style={{ color: "#fff" }}>
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Digital Payout Academy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                User Feedback
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Submit a request
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                API Documentation
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Trading Rules
              </a>
            </li>
          </ul>
          <ul className="footer-list" style={{ color: "#fff" }}>
            <li>
              <p className="footer-list-title">About Us</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Digital Payout
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Authenticity Check
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Business Contacts
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ color: "#fff" }}>
        <div className="container">
          <p className="copyright">
            © 2022 Digital Payout All Rights Reserved by{" "}
            <a href="#" className="copyright-link">
              yourname
            </a>
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/*Start of Tawk.to Script*/}
    {/*End of Tawk.to Script*/}
    {/* 
      - custom js link
    */}
    {/* 
      - ionicon link
    */}
  </>
  
  )
}

export default CryptoHome
