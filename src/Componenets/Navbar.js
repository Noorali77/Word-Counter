import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand">Word Counter</a>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode == 'light'?'dark':'light'} Mode</label>
</div>
  </div>
</nav>
        </div>
    )
}
