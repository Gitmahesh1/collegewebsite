import React, { useRef } from 'react'
import './Test.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Test = () => {

    const slider=useRef();
    let tx=0;

    const  slideForward =()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const  slideBackward =()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }




  return (
    <div className='test'>
        <img src={next_icon} alt='' className='next-btn'onclick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn'onclick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=''/>
                        <div>
                        <h3>Priyanka</h3>
                        <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>
                        choosing to purse my degree at aedusity was one of the best 
                        decision I've ever made.The supportive
                        community,this.state.-of-the-art facilities, 
                        and commitment expectations
                    </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=''/>
                        <div>
                        <h3>Rahul Reddy</h3>
                        <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>
                        choosing to purse my degree at aedusity was one of the best 
                        decision I've ever made.The supportive
                        community,this.state.-of-the-art facilities, 
                        and commitment expectations
                    </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=''/>
                        <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>
                        choosing to purse my degree at aedusity was one of the best 
                        decision I've ever made.The supportive
                        community,this.state.-of-the-art facilities, 
                        and commitment expectations
                    </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=''/>
                        <div>
                        <h3>Sathwik</h3>
                        <span>Edusity,USA</span>
                    </div>
                    </div>
                    <p>
                        choosing to purse my degree at aedusity was one of the best 
                        decision I've ever made.The supportive
                        community,this.state.-of-the-art facilities, 
                        and commitment expectations
                    </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Test
