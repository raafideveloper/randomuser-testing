/* eslint-disable no-useless-concat */
import React, { Component } from 'react';
import './style.css';

class UserData extends Component {
  render() {
    const { users, fetchMoreData } = this.props
    return (
      <div className='container'>
        <div className="loading-section">
          {users.length === 0 && <h1>Loading...</h1>}
        </div>
        <div>
          {users.map((users, index) => {
            return (
                <div key={index} className='content'>
                  <div className="content-section">
                    {users.dob.age <= 31 ? (
                      <div className="card" style={{backgroundColor: 'red'}}>
                        <div className='user-picture'>
                          <img src={`${users.picture.large}`} alt="gambar"/>
                        </div>
                        <div className="user-section">
                        <div className='user-name'>
                          {`Nama\u00A0: ${users.name.title}${users.name.first}${users.name.last}`}
                        </div>
                        <div className='user-age'>
                          {`Umur\u00A0: ${users.dob.age}`}
                        </div>
                        <div className='user-registered'>
                          {`Terdaftar: ${users.registered.date}`}
                        </div>
                        <div className='user-location'>
                          {`Kota\u00A0: ${users.location.city}`} <br />
                          {`Negara\u00A0: ${users.location.state}`}  <br />
                          {`Kodepos\u00A0: ${users.location.postcode}`}  <br />
                        </div>
                        <div className='user-email'>
                          {`Email\u00A0: ${users.email}`}
                        </div>
                      </div>
                      </div>
                    ) : users.dob.age <= 56 ? (
                      <div className="card" style={{backgroundColor: 'green'}}>
                        <div className='user-picture'>
                        <img src={`${users.picture.large}`} alt="gambar"/>
                      </div>
                        <div className="user-section">
                    <div className='user-name'>
                      {`Nama\u00A0: ${users.name.title}${users.name.first}${users.name.last}`}
                    </div>
                    <div className='user-age'>
                      {`Umur\u00A0: ${users.dob.age}`}
                    </div>
                    <div className='user-registered'>
                      {`Terdaftar: ${users.registered.date}`}
                    </div>
                    <div className='user-location'>
                      {`Kota\u00A0: ${users.location.city}`} <br />
                      {`Negara\u00A0: ${users.location.state}`}  <br />
                      {`Kodepos\u00A0: ${users.location.postcode}`}  <br />
                    </div>
                    <div className='user-email'>
                      {`Email\u00A0: ${users.email}`}
                    </div>
                  </div>
                      </div>
                    ) : users.dob.age > 56 && (
                      <div className="card" style={{backgroundColor: 'blue'}}>
                        <div className='user-picture'>
                        <img src={`${users.picture.large}`} alt="gambar"/>
                      </div>
                        <div className="user-section">
                    <div className='user-name'>
                      {`Nama\u00A0: ${users.name.title}${users.name.first}${users.name.last}`}
                    </div>
                    <div className='user-age'>
                      {`Umur\u00A0: ${users.dob.age}`}
                    </div>
                    <div className='user-registered'>
                      {`Terdaftar: ${users.registered.date}`}
                    </div>
                    <div className='user-location'>
                      {`Kota\u00A0: ${users.location.city}`} <br />
                      {`Negara\u00A0: ${users.location.state}`}  <br />
                      {`Kodepos\u00A0: ${users.location.postcode}`}  <br />
                    </div>
                    <div className='user-email'>
                      {`Email\u00A0: ${users.email}`}
                    </div>
                  </div>
                      </div>
                    )}
                  </div>
                </div>
                )
              }
            )
          }
          {users.length >= 10 && <button className='load-btn' onClick={() => fetchMoreData()}>Load More</button>}
        </div>
      <div className="note">
        <h2>CATATAN</h2>
        <p>Umur kurang dari 31 tahun berwarna <strong>RED</strong></p>
        <p>Umur diantara 31 tahun sampai 56 tahun berwarna <strong>GREEN</strong></p>
        <p>Umur lebih dari 56 tahun berwarna <strong>BLUE</strong></p>
      </div>
      </div>
    )
  }
}


export default UserData