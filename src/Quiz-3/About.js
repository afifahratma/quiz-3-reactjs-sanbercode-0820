import React,{ Component } from "react"
import {Link} from 'react-router-dom'
import './public/css/style.css'

class About extends Component{
    render(){
    return (
    <div>
      <header>
        <title>about</title>
      </header>
      <div className="tentang">
        <fieldset>
        <h1 style={{textAlign: 'center'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li><strong style={{width: '100px'}}>Nama:</strong> Afifah Ratma Mahardika</li> 
          <li><strong style={{width: '100px'}}>Email:</strong> afifahratma@gmail.com</li> 
          <li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan: </strong> Windows 10</li>
          <li><strong style={{width: '100px'}}>Akun Gitlab:</strong> afifahratma</li> 
          <li><strong style={{width: '100px'}}>Akun Telegram:</strong> https://t.me/afifahratma</li> 
        </ol>
        </fieldset>
      </div>
     
        <button>
          <Link to="/" > kembali ke index </Link>
          </button>
    </div>
  );
}
}

export default About;
