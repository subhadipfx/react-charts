import React, { Component } from 'react'
import {Bar,Pie,Polar,Doughnut,Line} from 'react-chartjs-2'
import Modal from './ChartModal'

export  class BarChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div>
            <Modal id = "bar" type= {<Bar data={this.state.data} options={{}} />} />
            </div>
        )
    }
}

export class PieChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div>
            <Modal id = "pie" type= {<Pie data={this.state.data} options={{}} />} />
            </div>
        )
    }
}

export  class PolarChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div>
            <Modal id = "polar" type= {<Polar data={this.state.data} options={{}} />} />
            </div>
        )
    }
}

export  class DoughnutChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div>
            <Modal id = "doughnut" type= {<Doughnut data={this.state.data} options={{}} />} />
            </div>
        )
    }
}

export  class LineChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div>
            <Modal id = "line" type= {<Line data={this.state.data} options={{}} />} />
            </div>
        )
    }
}
