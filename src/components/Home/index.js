import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import acessed from '../Action/action'

const Home = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const news12 = useSelector(state => state)
  console.log(news12)
  const dispatch = useDispatch()
  const namechange = event => {
    setName(event.target.value)
  }

  const passwordchnge = event => {
    setPass(event.target.value)
  }

  const submitting = event => {
    event.preventDefault()
    dispatch(acessed({type: 'SUBMITTED', first: name, second: pass}))
  }

  return (
    <>
      <form onSubmit={submitting}>
        <label htmlFor="name">Name</label>
        <br />
        <input onChange={namechange} type="text" id="name" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input onChange={passwordchnge} type="text" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Home
