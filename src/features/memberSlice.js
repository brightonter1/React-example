import { createSlice } from '@reduxjs/toolkit'
import _, { forEach } from 'lodash'


const memberSlice = createSlice({
    name: 'members',
    initialState: localStorage.getItem('Member') ? JSON.parse(localStorage.getItem('Member')) : [],
    reducers: {
        memberAdded(state, action) {
            state.push(action.payload)
            localStorage.setItem('Member', JSON.stringify(state));
        },
        memberDeleted(state, action) {
            const { id } = action.payload
            var delMember = state.find((member) => member.id === id);
            if (delMember) {
                state.splice(state.indexOf(delMember), 1);
                localStorage.setItem('Member', JSON.stringify(state));
            }
        },
        memberUpdated(state, action) {
            const { id } = action.payload;
            var existMember = state.find((member) => member.id === id);
            if (existMember) {
                Object.assign(existMember, action.payload);
                localStorage.setItem('Member', JSON.stringify(state));
            }
        },
        memberSelectDeleted(state, action) {
            var update;
            const delMember = action.payload;
            delMember.forEach(del => {
                update = _.remove(state, function(member){
                    return member.id === del.id
                })
            });
            localStorage.setItem('Member', JSON.stringify(state));
        },
        memberDeleteAll(state, action){
            _.remove(state)
            localStorage.setItem('Member', JSON.stringify([]));
        }

    }
})

export const { memberAdded, memberDeleted, memberUpdated, memberSelectDeleted, memberDeleteAll } = memberSlice.actions

export default memberSlice.reducer