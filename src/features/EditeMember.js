import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { memberUpdated } from './memberSlice'
import { useHistory } from 'react-router-dom'

export const EditeMember = (props) => {

    const history = useHistory()

    const { memberId } = props.match.params;

    const dispatch = useDispatch()

    const oldMember = useSelector((state) =>
        state.members.find((member) => member.id === memberId)
    )

    const [member, setMember] = useState(oldMember);


    const onChanged = (e) => setMember({ ...member, [e.target.name]: e.target.value });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(memberUpdated(member));
        history.push("/");
    }

    return (
        <div style={{ margin: 'auto', width: '50%', padding: '20px', border: '3px solid grey' }}>
            <h1>Edite Member</h1>

            <form onSubmit={onHandleSubmit} >
                <label htmlFor="title">Title </label>
                <select id="title" name="title" value={member.title} onChange={onChanged} required >
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                </select>

                <label htmlFor="fname"> Firstname: </label>
                <input name="fname" id="fname" value={member.fname} pattern="[A-Za-z]{1,32}" onChange={onChanged} required></input>

                <label htmlFor="lname"> Lastname: </label>
                <input name="lname" id="lname" value={member.lname} pattern="[A-Za-z]{1,32}" onChange={onChanged} required></input>

                <br /><br />
                <label htmlFor="dob"> Birthday : </label>
                <input type="date" name="dob" id="dob" value={member.dob} onChange={onChanged} required></input>

                <label htmlFor="nation"> Nationality : </label>
                <select id="nation" name="nation" value={member.nation} onChange={onChanged} required >
                    <option value="" selected disabled   > -- please select --</option>
                    <option value="thai">Thai</option>
                    <option value="american">American</option>
                    <option value="laos">Laos</option>
                </select>

                <br /><br />
                <label htmlFor="id"> CitizenID : </label>
                <input id="id" name="id" type="text" value={member.id} onChange={onChanged} pattern="\d*" minLength={13} maxLength={13} required></input>

                <br /><br />
                <label > Gender : </label>

                <input type="radio" id="male" name="gender" checked={member.gender === "male" ? true : false} value="male" onChange={onChanged} required ></input>
                <label htmlFor="male"> Male </label>
                <input type="radio" id="female" name="gender" checked={member.gender === "female" ? true : false} value="female" onChange={onChanged} ></input>
                <label htmlFor="female"> Female </label>
                <input type="radio" id="unisex" name="gender" checked={member.gender === "unisex" ? true : false} value="unisex" onChange={onChanged} ></input>
                <label htmlFor="unisex"> Unisex </label>

                <br /><br />
                <label htmlFor="country"> Mobile Phone : </label>
                <select id="country" name="country" value={member.country} onChange={onChanged} pattern="\d*" required >
                    <option value="+66">+66</option>
                    <option value="+77">+77</option>
                    <option value="+88">+88</option>
                </select> -
                <input type="tel" name="phone" onChange={onChanged} value={member.phone}  minLength={10} maxLength={10} required></input>

                <br /><br />
                <label htmlFor="passport"> Passport No : </label>
                <input type="number" id="passport" name="passport" required minLength={9} maxLength={9} value={member.passport} onChange={onChanged}></input>

                <br /><br />
                <label htmlFor="salary"> Expected Salary : </label>
                <input type="number" id="salary" name="salary" onChange={onChanged} pattern='[0-9]+(\\.[0-9][0-9]?)?' value={member.salary}></input> THB

            <button type="submit" style={{ float: "right", marginRight: '30px' }}  >Submit</button>
            </form>
        </div>
    )
}