

const Listitem = ({key,item,className}:{key:number,item:{id:number,title:string},className?:string}) => {
    console.log(item.title)
  return (    
        <li className={className} key={key}>{item.title}</li>    
  )
}

export default Listitem
