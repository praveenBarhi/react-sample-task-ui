import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoneyBillAlt, faBandAid, faAt, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

import iShareLogo from '../images/loho-i-shares.png'


const InvestmentRow = (props) => {
    const { investment } = props;

    return (
        <div className="investment_row-container">
            <div className="row investment-row">
                <div className="col-lg-4 col-sm-6 col-12 investment-col">
                    <div className="stock-name-block">
                        <FontAwesomeIcon icon={faBars} />

                        <div className="stock-price">
                            <span>{investment.code}</span>
                            <h3>${parseFloat(investment.price).toFixed(2)}</h3>
                        </div>
                        <div className="stock-name">
                            <img src={iShareLogo} />
                            <h3>{investment.name}</h3>
                            <p>US Equity</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12 investment-col pl-2 pr-2">
                    <div className="stock-quantity">
                        <label><FontAwesomeIcon icon={faBandAid} /> Quantity</label>
                        <span>{investment.quantity}</span>
                    </div>
                    <div className="stock-quantity">
                        <label><FontAwesomeIcon icon={faAt} /> Avg. Cost</label>
                        <span>${parseFloat(investment.average_cost).toFixed(2)}</span>
                    </div>
                    <div className="stock-quantity">
                        <label><FontAwesomeIcon icon={faMoneyBillAlt} /> Invested Amt</label>
                        <span>${parseFloat(investment.invested_amount).toFixed(2)}</span>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-5 col-12 investment-col pl-2 pr-2">
                    <div className="marketValue">
                        <span className="float-left">Market Value</span>
                        <span className="float-right">${parseFloat(investment.price * investment.quantity).toFixed(2)}</span>
                    </div>
                    <p className="portfolio">% of portfolio value <b className="float-right">{investment.market_percentage}</b></p>
                    <div className="progress mb-1 stock-progress">
                        <div className="progress-bar progress-bar-green" role="progressbar" style={{ width: investment.market_percentage }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-5 col-12 investment-col pl-2 pr-2">
                    <div className="marketValue">
                        <span className="float-left">Unrealized P/L</span>
                        <span className="float-right">${investment.unrealized_pl_value}</span>
                    </div>
                    {(investment.unrealized_pl_type === 'profit') &&
                        <React.Fragment>
                            <p className="portfolio">% Return <b className="float-right">
                                <FontAwesomeIcon icon={faSortUp} className="green-icon" />
                                {Math.abs(investment.unrealized_pl_percentage)}</b></p>
                            <div className="progress mb-1 stock-progress progress-relative ">
                                <div className={"progress-bar progress-bar-green left-50 "} role="progressbar" style={{ width: Math.abs(investment.unrealized_pl_percentage) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </React.Fragment>
                    }
                    {(investment.unrealized_pl_type === 'loss') &&
                        <React.Fragment>
                            <p className="portfolio">% Return <b className="float-right">
                                <FontAwesomeIcon icon={faSortDown} className="red-icon" />
                                {Math.abs(investment.unrealized_pl_percentage)}</b></p>
                            <div className="progress mb-1 stock-progress progress-relative ">
                                <div className={"progress-bar progress-bar-red left-50 "} role="progressbar" style={{ width: Math.abs(investment.unrealized_pl_percentage) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </React.Fragment>
                    }

                </div>
                <div className="col-lg-1 col-sm-2 col-12 pl-1 pr-1 stock-btn">
                    <button type="button" className="btn btn-outline-success btn-sm btn-block">BUY</button>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-block mb-0">SELL</button>
                </div>
            </div>
        </div>
    );
}

export default InvestmentRow;
