import { LightningElement ,track } from 'lwc';
import resourceContainer from '@salesforce/resourceUrl/resource';
import {loadScript,loadStyle} from 'lightning/platformResourceLoader'; 



export default class ResourceDemo extends LightningElement {
    @track error;
    chart;
    steppedChart;

    chartjsinitialized = false;

    chartjs = resourceContainer + '/js/chart.js';
    utiljs = resourceContainer + '/js/util.js';
    stylecss = resourceContainer + '/css/style.css';


    astroURL = resourceContainer + '/image/astro.png';
    codeyURL = resourceContainer + '/image/codey.png';
    einsteinURL = resourceContainer + '/image/einstein.png';
    trailheadURL = resourceContainer + '/image/trailhead.png';

    renderedCallback(){
        if(this.chartjsinitialized){
            return;
        }

        this.chartjsinitialized = true;

        Promise.all([
            loadScript(this,this.chartjs),
            loadScript(this,this.utiljs),
            loadStyle(this,this.stylecss)
        ]).then(() => {
            this.generateSteppedChart();
        }).catch(error => {
            this.error = error;
            console.log('Error occured',error);
        });
    }
    
    errorCallback(error, stack) {
        this.error = error;
        console.log(' this.error ', this.error);
    }
    generateSteppedChart(){
        var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: [
					window.chartColors.red,
					window.chartColors.orange,
					window.chartColors.yellow,
					window.chartColors.green,
					window.chartColors.blue,
					window.chartColors.purple,
					window.chartColors.red
				],
				yAxisID: 'y-axis-1',
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: window.chartColors.grey,
				yAxisID: 'y-axis-2',
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
 					randomScalingFactor(),
					randomScalingFactor()
				]
			}]
        };
        
        var dataSet = {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Multi Axis'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        type: 'linear', 
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', 
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                }
            }
        }
        //document.querySelector
        const ctx = this.template
                    .querySelector('canvas.stepped')
                    .getContext('2d');
        this.steppedChart = new window.Chart(ctx, dataSet);
    }


} 