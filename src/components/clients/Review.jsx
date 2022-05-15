import React from 'react'

const Review = ({ photo, name, date, review, star }) => {
  const stars = () => {
    let iconStar = ['fas fa-star', 'far fa-star']
    let reviewStar = []

    for (let i = 0; i < 5; i++) {
      if (i < star) {
        reviewStar.push(<i className={iconStar[0]}></i>);
      } else {
        reviewStar.push(<i className={iconStar[1]}></i>);
      }
    }

    return reviewStar
  }

  return (
    <div className="col-lg-4 col-md-8 ms-md-auto">
      <div className="card">
        <div className="card-body">
          <div className="author align-items-center">
            <img src={photo} alt="profile" className="avatar shadow" />
            <div className="name ps-2">
              <span>{name}</span>
              <div className="stats">
                <small>Posted on {date}</small>
              </div>
            </div>
          </div>
          <p className="mt-4 ">"{review}"</p>
          <div className="rating mt-3">
            {stars()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review