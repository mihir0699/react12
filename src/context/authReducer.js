export default (state, action) => {
    switch (action.type) {
        case "SET_ERROR":
            console.log(action.payload)
            return{
                ...state,
                errors : action.payload
            }

            case "REMOVE_ERROR":
                return{
                    ...state,
                    errors : null
                }
                case "SET_USER":
                    return{
                        isAuthenticated: true,
                        user: 'user@test.com',
                          role: 'user',
                        errors : null
                    }
                    case "SET_ADMIN":
                        return{
                            isAuthenticated: true,
                            user: 'admin@test.com',
                              role: 'admin',
                            errors : null
                        }
        }
       
    }
