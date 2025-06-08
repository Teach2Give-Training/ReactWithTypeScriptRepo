
export const Message = ({greet, who}:{greet:string,who:string}) => {
  return (
    <div>
        <h3>{greet}, {who}</h3>
    </div>
  )
}
