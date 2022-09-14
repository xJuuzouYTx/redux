import React, { useEffect } from 'react';
import { fetchAllUsers } from '../redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const { list: users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
        <div className='container'>
            <div className='row'>
                {
                    users.map((user, index) => (
                        <div key={index} className='col-md-3'>
                            <div className='card'>
                                <img src={user.avatar} alt="avatar" />
                                <div className='card-body'>
                                    <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                                    <p className='card-text'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList