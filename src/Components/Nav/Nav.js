import React from 'react'
import './Nav.css'
import {BarChart,PieChart,PolarChart,DoughnutChart,LineChart} from '../Charts/MyChart'


export default  (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <ul className = "navbar-nav mr-auto">
                <li data-toggle="modal" data-target="#bar" className="btn-lg btn-outline-success"> Bar Chart </li>
                <BarChart data={props.data} />
                <li data-toggle="modal" data-target="#pie"  className="btn-lg btn-outline-primary"> Pie Chart </li>
                <PieChart data= {props.data} />
                <li data-toggle="modal" data-target="#polar" className="btn-lg btn-outline-danger"> Polar Chart </li>
                <PolarChart data={props.data} />
                <li data-toggle="modal" data-target="#doughnut"  className="btn-lg btn-outline-info"> Doughnut Chart </li>
                <DoughnutChart data= {props.data} />
                <li data-toggle="modal" data-target="#line" className="btn-lg btn-outline-success"> Line Chart </li>
                <LineChart data={props.data} />
            </ul>

        </nav>
    )
}