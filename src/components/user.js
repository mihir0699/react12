import React, {useContext} from 'react'
import AuthContext from '../context/authContext';

const User = () => {
    const authContext = useContext(AuthContext);
    const {role} = authContext;
    return (

        <>
        <div>
        <h1 className='heading'>Welcome to Darwin</h1> <span className='nav'>Hi {role}</span>
        <div style={{display: 'flex', flexWrap : 'wrap', justifyContent : 'space-around', marginTop : '4rem'}}>
            <div className='blockA'>
                <h4 className='block-text'>Block A</h4>
            </div>
            <div className='blockB'>
                <h4 className='block-text'>Block B</h4>
            </div>
        </div>
    </div>

</>
        
    )
}

export default User
