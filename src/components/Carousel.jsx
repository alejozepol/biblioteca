import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';


import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/CarouselItem.scss';

const Carousel = (props) => {
  const { myList } = props;
  return (
    <section className='carousel'>
      <div className='carousel__container'>
      {myList.map(item => (
        <div className='carousel-item' key={item.id}>
          <img className='carousel-item__img' src={item.cover} alt={item.title} />
          <div className='carousel-item__details'>
            <p className='carousel-item__details--title'>{item.title}</p>
            <p className='carousel-item__details--subtitle'>
              {`${item.author}`}
            </p>
            <p className='carousel-item__details--subtitle'>
              {`${item.year}`}
            </p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
Carousel.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
}

const mapStateToProps = state => {

  return {
    myList: state.myList,
  };

};

export default connect(mapStateToProps, null)(Carousel);
