import React from 'react';
import InvestmentRow from './InvestmentRow'

const Investment = (props) => {
    const {sampleData } = props;

    return (
        <div className="investment-container">
            {(sampleData && sampleData.length > 0) && 
            sampleData.map((investment,idx) => {
              console.log('investment',investment)
              return (
                <InvestmentRow
                key={`investment-${idx}`}
                investment={investment}
                />
              )
            })}
        </div>
    );
}

export default Investment;
