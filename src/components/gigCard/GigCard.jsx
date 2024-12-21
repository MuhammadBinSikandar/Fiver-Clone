import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import "./GigCard.scss"

const GigCard = ({item}) => {
    return (
        <Link to='/gig/123' className='link'>
            <div className="gigCard">
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <div className="detail">
                    <img src="./img/heart.png" alt="" />
                    <span>Starting At</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </Link>
    )
}
GigCard.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        pp: PropTypes.string,
        username: PropTypes.string,
        desc: PropTypes.string,
        star: PropTypes.number,
        price: PropTypes.number
    }).isRequired
};

export default GigCard
