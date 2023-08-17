const initialState = {
  logged: false,
  name2: '',
  password2: '',
}

const Reducer = (state = initialState, action) => {
  let bhil = {
    logged: false,
    name2: '',
    password2: '',
  }
  if (
    action.type === 'SUBMITTED' &&
    action.first1 === 'simon' &&
    action.second1 === 'pathak'
  ) {
    bhil = {
      ...state,
      logged: true,
    }
  } else if (
    action.type === 'SUBMITTED' &&
    action.first1 !== 'simon' &&
    action.second1 === 'pathak'
  ) {
    bhil = {
      ...state,
      name2: 'name is incorrect',
    }
  } else if (
    action.type === 'SUBMITTED' &&
    action.first1 === 'simon' &&
    action.second1 !== 'pathak'
  ) {
    bhil = {
      ...state,
      password2: 'password is incorrect',
    }
  }
  return bhil
}

export default Reducer
