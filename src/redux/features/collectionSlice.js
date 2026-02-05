import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name:'collection',
    initialState

})