import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow = "<";
var status = {
  1: 'Suspended',
  2: 'Completed',
  3: 'Cancelled'
};
var rightArrow = '>';

var Appointments = {
  "name": "Brahmam",
  'employeeid': 123456789,
  'appointmenton': new Date().toLocaleDateString(),
  'email': 'person@gmail.com',
  'phone': 123456789,
  'orderinfo': {
    'status': status[1],
    'Door': "221B",
    'Time': new Date().toLocaleTimeString()
  },
  'person': {
    'avatar': 'https://www.w3schools.com/howto/img_avatar.png',
    'title': 'Boltart Bosbessesn',
    'description': ' is simply dummy text of the printing and typesetting industry'
  }
}
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}

      <div className="profile-details">
        <div className="nav-container">
          <div className="nav-arrow">
            <a href="#">{arrow}</a>
          </div>
          <div className='nav-title'>
            <h1>{Appointments.name}</h1>
            <span className="nav-text">{Appointments.employeeid}</span>
          </div>
          <div className='nav-btn'>
            <button className="btn">Print</button>
          </div>
        </div>

        <div className="customer-info block">
          <p className="text">
            <span>Appointment on: </span>
            {Appointments.appointmenton}
          </p>

          <p className="text">
            <span>Email: </span>
            {Appointments.email}
          </p>

          <p className="text">
            <span>Phone: +</span>
            {Appointments.phone}
          </p>
        </div>

        <div className="order-info grid block">
          <section className="one">
            <p className="text-label">Status</p>
            <ul className='order-status'>
              <li>{Appointments.orderinfo.status}</li>
            </ul>
            {/* <p className="order-status">{Appointments.orderinfo.status}</p> */}
          </section>

          <section className="one">
            <p className="text-label">Door</p>
            <p className="order-status">{Appointments.orderinfo.Door}</p>
          </section>

          <section className="one">
            <p className="text-label">Time</p>
            <p className="order-status">{Appointments.orderinfo.Time}</p>
          </section>
        </div>

        <div className="product-list block">
          <div className="prod-one">
            <label className="chkbox">
              <input type="checkbox" className="prod-chkbox" value="">
              </input>
              <span className='cust-chkbox-ind'></span>
              <img className='avatar' src={Appointments.person.avatar} width="100" height='100' />
            </label>
          </div>
          <div className='prod-two'>
            <a href='#' className='prod-description'>
              <div className='prod-info'>
                <h3 className='prod-title'>{Appointments.person.title}</h3>
                <p className='prod-text'>{Appointments.person.description}</p>
              </div>
            </a>
          </div>
          <div className='prod-three'>
            <span className="prod-arrow">{rightArrow}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
