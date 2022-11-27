import React from 'react';
import Chart from 'react-apexcharts';
import './chart.css';

class chartDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=5min&apikey=XR9JO0GLJIEHUET7';
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];


        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);

                    for (var key in data['Time Series (5min)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
                    }

                    // console.log(stockChartXValuesFunction);
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction.reverse(),
                        stockChartYValues: stockChartYValuesFunction.reverse(),
                    });
                }
            )
    }

    render() {
        return (
            <div className="chart">
                <h3>Stock Market : GOOGL</h3>

                <Chart options={{
                    stroke: {
                        curve: 'smooth',
                        width: 2,
                        colors: ["#ff929f"],
                    },
                    chart: {
                        id: 'apexchart-example',
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false
                        }
                    },
                    grid: {
                        show: false,
                    },
                    dataLabels: {
                        enabled: false
                    },
                    yaxis: {
                        labels: {
                            show: false,
                            style: {
                                colors: 'white',
                                fontSize: '12px'
                            },
                        }
                    },
                    xaxis: {
                        categories: this.state.stockChartXValues,
                        type: 'datetime',
                        labels: {
                            show: true,
                            style: {
                                colors: 'white',
                                fontSize: '12px'
                            },
                        }
                    },
                }}
                    series={[{
                        name: 'value',
                        data: this.state.stockChartYValues,
                    }]} type="area" />
            </div>
        )
    }
}

export default chartDay;