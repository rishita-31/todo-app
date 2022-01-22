import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    
                    {props.searchBar? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: ""
                    /*it will work as if else stmt 
                    ? k baad if wala and : k baad else wala*/
                    }
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string, /*means title string chahiye.. agr number likhenge like {45} to wo run to ho jaega bt console m error dikha dega ki string ni h ye.. invalid h
    isse debug krte wqt errors mil jaenge jldi
    */
    searchBar: PropTypes.bool.isRequired
}