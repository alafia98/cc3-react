import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from "../redux/UserSlice";
import {getTodos} from "../redux/TodoSlice";
import { useNavigate } from 'react-router-dom';
import User from './User';

export default function ListUser() {
    const dispatch = useDispatch();

    const listusers = useSelector((state) => state.user.data).map(
        (item) => item.users.id
    );
    const selectedusers = useSelector(state => state.user.selectedUser);
  
    useEffect(() => {
        dispatch(getUsers());
        dispatch(getTodos());
    },[dispatch]);

    return (
    <div>
        <div value={selectedusers} 
            onChange={(e) => dispatch(addUser(e.target.value))}>
            {listusers.map((item, index) => (
                    <User key={index} value={item}/>
            ))}
        </div>
    </div>
  )
}
