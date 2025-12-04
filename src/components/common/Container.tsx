
const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="max-w-[1180px] px-2.5 lg:px-auto mx-auto">
      {children}
    </div>
  )
}

export default Container
