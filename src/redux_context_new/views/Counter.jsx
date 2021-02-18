
function Counter (props) {
  const { caption, value, onClickUpdateBtn } = props;

  return (<div>
    <button onClick={() => onClickUpdateBtn(true)}>+</button>
    <button onClick={() => onClickUpdateBtn(false)}>-</button>
    <span>{caption} count: {value}</span>
  </div>)
}

export default Counter;