// Write your code here
const Message = props => {
  const {msg} = props
  if (msg === 'true') {
    return <h1>Please Login</h1>
  }
  return <h1>Welcome User</h1>
}
export default Message
