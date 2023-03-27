import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {HiArrowSmallDown} from 'react-icons/hi2'
import How from '../How/How';
import Review from '../Review/Review';
import Review_sec from '../Review_sec/Review_sec';

function Home() {

    return (
        <div>
            <Navbar />
            <div className='bgC'>
                <button className='float-btn'>
                    <HiArrowSmallDown/>
                </button>
                <div className='bg'>
                    <div className='left'>
                        <p className='title'>Welcome to the Home Page</p>
                        <h1 className='header'>We love to hear your feedback</h1>
                        <p className='sub'>NPS®️ software to help your business deliver great customer experiences</p>
                        <form>
                            <div className='form-group'>
                                <input className='form-control' placeholder='Enter your company name' type='text'/>
                                <button>
                                    <p>Take tour</p>
                                    <div>
                                        <MdKeyboardDoubleArrowRight/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='right'>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div className='card_1'>
                                <div className='card_1_head'>
                                    <div>
                                        <h4>Reason for your score</h4>
                                        <p>Lorem dummy text</p>
                                    </div>
                                    <div className='card_1_icon'>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='pp'>
                                        <div className="avatar">
                                            <img className='avatar_pp' src='https://i.pravatar.cc/200' />
                                        </div>
                                        <div className='p-name'>
                                            <h4>John Doe</h4>
                                            <p style={{fontSize: '13px',paddingTop: '5px', color: '#d9d6dc'}}>Lorem ipsum dolor sit amet, consectetur adipisc.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p style={{fontSize: '13px',paddingTop: '20px', color: '#d9d6dc'}}>Task</p>
                                        <h4 style={{paddingTop: '10px'}}>Agency landing page for creative agency</h4>

                                        <div className='small_card'>
                                            <h4>Property with Invision</h4>
                                            <div>
                                                <p style={{fontSize: '13px',paddingTop: '5px', color: '#d9d6dc'}}>Completed</p>
                                                <p style={{fontSize: '13px',paddingTop: '5px', color: '#d9d6dc'}}>22 Janunary 2023</p>
                                            </div>
                                        </div>

                                        <div className='small_card'>
                                            <h4>Visualization with Sketch</h4>
                                            <div>
                                                <p style={{fontSize: '13px',paddingTop: '5px', color: '#d9d6dc'}}>Running</p>
                                                <p style={{fontSize: '13px',paddingTop: '5px', color: '#d9d6dc'}}>22 Janunary 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card_2'></div>
                            <div className='card_3'></div>
                        </div>
                    </div>
                </div>
            </div>
            <How />
            <Review/>
            <Review_sec/>
        </div>
    )
}

export default Home