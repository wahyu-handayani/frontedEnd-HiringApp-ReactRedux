import React, { Component } from 'react';
import './styles/Card.css'
import img from './styles2/img1.jpg'

export default class Card extends Component {
  render() {
    console.log(this.props,'iniiiii props')
    console.log(this.props.email,'zzzzzzz')
    return (
    <div class="card">
      <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
      <div class="card_title title-white">
        <p>{this.props.name}</p>
        <p>Skills: {this.props.skill}</p>
        <p>Successrate: 50%</p>
      </div>
    </div>


      // <div>
      //   <div className='card'>
      //     <div className='card-image'>
      //       {/* <img src={img} width='245px'/> */}
      //     </div>
      //     <div className='card-text'>
      //       {/* <span className='date'>Full Stack</span> */}
      //       <h3>{this.props.name}</h3>
      //       <p>
      //         Skill: {this.props.skill || 'Belum diupdate'}
      //       </p>
      //     </div>
      //     <div className='card-stats'>
      //       <div className='stat'>
      //         <div className='value'>
      //           {this.props.total_project}
      //         </div>
      //         <div className='type'>Project</div>
      //       </div>
      //       <div className='stat border'>
      //         <div className='value'>{this.props.successrate}%</div>
      //         <div className='type'>Success Rate</div>
      //       </div>
      //       {/* <div className='stat'>
      //         <div className='value'>32</div>
      //         <div className='type'>comments</div>
      //       </div> */}
      //     </div>
      //   </div>
      // </div>
    );
  }
}