import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { memberDeleted, memberSelectDeleted, memberDeleteAll } from './memberSlice'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import '../App.css';

export const MemberList = () => {


    const dispatch = useDispatch()

    const members = useSelector((state) => state.members)
    const [checked, setChecked] = useState([]);
    const [all, setAll] = useState(false);

    const onHandleDeleteOnce = (id) => {
        dispatch(memberDeleted({ id: id }));
    }

    const onHandleDeleteSelect = () => {
        if (all) {
            dispatch(memberDeleteAll())
        } else {
            dispatch(memberSelectDeleted(checked));
            setChecked([]);
        }
    }

    const onHandleSelectAll = () => {
        setAll(!all);
    }

    const onClick = (e) => {
        var exist = checked.find((member) => member.id === e.target.value);
        if (exist) {
            checked.splice(checked.indexOf(exist), 1);
        } else {
            setChecked([...checked, { id: e.target.value, checked: e.target.checked }])
        }
    }

    const renderedMembers = members.map((member) => (
        <tr key={member.id}>
            <td><input type="checkbox" value={member.id} onClick={onClick} ></input></td>
            <td>{member.fname + " " + member.lname}</td>
            <td>{member.gender}</td>
            <td>{member.country + member.phone}</td>
            <td>{member.nation}</td>
            <td><Link to={`/members/${member.id}`}>Edite</Link>/<a href="#" onClick={() => onHandleDeleteOnce(member.id)}>Delete</a></td>
        </tr>
    ))

    return (
        <div style={{ margin: 'auto', width: '50%', padding: '20px' }}>

            <div style={{ marginBottom: '20px' }}>
                <input id="selectAll" onClick={onHandleSelectAll} type="checkbox" name="selectAll"></input>
                <label htmlFor="selectAll"> Select All </label>
                <button onClick={onHandleDeleteSelect} >DELETE</button>
            </div>

            <table >
                <thead>
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>MOBILE PHONE</th>
                        <th>NATIONALITY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderedMembers}
                </tbody>
            </table>
        </div>
    )
}