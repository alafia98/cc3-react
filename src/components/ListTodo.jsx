import React from 'react'
import { useSelector } from 'react-redux';
import {GrCompliance} from 'react-icons/gr';
import {MdIncompleteCircle} from 'react-icons/md';

export default function ListTodo() {

  const Selecteduser = useSelector(state => state.user.selectedUser);
  const listTodos = useSelector(state => state.todo.data).filter(item => item.user===Selecteduser);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>todoId</th>
                    <th>description</th>
                    <th>completed or not</th>
                </tr>
            </thead>
            <tbody>
                    {listTodos.lenght !==0 &&
                        listTodos.map(item=> 
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.todo}</td>
                                <td>{()=> {
                                    if(item.completed === true) {
                                        <GrCompliance/>
                                    }else{
                                        <MdIncompleteCircle/>
                                    }
                                }}</td>
                            </tr>
                            
                            )
                    }
            </tbody>
        </table>
    </div>

  )
}
