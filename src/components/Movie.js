const Movie = ({image, title, age, tags, description}) => {
  return (
    <div className="w-[300px] text-white my-2 mx-1 transition-all duration-500 hover:scale-105" >
        <img className="h-[170px] w-[300px]" src={image} alt="" />
        <h2 className="pl-2 my-2">{title}</h2>
        <p className="pl-2 my-2">{age}</p>
        <p className="pl-2 my-2">{tags}</p>
        <p className="pl-2 my-2">{description}</p>
    </div>
  )
}

export default Movie