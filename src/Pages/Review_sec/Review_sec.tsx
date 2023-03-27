import './Review.scss';
import customer from '../../assets/customer.svg';
import world from '../../assets/world.svg';

function Review_sec() {
    return (
        <div className='r_container'>
            <div className='rf'>
                <div className='rf_2'>
                    <img src={world} alt='none' />
                    <h3>Automate customer reviews, referrals</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo provident nulla fugit fuga aut assumenda numquam praesentium expedita earum error quia minima atque et, aspernatur delectus veritatis dolor accusamus.</p>
                    <div> How it works</div>
                </div>
                <div className='rf_1'>
                    <img src={customer} alt='none' />
                </div>

            </div>
        </div>
    )
}

export default Review_sec