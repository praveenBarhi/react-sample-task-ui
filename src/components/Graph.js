import React from 'react';
import Highcharts from 'highcharts'
import PieChart from "highcharts-react-official";

const Graph = (props) => {
    const graphData = [{
        name: 'ETF',
        y: 60,
        color: '#a89047',
        z: "ETF"
    }, {
        name: 'MF',
        y: 40,
        color: '#5e9a9a',
        z: "MF"
    }];

    const options = (data) => { 
        return  {
          chart: {
            type: "pie",
            
          },
          title: {
            text: ''
          },
          tooltip: {
              headerFormat: '',
              pointFormat: '<b>{point.z}</b><br/>'
          },    plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
            }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              maxHeight:80,
              symbolHeight: 14,
              symbolWidth: 14,
              symbolRadius: 3,
              width:100,
              itemMarginBottom:5,
              x:0,
              y:150,
              useHTML: true,
                labelFormatter: function() {
                  return '<div className="setting-data-usage">' + this.z + '</div>';
                }
          },
          series: [
            {
              minPointSize: 10,
              innerSize: '80%',
              zMin: 0,
              //name: 'countries',
              data: data
            }
          ]
        
      }};

    return (
        <div className="graph_row-container">
            <div className="graph-section">
          <div className="graph-title">
            Portfolio
            
            <select className="title-drop-down float-right mt-1">
              <option>Asset-wise</option>
            </select>
          </div>
          <div className="highcharts-container " data-highcharts-chart="0"
                        style={{position: 'relative', overflow: 'hidden', width: '100%',
                        height: '300px', textAlign: 'left', lineHeight: 'normal', zIndex: '0',
                        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
            {<PieChart highcharts={Highcharts} options={options(graphData)} />}
          </div>
        </div>
        </div>
    )
}



export default Graph;