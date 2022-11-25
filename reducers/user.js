import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        token: "", // Initialement, on a défini un objet qui a un champ token, firstname et username
        username: "",
        firstname: "",
    },
};

export const UserSlice = createSlice({
    name: 'User',

    initialState,
    reducers: {
        addUserToStore: (state, action) => {
            // On va mettre à jour les différents champs qu'on a (token, username et firstname) avec les données de l'utilisateur qu'on récupère
            state.value.token = action.payload.token;
            state.value.username = action.payload.username;
            state.value.firstname = action.payload.firstname;
            // après ça, notre objet d'état sera :
            // state.value = {
            //    token: 'nouveauToken',
            //    username: 'Pseudo',
            //    firstname: 'Prénom',
            // }

        },
        deleteUserToStore: (state, action) => {
            state.value.token = "";
            state.value.username = "";
            state.value.firstname = "";
        },
    }
});


export const { addUserToStore, deleteUserToStore } = UserSlice.actions;
export default UserSlice.reducer;