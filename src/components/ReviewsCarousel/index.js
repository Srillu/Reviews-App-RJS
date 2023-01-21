// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevIndex => ({index: prevIndex.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {index} = this.state

    if (index < reviewsList.length - 1) {
      this.setState(prevIndex => ({index: prevIndex.index + 1}))
    }
  }

  renderReviewsItem = review => {
    const {imgUrl, username, description, companyName} = review
    return (
      <div>
        <img alt={username} src={imgUrl} />
        <p className="name">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const currentIndex = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-btn-container">
          <div>
            <button
              className="btns"
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
          </div>
          <div className="reviews">{this.renderReviewsItem(currentIndex)}</div>

          <div>
            <button
              className="btns"
              type="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
