
export const GiftItem = ({title,url,id}) => {
 
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  )
}
