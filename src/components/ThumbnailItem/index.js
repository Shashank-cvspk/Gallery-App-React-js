// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgList, onClickUpdate} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imgList
  const update = () => {
    onClickUpdate(imageUrl, imageAltText)
  }

  return (
    <li className="item">
      <button type="button" className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={update} />
      </button>
    </li>
  )
}

export default ThumbnailItem
