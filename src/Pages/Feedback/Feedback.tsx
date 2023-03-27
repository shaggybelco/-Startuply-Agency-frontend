import React from 'react';
import './feedback.scss';
import { TbHandClick } from 'react-icons/tb'

function Feedback() {
    return (
        <div className='f_f'>
            <div className='f_cnt'>
                <div className='f_icon'>
                    <TbHandClick />
                </div>
            </div>
            <div className='f_txt'>
                <div>
                    <h1>Rated No. 1 Enterprise Feedback Management Platform</h1>
                </div>
            </div>

            <div className="f_sec">
                <div className='f_c'>
                    <div>
                        <div></div>
                        <h1>01</h1>
                    </div>
                    <div>
                        <h2>Search company</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto accusamus officiis possimus! </p>
                    </div>
                </div>
                <div className='f_c'>
                    <div>
                        <div></div>
                        <h1>02</h1>
                    </div>
                    <div>
                        <h2>Count your rating</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto accusamus officiis possimus! </p>
                    </div>
                </div>
                <div className='f_c'>
                    <div>
                        <div></div>
                        <h1>03</h1>
                    </div>
                    <div>
                        <h2>Tell them your experience</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iusto accusamus officiis possimus! </p>
                    </div>
                </div>
            </div>

            <div className='f_card'>
                <h1>You deserve best customer feedback</h1>
                <div className="f_h">
                    <div>Get started</div>
                </div>
            </div>
        </div>
    )
}

export default Feedback