

const Image = ({imgUrl,alt,className}:{imgUrl:string,alt:string,className?:string}) => {
  return (
        <img src={imgUrl} alt={alt} className={className} />
  )
}

export default Image
