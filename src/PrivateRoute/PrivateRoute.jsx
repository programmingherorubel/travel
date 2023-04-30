import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className='mx-auto text-center'><div class="spinner-border text-info" role="status"></div></div>
     }

    if(user){
        return children
    }

    return <Navigate to='/login'state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;