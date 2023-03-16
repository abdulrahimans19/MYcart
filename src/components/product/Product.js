import React from 'react'

const Product = ({product}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div class="card p-3 rounded">
      <img alt=''
        className="card-img-top mx-auto"
        src={product.images[0].image}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <p href='/cart'>{product.name}</p>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
          </div>
          <span id="no_of_reviews">
            {product.numOfReviews}Review
          </span>
        </div>
        <p className="card-text">${product.price}</p>
        <a href="#" id="view_btn" class="btn btn-block">
          View Details
        </a>
      </div>
    </div>
  </div>
  )
}

export default Product
