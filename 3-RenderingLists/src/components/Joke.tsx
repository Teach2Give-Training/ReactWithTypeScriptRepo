import "./Joke.scss"


export const Joke = ({rating,joke}:{joke:string,rating:number}) => {

    const ratingFunction =(rating:number)=>{
        if(rating ===1 ){
            return <span>★☆☆☆☆</span>
        } else if (rating === 2) {
            return <span>★★☆☆☆</span>
        } else if (rating === 3) {
            return <span>★★★☆☆</span>
        } else if (rating === 4) {
            return <span>★★★★☆</span>
        } else if (rating === 5) {
            return <span>★★★★★</span>
        } else {
            return <span>☆☆☆☆☆</span>
        }
    }


  return (
    <div className="joke">
        <h4 className="jokeName">{joke} </h4>
        <p className="rating">{ratingFunction(rating)}</p>
    </div>
  )
}
