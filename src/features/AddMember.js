import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { memberAdded } from './memberSlice'

const initial = {
    title: 'Mr',
    country: '+66',
    gender: 'male',
    nation: 'thai'
}

export const AddMember = () => {

    const [member, setMember] = useState(initial);


    const dispatch = useDispatch()

    const onChanged = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        dispatch(memberAdded(member));
        setMember(initial);
    }

    return (
        <div style={{ margin: 'auto', width: '50%', padding: '20px', border: '3px solid grey' }} >
            <form onSubmit={onHandleSubmit} >
                <label htmlFor="title">Title </label>
                <select id="title" name="title" onChange={onChanged} required >
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                </select>

                <label htmlFor="fname" > Firstname: </label>
                <input name="fname" id="fname" onChange={onChanged} pattern="[A-Za-z]{1,32}" required></input>


                <label htmlFor="lname"> Lastname: </label>
                <input name="lname" id="lname" onChange={onChanged} pattern="[A-Za-z]{1,32}" required></input>

                <br /><br />
                <label htmlFor="dob"> Birthday : </label>
                <input type="date" name="dob" id="dob" onChange={onChanged} required></input>

                <label htmlFor="nation"> Nationality : </label>
                <select id="nation" name="nation" onChange={onChanged} required >
                    <option value="thai">Thai</option>
                    <option value="american">American</option>
                    <option value="laos">Laos</option>
                </select>

                <br /><br />
                <label htmlFor="id"> CitizenID : </label>
                <input id="id" name="id" type="text" onChange={onChanged} pattern="\d*" minLength={13} maxLength={13} required ></input>
                <br /><br />
                <label > Gender : </label>

                <input type="radio" id="male" name="gender" value="male" onChange={onChanged} required ></input>
                <label htmlFor="male"> Male </label>
                <input type="radio" id="female" name="gender" value="female" onChange={onChanged} ></input>
                <label htmlFor="female"> Female </label>
                <input type="radio" id="unisex" name="gender" value="unisex" onChange={onChanged} ></input>
                <label htmlFor="unisex"> Unisex </label>

                <br /><br />
                <label htmlFor="country"> Mobile Phone : </label>
                <select id="country" name="country" onChange={onChanged} pattern="\d*" required >
                    <option value="+66">+66</option>
                    <option value="+77">+77</option>
                    <option value="+88">+88</option>
                </select> -
                <input type="tel" name="phone" onChange={onChanged} minLength={10} maxLength={10} required></input>

                <br /><br />
                <label htmlFor="passport"> Passport No : </label>
                <input type="text" id="passport" name="passport" required minLength={9} maxLength={9} onChange={onChanged}></input>

                <br /><br />
                <label htmlFor="salary"> Expected Salary : </label>
                <input type="number" step="1000" id="salary" name="salary" onChange={onChanged} pattern='[0-9]+(\\.[0-9][0-9]?)?' required></input> THB

            <button type="submit" style={{ float: "right", marginRight: '30px' }}  >Submit</button>
            </form>
        </div>
    )
}