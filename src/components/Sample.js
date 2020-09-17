import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/sample';
import Investment from './Investment'
import Graph from './Graph'

const Sample = (props) => {
    const { isSpinner, message, sampleData, startApp } = props;

    useEffect(() => {
        startApp()
    }, [])

    return (
        <div className="sample-container">
            <div className="container">
                <h2 className="text-info text-center mt-3 mb-3">Sample Task (UI)</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9">
                        <Investment
                            sampleData={sampleData}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <Graph />
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isSpinner: state.sample.isSpinner,
        message: state.sample.message,
        sampleData: state.sample.sampleData
    };
};
export default connect(mapStateToProps, Actions)(Sample);
