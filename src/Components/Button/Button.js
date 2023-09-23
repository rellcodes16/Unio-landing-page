import './Button.css'

const Button = ({ text, color }) => {
  return (
    <div className='btn'>
        <button style={{ backgroundColor: color}}>
            {text}
        </button>
    </div>
  )
}

export default Button