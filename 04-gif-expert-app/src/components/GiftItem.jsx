import PropTypes from 'prop-types';

export const GiftItem = ({title,url,id}) => {
 
  return (
    <div className="card">
      <img src={url} alt={title} />
      <a>{title}</a>
    </div>
  )
}

GiftItem.propTypes = {
  title:PropTypes.string.isRequired,
  url  :PropTypes.string.isRequired
}