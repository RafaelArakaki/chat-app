type MessageBallonProps = {
  name: string,
  text: string,
}

const MessageBallon = ({ name, text }: MessageBallonProps) => {

  const isYourMessage = name === localStorage.getItem('userName');

  const colorMessage = (isTrue: boolean) => {
    return isTrue ? "bg-emerald-400" : "bg-slate-400";
  }

  const positionMessage = (isTrue: boolean) => {
    return isTrue ? "text-right" : "text-left";
  }

  return (
    <div className={`${positionMessage(isYourMessage)} mb-2`}>
      <p className="text-sm text-slate-500">{isYourMessage ? "Você" : name}</p>
      <div className={`
        ${colorMessage(isYourMessage)}
        inline-block text-white rounded-md py-1 px-2
      `}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default MessageBallon;