

const Title = ({mainTitle,subTitle}:{mainTitle:string,subTitle:string}) => {
  return (
    <div>
        <h2 className="font-anek font-bold text-[36px] text-center text-primary">{mainTitle}</h2>
        <p className="font-anek font-medium text-[20px] text-center text-primary">{subTitle}</p>
      
    </div>
  )
}

export default Title
