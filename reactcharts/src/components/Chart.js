import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';       
const xlabels=[];
const ylabels=[];
class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                    labels: xlabels,
                    datasets: [{
                        label:  'ALTA IoT Sensor Temperature',
                        data: ylabels,
                        backgroundColor:'rgba(255, 159, 64, 0.2)',
                        borderColor:'rgba(255, 99, 132, 1)'
                    }]
                }
        }
            }
            async chartIt(){
                await getData();

                    async function getData(){
                    const response = await fetch('./test.csv');
                    const data= await response.text();
                    console.log(data);
                    const table=data.split('\n').slice(1);
                    table.forEach(row =>{
                    const cols= row.split(',');
                    const time= cols[0];
                    xlabels.push(time);
                    const temp=cols[1];
                    const in_out=cols[2];
                    ylabels.push(temp);
                    console.log(time,temp,in_out);
                    
                })
                }}
    render(){
        this.chartIt()
        return(
            <div className='chart' >
                <Bar
                data={this.state.chartData}
                options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
    }

export default Chart;