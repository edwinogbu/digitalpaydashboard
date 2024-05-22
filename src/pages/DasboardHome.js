import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import { getMarketData, getMoneyFlowData, getTimeVariantOptions } from './../api';
import Chart from 'chart.js/auto';

export default function DashboardHome() {
    const navigate = useNavigate();
    const { state, isAuthenticated, logout } = useAuth();
    const [marketData, setMarketData] = useState([]);
    const [moneyFlowData, setMoneyFlowData] = useState([]);
    const [selectedRange, setSelectedRange] = useState(7); // Default to 7 days
    const timeVariantOptions = getTimeVariantOptions();
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Fetch market data
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const data = await getMarketData();
                setMarketData(data);
            } catch (error) {
                console.error('Error fetching market data:', error);
            }
        };

        fetchMarketData();
    }, []);

    // Fetch money flow data
    useEffect(() => {
        const fetchMoneyFlowData = async () => {
            try {
                const data = await getMoneyFlowData('bitcoin', selectedRange); // Example for Bitcoin
                setMoneyFlowData(data);
            } catch (error) {
                console.error('Error fetching money flow data:', error);
            }
        };

        fetchMoneyFlowData();
    }, [selectedRange]);

    // Check user authentication
    let user = state.user.user;
    if (!user) {
        const localStorageUser = localStorage.getItem('user');
        if (localStorageUser) {
            user = JSON.parse(localStorageUser).user;
        } else {
            logout();
        }
    }

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: moneyFlowData.prices?.map(price => new Date(price[0]).toLocaleDateString()) || [],
                    datasets: [{
                        label: 'Price',
                        data: moneyFlowData.prices?.map(price => price[1]) || [],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }
            });
        }
    }, [moneyFlowData]);

    // Redirect if the user is not authenticated
    if (!user) {
        navigate('/');
        return null;
    }

    return (
        <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <div className="welcome-header bg-white card">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
                                <div className="wel-come-name">
                                    <h4>Welcome, <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span></h4>
                                    <p>{user ? user.email : ''}</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-7">
                                <div className="welcome-wallet">
                                    <div className="wallet-list">
                                        <span>Wallet: 56, 444658</span>
                                    </div>
                                    <div className="bookingrange btn-book ms-2 me-2">
                                        <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-widget-blk">
                        <ul>
                            {marketData.map((coin, index) => (
                                <li key={index}>
                                    <div className="premium-box  box-sky">
                                        <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
                                    </div>
                                    <div className="premium-name-blk title-pink">
                                        <h4>{coin.name}</h4>
                                        <h3>{coin.current_price}</h3>
                                    </div>
                                    <div className="premium-img">
                                        <img src={`./../assets/img/wave-0${index + 1}.png`} alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="buy-form">
                        <div className="border-watch">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <div className="watch-head flow-time-blk">
                                        <h4>Money Flow</h4>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <ul className="time-variant">
                                        {timeVariantOptions.map((option, index) => (
                                            <li key={index}>
                                                <button onClick={() => setSelectedRange(option.value)}>
                                                    {option.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <canvas id="moneyFlowChart" ref={chartRef}></canvas>
                    </div>
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
                                        <span />
                                    </div>
                                    <div className="down-range">
                                        <a href="javascript:;">
                                            <img src="./../assets/img/icon/down-icon.svg" alt="" />
                                        </a>
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
                                        <th style={{ minWidth: 110 }}>Price</th>
                                        <th style={{ minWidth: 110 }}>Market Cap</th>
                                        <th style={{ minWidth: 110 }}>Volume</th>
                                        <th style={{ minWidth: 110 }}>Circulating Supply</th>
                                        <th style={{ minWidth: 90 }}>Change(24h)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {marketData.map((coin, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{coin.name}</td>
                                            <td>{coin.current_price}</td>
                                            <td>{coin.market_cap}</td>
                                            <td>{coin.total_volume}</td>
                                            <td>{coin.circulating_supply}</td>
                                            <td>{coin.price_change_percentage_24h}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext';
// import { getMarketData, getMoneyFlowData, getTimeVariantOptions } from './../api';
// import Chart from 'chart.js/auto';

// export default function DashboardHome() {
//     const navigate = useNavigate();
//     const { state, isAuthenticated, logout } = useAuth();
//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]);
//     const [selectedRange, setSelectedRange] = useState(7); // Default to 7 days
//     const timeVariantOptions = getTimeVariantOptions();

//     // Fetch market data
//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData();
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         fetchMarketData();
//     }, []);

//     // Fetch money flow data
//     useEffect(() => {
//         const fetchMoneyFlowData = async () => {
//             try {
//                 const data = await getMoneyFlowData('bitcoin', selectedRange); // Example for Bitcoin
//                 setMoneyFlowData(data);
//             } catch (error) {
//                 console.error('Error fetching money flow data:', error);
//             }
//         };

//         fetchMoneyFlowData();
//     }, [selectedRange]);

//     // Check user authentication
//     let user = state.user.user;
//     if (!user) {
//         const localStorageUser = localStorage.getItem('user');
//         if (localStorageUser) {
//             user = JSON.parse(localStorageUser).user;
//         } else {
//             logout();
//         }
//     }

//     useEffect(() => {
//         const ctx = document.getElementById('moneyFlowChart').getContext('2d');
//         if (ctx) {
//             new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: moneyFlowData.prices?.map(price => new Date(price[0]).toLocaleDateString()) || [],
//                     datasets: [{
//                         label: 'Price',
//                         data: moneyFlowData.prices?.map(price => price[1]) || [],
//                         fill: false,
//                         borderColor: 'rgb(75, 192, 192)',
//                         tension: 0.1
//                     }]
//                 }
//             });
//         }
//     }, [moneyFlowData]);

//     // Redirect if the user is not authenticated
//     if (!user) {
//         navigate('/');
//         return null;
//     }

//     return (
//         <div className="content">
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="welcome-header">
//                         <div className="row">
//                             <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                 <div className="wel-come-name">
//                                     <h4>Welcome, <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span></h4>
//                                     <p>{user ? user.email : ''}</p>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-lg-7 col-md-7">
//                                 <div className="welcome-wallet">
//                                     <div className="wallet-list">
//                                         <span>Wallet: 56, 444658</span>
//                                     </div>
//                                     <div className="bookingrange btn-book ms-2 me-2">
//                                         <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                         <span />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="dash-widget-blk">
//                         <ul>
//                             {marketData.map((coin, index) => (
//                                 <li key={index}>
//                                     <div className="premium-box">
//                                         <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                     </div>
//                                     <div className="premium-name-blk">
//                                         <h4>{coin.name}</h4>
//                                         <h3>{coin.current_price}</h3>
//                                     </div>
//                                     <div className="premium-img">
//                                         <img src={`./../assets/img/wave-0${index + 1}.png`} alt="" />
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="buy-form">
//                         <div className="border-watch">
//                             <div className="row">
//                                 <div className="col d-flex align-items-center">
//                                     <div className="watch-head flow-time-blk">
//                                         <h4>Money Flow</h4>
//                                     </div>
//                                 </div>
//                                 <div className="col-auto">
//                                     <ul className="time-variant">
//                                         {timeVariantOptions.map((option, index) => (
//                                             <li key={index}>
//                                                 <button onClick={() => setSelectedRange(option.value)}>
//                                                     {option.label}
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <canvas id="moneyFlowChart"></canvas>
//                     </div>
//                     <div className="buy-form mb-0">
//                         <div className="border-watch">
//                             <div className="row">
//                                 <div className="col d-flex align-items-center">
//                                     <div className="watch-head">
//                                         <h4>Market Capitalizations</h4>
//                                     </div>
//                                 </div>
//                                 <div className="col-auto d-flex">
//                                     <div className="bookingrange btn-book me-2">
//                                         <span />
//                                     </div>
//                                     <div className="down-range">
//                                         <a href="javascript:;">
//                                             <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="table-responsive">
//                             <table className="datatable table  custom-table">
//                                 <thead>
//                                     <tr>
//                                         <th>No</th>
//                                         <th>Currency</th>
//                                         <th style={{ minWidth: 110 }}>Price</th>
//                                         <th style={{ minWidth: 110 }}>Market Cap</th>
//                                         <th style={{ minWidth: 110 }}>Volume</th>
//                                         <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                         <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {marketData.map((coin, index) => (
//                                         <tr key={index}>
//                                             <td>{index + 1}</td>
//                                             <td>{coin.name}</td>
//                                             <td>{coin.current_price}</td>
//                                             <td>{coin.market_cap}</td>
//                                             <td>{coin.total_volume}</td>
//                                             <td>{coin.circulating_supply}</td>
//                                             <td>{coin.price_change_percentage_24h}%</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext';
// import { getMarketData, getMoneyFlowData, getTimeVariantOptions } from './../api';
// import Chart from 'chart.js/auto';

// export default function DashboardHome() {
//     const navigate = useNavigate();
//     const { state, isAuthenticated, logout } = useAuth();
//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]);
//     const [selectedRange, setSelectedRange] = useState(7); // Default to 7 days
//     const timeVariantOptions = getTimeVariantOptions();

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData();
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         fetchMarketData();
//     }, []);

//     useEffect(() => {
//         const fetchMoneyFlowData = async () => {
//             try {
//                 const data = await getMoneyFlowData('bitcoin', selectedRange); // Example for Bitcoin
//                 setMoneyFlowData(data);
//             } catch (error) {
//                 console.error('Error fetching money flow data:', error);
//             }
//         };

//         fetchMoneyFlowData();
//     }, [selectedRange]);

//     let user = state.user.user;
//     if (!user) {
//         const localStorageUser = localStorage.getItem('user');
//         if (localStorageUser) {
//             user = JSON.parse(localStorageUser).user;
//         } else {
//             logout();
//         }
//     }

//     if (!user) {
//         navigate('/');
//         return null;
//     }

//     useEffect(() => {
//         const ctx = document.getElementById('moneyFlowChart').getContext('2d');
//         if (ctx) {
//             new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: moneyFlowData.prices?.map(price => new Date(price[0]).toLocaleDateString()) || [],
//                     datasets: [{
//                         label: 'Price',
//                         data: moneyFlowData.prices?.map(price => price[1]) || [],
//                         fill: false,
//                         borderColor: 'rgb(75, 192, 192)',
//                         tension: 0.1
//                     }]
//                 }
//             });
//         }
//     }, [moneyFlowData]);

//     return (
//         <>
//             <div className="content">
//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="welcome-header">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                     <div className="wel-come-name">
//                                         <h4>Welcome, <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span></h4>
//                                         <p>{user ? user.email : ''}</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6 col-lg-7 col-md-7">
//                                     <div className="welcome-wallet">
//                                         <div className="wallet-list">
//                                             <span>Wallet: 56, 444658</span>
//                                         </div>
//                                         <div className="bookingrange btn-book ms-2 me-2">
//                                             <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                             <span />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dash-widget-blk">
//                             <ul>
//                                 {marketData.map((coin, index) => (
//                                     <li key={index}>
//                                         <div className="premium-box">
//                                             <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                         </div>
//                                         <div className="premium-name-blk">
//                                             <h4>{coin.name}</h4>
//                                             <h3>{coin.current_price}</h3>
//                                         </div>
//                                         <div className="premium-img">
//                                             <img src={`./../assets/img/wave-0${index + 1}.png`} alt="" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="buy-form">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head flow-time-blk">
//                                             <h4>Money Flow</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <ul className="time-variant">
//                                             {timeVariantOptions.map((option, index) => (
//                                                 <li key={index}>
//                                                     <button onClick={() => setSelectedRange(option.value)}>
//                                                         {option.label}
//                                                     </button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <canvas id="moneyFlowChart"></canvas>
//                         </div>
//                         <div className="buy-form mb-0">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head">
//                                             <h4>Market Capitalizations</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto d-flex">
//                                         <div className="bookingrange btn-book me-2">
//                                             <span />
//                                         </div>
//                                         <div className="down-range">
//                                             <a href="javascript:;">
//                                                 <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="datatable table  custom-table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Currency</th>
//                                             <th style={{ minWidth: 110 }}>Price</th>
//                                             <th style={{ minWidth: 110 }}>Market Cap</th>
//                                             <th style={{ minWidth: 110 }}>Volume</th>
//                                             <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                             <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {marketData.map((coin, index) => (
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{coin.name}</td>
//                                                 <td>{coin.current_price}</td>
//                                                 <td>{coin.market_cap}</td>
//                                                 <td>{coin.total_volume}</td>
//                                                 <td>{coin.circulating_supply}</td>
//                                                 <td>{coin.price_change_percentage_24h}%</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Import the AuthContext
// import { getMarketData, getDetailedCoinData, getCoinMarketChart, getWatchlistedCoins, getAllCoins, getCandleChartData } from './../api'; // Import API functions
// import { Chart, registerables } from 'chart.js'; // Import Chart.js components
// import { Line } from 'react-chartjs-2'; // Import the Line component from react-chartjs-2
// import axios from 'axios';

// // Register necessary components from Chart.js
// Chart.register(...registerables);

// // Function to fetch money flow data
// const getMoneyFlowData = async () => {
//     try {
//         const response = await axios.get('URL_TO_FETCH_MONEY_FLOW_DATA'); // Replace 'URL_TO_FETCH_MONEY_FLOW_DATA' with your actual endpoint
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching money flow data:', error);
//         throw new Error('Failed to fetch money flow data. Please try again later.'); // Throw an error to be caught by the caller
//     }
// };

// // Function to fetch time variant options
// const getTimeVariantOptions = async () => {
//     try {
//         const response = await axios.get('URL_TO_FETCH_TIME_VARIANT_OPTIONS'); // Replace 'URL_TO_FETCH_TIME_VARIANT_OPTIONS' with your actual endpoint
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching time variant options:', error);
//         throw new Error('Failed to fetch time variant options. Please try again later.'); // Throw an error to be caught by the caller
//     }
// };


// export default function DashboardHome() {
//     const navigate = useNavigate();
//     const { state, isAuthenticated, logout } = useAuth();
//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]); // State for money flow data
//     const [timeVariantOptions, setTimeVariantOptions] = useState([]); // State for time variant options
//     const chartRef = useRef(null); // Ref to store chart instance

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData(); // Fetch market data from API
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         const fetchMoneyFlowData = async () => {
//             // Fetch money flow data from API
//              const moneyFlowData = await getMoneyFlowData();
//             setMoneyFlowData(moneyFlowData);
//         };

//         const fetchTimeVariantOptions = async () => {
//             // Fetch time variant options from API
//              const timeVariantOptions = await getTimeVariantOptions();
//             setTimeVariantOptions(timeVariantOptions);
//         };

//         fetchMarketData();
//         fetchMoneyFlowData();
//         fetchTimeVariantOptions();
//     }, []);

//     // Check for user authentication and state
//     useEffect(() => {
//         let user = state.user.user;
//         if (!user) {
//             const localStorageUser = localStorage.getItem('user');
//             if (localStorageUser) {
//                 user = JSON.parse(localStorageUser).user;
//             } else {
//                 logout();
//                 navigate('/');
//             }
//         }
//     }, [state, logout, navigate]);

//     // Sample chart data (to be replaced with actual data)
//     const chartData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }]
//     };

//     // Sample image paths (to be replaced with actual paths)
//     const images = {
//         btc: './../assets/img/wave-01.png',
//         ethereum: './../assets/img/wave-02.png',
//         ripple: './../assets/img/wave-03.png',
//         cardeno: './../assets/img/wave-04.png',
//         neo: './../assets/img/wave-05.png',
//         stellar: './../assets/img/wave-06.png',
//         eos: './../assets/img/wave-07.png',
//         litecoin: './../assets/img/wave-08.png'
//     };

//     useEffect(() => {
//         if (chartRef.current) {
//             chartRef.current.destroy();
//         }

//         const ctx = document.getElementById('chart').getContext('2d');
//         chartRef.current = new Chart(ctx, {
//             type: 'line',
//             data: chartData,
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         display: true,
//                     }
//                 },
//                 scales: {
//                     x: {
//                         type: 'category',
//                     },
//                     y: {
//                         beginAtZero: true,
//                     }
//                 }
//             }
//         });

//         return () => {
//             if (chartRef.current) {
//                 chartRef.current.destroy();
//             }
//         };
//     }, [chartData]);

//     return (
//         <>
//             <div className="content">
//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="welcome-header">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                     <div className="wel-come-name">
//                                         <h4>
//                                             Welcome, <span className='text-primary'>{state.user.user ? `${state.user.user.firstName} ${state.user.user.lastName}` : ''}</span>
//                                         </h4>
//                                         <p>{state.user.user ? state.user.user.email : ''}</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6 col-lg-7 col-md-7">
//                                     <div className="welcome-wallet">
//                                         <div className="wallet-list">
//                                             <span>Wallet: 56, 444658</span>
//                                         </div>
//                                         <div className="bookingrange btn-book ms-2 me-2">
//                                             <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                             <span />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dash-widget-blk">
//                             <ul>
//                                 {marketData.map((coin, index) => (
//                                     <li key={index}>
//                                         <div className="premium-box">
//                                             <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                         </div>
//                                         <div className="premium-name-blk">
//                                             <h4>{coin.name}</h4>
//                                             <h3>{coin.current_price}</h3>
//                                         </div>
//                                         <div className="premium-img">
//                                             <img src={images[coin.id]} alt="" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="buy-form">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head flow-time-blk">
//                                             <h4>Money Flow</h4>
//                                             {/* Money Flow Data */}
//                                             <p>{/* Render money flow data here */}</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <ul className="time-variant">
//                                             {/* Time Variant Options */}
//                                             {timeVariantOptions.map((option, index) => (
//                                                 <li key={index}>{option}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="chartdiv">
//                                 {/* Chart Component */}
//                                 <canvas id="chart"></canvas>
//                             </div>
//                         </div>
//                         <div className="buy-form mb-0">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head">
//                                             <h4>Market Capitalizations</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto d-flex">
//                                         <div className="bookingrange btn-book me-2">
//                                             <span />
//                                         </div>
//                                         <div className="down-range">
//                                             <a href="javascript:;">
//                                                 <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="datatable table custom-table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Currency</th>
//                                             <th style={{ minWidth: 110 }}>Price</th>
//                                             <th style={{ minWidth: 110 }}>Market Cap</th>
//                                             <th style={{ minWidth: 110 }}>Volume</th>
//                                             <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                             <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {marketData.map((coin, index) => (
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{coin.name}</td>
//                                                 <td>{coin.current_price}</td>
//                                                 <td>{coin.market_cap}</td>
//                                                 <td>{coin.total_volume}</td>
//                                                 <td>{coin.circulating_supply}</td>
//                                                 <td>{coin.price_change_percentage_24h}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Import the AuthContext
// import { getMarketData, getDetailedCoinData, getCoinMarketChart, getWatchlistedCoins, getAllCoins, getCandleChartData } from './../api'; // Import API functions
// import { Chart, registerables } from 'chart.js'; // Import Chart.js components
// import { Line } from 'react-chartjs-2'; // Import the Line component from react-chartjs-2

// // Register necessary components from Chart.js
// Chart.register(...registerables);

// export default function DashboardHome() {
//     const navigate = useNavigate();
//     const { state, isAuthenticated, logout } = useAuth();
//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]); // State for money flow data
//     const [timeVariantOptions, setTimeVariantOptions] = useState([]); // State for time variant options
//     const chartRef = useRef(null); // Ref to store chart instance

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData(); // Fetch market data from API
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         const fetchMoneyFlowData = async () => {
//             // Fetch money flow data from API
//             const moneyFlowData = await getMoneyFlowData();
//             setMoneyFlowData(moneyFlowData);
//         };

//         const fetchTimeVariantOptions = async () => {
//             // Fetch time variant options from API
//             const timeVariantOptions = await getTimeVariantOptions();
//             setTimeVariantOptions(timeVariantOptions);
//         };

//         fetchMarketData();
//         fetchMoneyFlowData();
//         fetchTimeVariantOptions();
//     }, []);

//     // Check for user authentication and state
//     useEffect(() => {
//         let user = state.user.user;
//         if (!user) {
//             const localStorageUser = localStorage.getItem('user');
//             if (localStorageUser) {
//                 user = JSON.parse(localStorageUser).user;
//             } else {
//                 logout();
//                 navigate('/');
//             }
//         }
//     }, [state, logout, navigate]);

//     // Sample chart data (to be replaced with actual data)
//     const chartData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }]
//     };

//     // Sample image paths (to be replaced with actual paths)
//     const images = {
//         btc: './../assets/img/wave-01.png',
//         ethereum: './../assets/img/wave-02.png',
//         ripple: './../assets/img/wave-03.png',
//         cardeno: './../assets/img/wave-04.png',
//         neo: './../assets/img/wave-05.png',
//         stellar: './../assets/img/wave-06.png',
//         eos: './../assets/img/wave-07.png',
//         litecoin: './../assets/img/wave-08.png'
//     };

//     useEffect(() => {
//         if (chartRef.current) {
//             chartRef.current.destroy();
//         }

//         const ctx = document.getElementById('chart').getContext('2d');
//         chartRef.current = new Chart(ctx, {
//             type: 'line',
//             data: chartData,
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         display: true,
//                     }
//                 },
//                 scales: {
//                     x: {
//                         type: 'category',
//                     },
//                     y: {
//                         beginAtZero: true,
//                     }
//                 }
//             }
//         });

//         return () => {
//             if (chartRef.current) {
//                 chartRef.current.destroy();
//             }
//         };
//     }, [chartData]);

//     return (
//         <>
//             <div className="content">
//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="welcome-header">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                     <div className="wel-come-name">
//                                         <h4>
//                                             Welcome, <span className='text-primary'>{state.user.user ? `${state.user.user.firstName} ${state.user.user.lastName}` : ''}</span>
//                                         </h4>
//                                         <p>{state.user.user ? state.user.user.email : ''}</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6 col-lg-7 col-md-7">
//                                     <div className="welcome-wallet">
//                                         <div className="wallet-list">
//                                             <span>Wallet: 56, 444658</span>
//                                         </div>
//                                         <div className="bookingrange btn-book ms-2 me-2">
//                                             <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                             <span />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dash-widget-blk">
//                             <ul>
//                                 {marketData.map((coin, index) => (
//                                     <li key={index}>
//                                         <div className="premium-box box-blue">
//                                             <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                         </div>
//                                         <div className="premium-name-blk title-blue">
//                                             <h4>{coin.name}</h4>
//                                             <h3>{coin.current_price}</h3>
//                                         </div>
//                                         <div className="premium-img">
//                                             <img src={images[coin.id]} alt="" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="buy-form">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head flow-time-blk">
//                                             <h4>Money Flow</h4>
//                                             {/* Money Flow Data */}
//                                             <p>{/* Render money flow data here */}</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <ul className="time-variant">
//                                             {/* Time Variant Options */}
//                                             {timeVariantOptions.map((option, index) => (
//                                                 <li key={index}>{option}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="chartdiv">
//                                 {/* Chart Component */}
//                                 <canvas id="chart"></canvas>
//                             </div>
//                         </div>
//                         <div className="buy-form mb-0">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head">
//                                             <h4>Market Capitalizations</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto d-flex">
//                                         <div className="bookingrange btn-book me-2">
//                                             <span />
//                                         </div>
//                                         <div className="down-range">
//                                             <a href="javascript:;">
//                                                 <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="datatable table custom-table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Currency</th>
//                                             <th style={{ minWidth: 110 }}>Price</th>
//                                             <th style={{ minWidth: 110 }}>Market Cap</th>
//                                             <th style={{ minWidth: 110 }}>Volume</th>
//                                             <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                             <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {marketData.map((coin, index) => (
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{coin.name}</td>
//                                                 <td>{coin.current_price}</td>
//                                                 <td>{coin.market_cap}</td>
//                                                 <td>{coin.total_volume}</td>
//                                                 <td>{coin.circulating_supply}</td>
//                                                 <td>{coin.price_change_percentage_24h}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Import the AuthContext
// import { getMarketData, getDetailedCoinData, getCoinMarketChart, getWatchlistedCoins, getAllCoins, getCandleChartData } from './../api'; // Import API functions
// import { Line } from 'react-chartjs-2'; // Import the Line component from react-chartjs-2

// export default function DashboardHome() {
//     const navigate = useNavigate();
//     const { state, isAuthenticated, logout } = useAuth();
//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]); // State for money flow data
//     const [timeVariantOptions, setTimeVariantOptions] = useState([]); // State for time variant options

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData(); // Fetch market data from API
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         const fetchMoneyFlowData = async () => {
//             // Fetch money flow data from API
//             // Example: const moneyFlowData = await getMoneyFlowData();
//             // setMoneyFlowData(moneyFlowData);
//         };

//         const fetchTimeVariantOptions = async () => {
//             // Fetch time variant options from API
//             // Example: const timeVariantOptions = await getTimeVariantOptions();
//             // setTimeVariantOptions(timeVariantOptions);
//         };

//         fetchMarketData();
//         fetchMoneyFlowData();
//         fetchTimeVariantOptions();
//     }, []);

//     // Ensure user is authenticated
//     let user = state.user.user;
//     if (!user) {
//         const localStorageUser = localStorage.getItem('user');
//         if (localStorageUser) {
//             user = JSON.parse(localStorageUser).user;
//         } else {
//             logout();
//         }
//     }

//     if (!user) {
//         navigate('/');
//         return null;
//     }

//     // Sample chart data (to be replaced with actual data)
//     const chartData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }]
//     };

//     // Sample image paths (to be replaced with actual paths)
//     const images = {
//         btc: './../assets/img/wave-01.png',
//         ethereum: './../assets/img/wave-02.png',
//         ripple: './../assets/img/wave-03.png',
//         cardeno: './../assets/img/wave-04.png',
//         neo: './../assets/img/wave-05.png',
//         stellar: './../assets/img/wave-06.png',
//         eos: './../assets/img/wave-07.png',
//         litecoin: './../assets/img/wave-08.png'
//     };

//     return (
//         <>
//             <div className="content">
//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="welcome-header">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                     <div className="wel-come-name">
//                                         <h4>
//                                             Welcome, <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span>
//                                         </h4>
//                                         <p>{user ? user.email : ''}</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6 col-lg-7 col-md-7">
//                                     <div className="welcome-wallet">
//                                         <div className="wallet-list">
//                                             <span>Wallet: 56, 444658</span>
//                                         </div>
//                                         <div className="bookingrange btn-book ms-2 me-2">
//                                             <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                             <span />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dash-widget-blk">
//                             <ul>
//                                 {marketData.map((coin, index) => (
//                                     <li key={index}>
//                                         <div className="premium-box">
//                                             <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                         </div>
//                                         <div className="premium-name-blk">
//                                             <h4>{coin.name}</h4>
//                                             <h3>{coin.current_price}</h3>
//                                         </div>
//                                         <div className="premium-img">
//                                             <img src={images[coin.id]} alt="" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="buy-form">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head flow-time-blk">
//                                             <h4>Money Flow</h4>
//                                             {/* Money Flow Data */}
//                                             <p>{/* Render money flow data here */}</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <ul className="time-variant">
//                                             {/* Time Variant Options */}
//                                             {timeVariantOptions.map((option, index) => (
//                                                 <li key={index}>{option}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="chartdiv">
//                                 {/* Chart Component */}
//                                 <Line data={chartData} />
//                             </div>
//                         </div>
//                         <div className="buy-form mb-0">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head">
//                                             <h4>Market Capitalizations</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto d-flex">
//                                         <div className="bookingrange btn-book me-2">
//                                             <span />
//                                         </div>
//                                         <div className="down-range">
//                                             <a href="javascript:;">
//                                                 <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="datatable table custom-table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Currency</th>
//                                             <th style={{ minWidth: 110 }}>Price</th>
//                                             <th style={{ minWidth: 110 }}>Market Cap</th>
//                                             <th style={{ minWidth: 110 }}>Volume</th>
//                                             <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                             <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {/* Market Capitalizations Data */}
//                                         {marketData.map((coin, index) => (
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{coin.name}</td>
//                                                 <td>{coin.current_price}</td>
//                                                 <td>{coin.market_cap}</td>
//                                                 <td>{coin.total_volume}</td>
//                                                 <td>{coin.circulating_supply}</td>
//                                                 <td>{coin.price_change_percentage_24h}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React, { useContext, useEffect, useState,  } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Import the AuthContext
// import { getMarketData,  getDetailedCoinData, getCoinMarketChart, getWatchlistedCoins, getAllCoins, getCandleChartData } from './../api'; // Import API function for fetching market data
// import Chart from 'chart.js/auto';
// import axios from 'axios';

// export default function DashboardHome() {
//   const navigate = useNavigate();
//   const { state, isAuthenticated, logout } = useAuth();


//   let user = state.user.user;
//  console.log('====================================');
//  console.log(state);
//  console.log('====================================');

//     const [marketData, setMarketData] = useState([]);
//     const [moneyFlowData, setMoneyFlowData] = useState([]);
//     const [timeVariantOptions, setTimeVariantOptions] = useState([]);

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const data = await getMarketData(); // Fetch market data from API
//                 setMarketData(data);
//             } catch (error) {
//                 console.error('Error fetching market data:', error);
//             }
//         };

//         const fetchMoneyFlowData = async () => {
//             // Fetch money flow data from API
//             // Replace 'yourEndpoint' with the actual endpoint for money flow data
//             try {
//                 const data = await axios.get('yourEndpoint');
//                 setMoneyFlowData(data);
//             } catch (error) {
//                 console.error('Error fetching money flow data:', error);
//             }
//         };

//         const fetchTimeVariantOptions = async () => {
//             // Fetch time variant options from API
//             // Replace 'yourEndpoint' with the actual endpoint for time variant options
//             try {
//                 const data = await axios.get('yourEndpoint');
//                 setTimeVariantOptions(data);
//             } catch (error) {
//                 console.error('Error fetching time variant options:', error);
//             }
//         };

//         fetchMarketData();
//         fetchMoneyFlowData();
//         fetchTimeVariantOptions();
//     }, []);

//     // Sample image paths (to be replaced with actual paths)
//     const images = {
//         btc: './../assets/img/wave-01.png',
//         ethereum: './../assets/img/wave-02.png',
//         ripple: './../assets/img/wave-03.png',
//         cardeno: './../assets/img/wave-04.png',
//         neo: './../assets/img/wave-05.png',
//         stellar: './../assets/img/wave-06.png',
//         eos: './../assets/img/wave-07.png',
//         litecoin: './../assets/img/wave-08.png'
//     };


//        // If user is not available in context, try retrieving from local storage
//    useEffect(() => {
//     if (!user) {
//       const localStorageUser = localStorage.getItem('user');
//       if (localStorageUser) {
//         user = JSON.parse(localStorageUser).user; // Extracting user object from local storage
//       } else {
//         // If user is still not available, redirect to login page
//         logout();
//       }
//     }
//   }, [user, logout]);

//   // If user is still not available, redirect to login page
//   if (!user) {
//     navigate('/'); // Redirect to the login page
//     return null; // Return null to prevent rendering the dashboard content
//   }



//     return (
//         <>
//             <div className="content">
//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="welcome-header">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                                     <div className="wel-come-name">
//                                         <h4>
//                                             Welcome, <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span>
//                                         </h4>
//                                         <p>{user ? user.email : ''}</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-6 col-lg-7 col-md-7">
//                                     <div className="welcome-wallet">
//                                         <div className="wallet-list">
//                                             <span>Wallet: 56, 444658</span>
//                                         </div>
//                                         <div className="bookingrange btn-book ms-2 me-2">
//                                             <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                                             <span />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dash-widget-blk">
//                             <ul>
//                                 {marketData.map((coin, index) => (
//                                     <li key={index}>
//                                         <div className="premium-box">
//                                             <img src={`./../assets/img/icon/dash-icon-0${index + 1}.svg`} alt="" />
//                                         </div>
//                                         <div className="premium-name-blk">
//                                             <h4>{coin.name}</h4>
//                                             <h3>{coin.current_price}</h3>
//                                         </div>
//                                         <div className="premium-img">
//                                             <img src={images[coin.id]} alt="" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="buy-form">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head flow-time-blk">
//                                             <h4>Money Flow</h4>
//                                             <ul>
//                                                 {moneyFlowData.map((item, index) => (
//                                                     <li key={index}>{/* Render money flow data */}</li>
//                                                 ))}
//                                             </ul>
//                                             {/* Money Flow Chart */}
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <ul className="time-variant">
//                                             {timeVariantOptions.map((option, index) => (
//                                                 <li key={index}>{/* Render time variant options */}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="chartdiv">
//                                 {/* Chart Component */}
//                                 <Chart type='line' data={{}} options={{}} />
//                             </div>
//                         </div>
//                         <div className="buy-form mb-0">
//                             <div className="border-watch">
//                                 <div className="row">
//                                     <div className="col d-flex align-items-center">
//                                         <div className="watch-head">
//                                             <h4>Market Capitalizations</h4>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto d-flex">
//                                         <div className="bookingrange btn-book me-2">
//                                             <span />
//                                         </div>
//                                         <div className="down-range">
//                                             <a href="javascript:;">
//                                                 <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="datatable table  custom-table">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>Currency</th>
//                                             <th style={{ minWidth: 110 }}>Price</th>
//                                             <th style={{ minWidth: 110 }}>Market Cap</th>
//                                             <th style={{ minWidth: 110 }}>Volume</th>
//                                             <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                                             <th style={{ minWidth: 90 }}>Change(24h)</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {/* Market Capitalizations Data */}
//                                         {marketData.map((coin, index) => (
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{coin.name}</td>
//                                                 <td>{coin.current_price}</td>
//                                                 <td>{coin.market_cap}</td>
//                                                 <td>{coin.total_volume}</td>
//                                                 <td>{coin.circulating_supply}</td>
//                                                 <td>{coin.price_change_percentage_24h}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Import the AuthContext
// import Chart from 'chart.js/auto';

// export default function DasboardHome() {
//   const navigate = useNavigate();
//   const { state, isAuthenticated, logout } = useAuth();


//   let user = state.user.user;
//  console.log('====================================');
//  console.log(state);
//  console.log('====================================');


// //  useEffect(() => {
// //   // Check if user is authenticated
// //   if (!isAuthenticated) {
// //     logout(); // Logout if not authenticated
// //   } else {
// //     // Initialize chart
// //     const ctx = document.getElementById('chartdiv');
// //     new Chart(ctx, {
// //       type: 'line',
// //       data: {
// //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //         datasets: [{
// //           label: 'My First Dataset',
// //           data: [65, 59, 80, 81, 56, 55, 40],
// //           fill: false,
// //           borderColor: 'rgb(75, 192, 192)',
// //           tension: 0.1
// //         }]
// //       },
// //       options: {
// //         scales: {
// //           y: {
// //             beginAtZero: true
// //           }
// //         }
// //       }
// //     });
// //   }
// // }, [isAuthenticated]);

//   // If user is not available in context, try retrieving from local storage
//   useEffect(() => {
//     if (!user) {
//       const localStorageUser = localStorage.getItem('user');
//       if (localStorageUser) {
//         user = JSON.parse(localStorageUser).user; // Extracting user object from local storage
//       } else {
//         // If user is still not available, redirect to login page
//         logout();
//       }
//     }
//   }, [user, logout]);

//   // If user is still not available, redirect to login page
//   if (!user) {
//     navigate('/'); // Redirect to the login page
//     return null; // Return null to prevent rendering the dashboard content
//   }

//   return (
//     <>

//       <div className="content">
//         <div className="row">
//           <div className="col-sm-12">
//             <div className="welcome-header">
//               <div className="row">
//                 <div className="col-xl-6 col-lg-5 col-md-5 d-flex align-items-center">
//                    <div className="wel-come-name">
//                     <h4>
//                       Welcome , <span className='text-primary'>{user ? `${user.firstName} ${user.lastName}` : ''}</span> 
//                     </h4>
//                     <p>{user ? user.email : ''}</p> 
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-lg-7 col-md-7">
//                   <div className="welcome-wallet">
//                     <div className="wallet-list">
//                       <span>Wallet : 56, 444658</span>
//                     </div>
//                     <div className="bookingrange btn-book ms-2 me-2">
//                       <img src="./../assets/img/icon/calendar-icon.svg" alt="" />
//                       <span />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dash-widget-blk">
//               <ul>
//                 <li>
//                   <div className="premium-box box-blue">
//                     <img src="./../assets/img/icon/dash-icon-01.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-blue">
//                     <h4>BTC</h4>
//                     <h3>$ 76,5498</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-01.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-pink">
//                     <img src="./../assets/img/icon/dash-icon-02.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-pink">
//                     <h4>Ethereum</h4>
//                     <h3>$ 11,723.40</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-02.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-green">
//                     <img src="./../assets/img/icon/dash-icon-03.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-green">
//                     <h4>Ripple </h4>
//                     <h3>$ 1,070.39</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-03.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-orange">
//                     <img src="./../assets/img/icon/dash-icon-04.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-orange">
//                     <h4>Cardeno </h4>
//                     <h3>$ 10,143,40</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-04.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-light">
//                     <img src="./../assets/img/icon/dash-icon-05.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-light">
//                     <h4>NEO </h4>
//                     <h3>$ 46,5198</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-05.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-dark">
//                     <img src="./../assets/img/icon/dash-icon-06.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-dark">
//                     <h4>Stellar </h4>
//                     <h3>$ 76,598</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-06.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-sky">
//                     <img src="./../assets/img/icon/dash-icon-07.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-sky">
//                     <h4>EOS </h4>
//                     <h3>$ 1,070.39</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-07.png" alt="" />
//                   </div>
//                 </li>
//                 <li>
//                   <div className="premium-box box-litcoin">
//                     <img src="./../assets/img/icon/dash-icon-08.svg" alt="" />
//                   </div>
//                   <div className="premium-name-blk title-litcoin">
//                     <h4>Litecoin </h4>
//                     <h3>$ 11,723.40</h3>
//                   </div>
//                   <div className="premium-img">
//                     <img src="./../assets/img/wave-08.png" alt="" />
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="buy-form">
//               <div className="border-watch">
//                 <div className="row">
//                   <div className="col d-flex align-items-center">
//                     <div className="watch-head flow-time-blk">
//                       <h4>Money Flow</h4>
//                       <div className="flow-times">
//                         <h5>Last:</h5>
//                         <span className="flow-blue">0.03242000</span>
//                       </div>
//                       <div className="flow-times">
//                         <h5>24High:</h5>
//                         <span className="flow-green">0.03242000</span>
//                       </div>
//                       <div className="flow-times">
//                         <h5>24V:</h5>
//                         <span className="flow-light-blue">0.03242000</span>
//                       </div>
//                       <div className="flow-times">
//                         <h5>24Low:</h5>
//                         <span className="flow-red">0.03242000</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-auto">
//                     <ul className="time-variant">
//                       <li>
//                         <a href="javascript:;">1M</a>
//                       </li>
//                       <li>
//                         <a href="javascript:;">5M</a>
//                       </li>
//                       <li className="active">
//                         <a href="javascript:;">20M</a>
//                       </li>
//                       <li>
//                         <a href="javascript:;">30M</a>
//                       </li>
//                       <li>
//                         <a href="javascript:;">1Hr</a>
//                       </li>
//                       <li>
//                         <a href="javascript:;">2Hr</a>
//                       </li>
//                       <li className="time-range">
//                         <div className="down-range">
//                           <a href="javascript:;">
//                             <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                           </a>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div id="chartdiv" />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="buy-form mb-0">
//               <div className="border-watch">
//                 <div className="row">
//                   <div className="col d-flex align-items-center">
//                     <div className="watch-head">
//                       <h4>Market Capitalizations</h4>
//                     </div>
//                   </div>
//                   <div className="col-auto d-flex">
//                     <div className="bookingrange btn-book me-2">
//                       <span />
//                     </div>
//                     <div className="down-range">
//                       <a href="javascript:;">
//                         <img src="./../assets/img/icon/down-icon.svg" alt="" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <table className="datatable table  custom-table">
//                   <thead>
//                     <tr>
//                       <th>No</th>
//                       <th>Currency</th>
//                       <th style={{ minWidth: 110 }}>Price</th>
//                       <th style={{ minWidth: 110 }}>Market Cap</th>
//                       <th style={{ minWidth: 110 }}>Volume</th>
//                       <th style={{ minWidth: 110 }}>Circulating Supply</th>
//                       <th style={{ minWidth: 90 }}>Change(24h)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td> 01</td>
//                       <td>
//                         <img
//                           src="./../assets/img/icon/watch-icon-07.svg"
//                           alt="Award"
//                           className="me-2"
//                         />
//                         Ethereum
//                       </td>
//                       <td>$ 11,723.40</td>
//                       <td>$ 197,078,267,295</td>
//                       <td>$ 17,950,900,000</td>
//                       <td>16 973 112</td>
//                       <td>
//                         <span className="custom-badge status-green">
//                           <i className="fas fa-arrow-up" aria-hidden="true" />{" "}
//                           263.54 %
//                         </span>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>02</td>
//                       <td>
//                         <img
//                           src="./../assets/img/icon/watch-icon-01.svg"
//                           alt="Award"
//                           className="me-2"
//                         />
//                         Ripple{" "}
//                       </td>
//                       <td>$ 1,070.39</td>
//                       <td>$ 103,892,495,504</td>
//                       <td>$ 7,564,310,000</td>
//                       <td>16 973 112</td>
//                       <td>
//                         <span className="custom-badge status-red">
//                           {" "}
//                           <i
//                             className="fas fa-arrow-down"
//                             aria-hidden="true"
//                           />{" "}
//                           26.13%
//                         </span>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>03</td>
//                       <td>
//                         <img
//                           src="./../assets/img/icon/watch-icon-02.svg"
//                           alt="Award"
//                           className="me-2"
//                         />
//                         Cardeno{" "}
//                       </td>
//                       <td>$ 1.64</td>
//                       <td>$ 63,391,183,730</td>
//                       <td>$ 10,143,400,000</td>
//                       <td>16 973 112</td>
//                       <td>
//                         <span className="custom-badge status-green">
//                           <i className="fas fa-arrow-up" aria-hidden="true" />{" "}
//                           66.62%
//                         </span>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>04</td>
//                       <td>
//                         <img
//                           src="./../assets/img/icon/watch-icon-03.svg"
//                           alt="Award"
//                           className="me-2"
//                         />
//                         NEO{" "}
//                       </td>
//                       <td>$ 198.88</td>
//                       <td>$ 10,901,285,520</td>
//                       <td>$ 1,235,390,000</td>
//                       <td>16 973 112</td>
//                       <td>
//                         <span className="custom-badge status-green">
//                           <i className="fas fa-arrow-up" aria-hidden="true" />{" "}
//                           26.96%
//                         </span>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>05 </td>
//                       <td>
//                         <img
//                           src="./../assets/img/icon/watch-icon-08.svg"
//                           alt="Award"
//                           className="me-2"
//                         />
//                         BTC{" "}
//                       </td>
//                       <td>$ 11,723.40</td>
//                       <td>$ 197,078,267,295</td>
//                       <td>$ 17,950,900,000</td>
//                       <td>16 973 112</td>
//                       <td>
//                         <span className="custom-badge status-green">
//                           <i className="fas fa-arrow-up" aria-hidden="true" />{" "}
//                           263.54 %
//                         </span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


// </>

  //   <>
  //   <div class="main-wrapper">

  //     <Header />
  //     <SideBar />

  //     <div class="page-wrapper bg-wrapper">
  //                 <Routes>
  //                   <Route path="/users" element={<ViewAllUsers />} />
  //                   <Route path="/add-user" element={<AddUser />} />
  //                   <Route path="/archive" element={<Archive />} />
  //                   <Route path="/recent" element={<Recent />} />
  //                   <Route path="/share" element={<ShareWithMe />} />
  //                   <Route path="/drive" element={<MyDrive />} />
  //                   <Route path="/expense" element={<Expense />} />
  //                   <Route path="/expenseCategory" element={<ExpenseCategory />} />
  //                   <Route path="/my-filesUpload" element={<MyFilesUpload />} />
  //                   <Route path="/my-WebDetail" element={<WebDetail />} />
  //                   <Route path="/my-WebDetail/view/:id" element={<ViewWebDetail />} />

  //                 </Routes>
                  

   
  //     </div>
  //   </div>
  // </>
//   )
// }
