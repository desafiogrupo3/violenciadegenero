import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: false
}

export const toggleMenu = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        openMenu: (state, action) => {
            state.active = true
        },
        closeMenu: (state, action) => {
            state.active = false
        }
    }
})

export const { openMenu, closeMenu } = toggleMenu.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default toggleMenu.reducer