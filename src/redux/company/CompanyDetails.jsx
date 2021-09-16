import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getComponyList } from '../../services/service'
export const fetchCompanyData = createAsyncThunk('company/getCompanyDetails', async () => {

    const data = await getComponyList()
    return data;
})
export const companyDetail = createSlice({
    name: "company",
    initialState: {
        value: [],
        tempValue: []
    },
    reducers: {
        setCompanyData: (state, data) => {
            state.tempValue = data.payload;
        }
    },
    extraReducers: {
        [fetchCompanyData.fulfilled]: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setCompanyData } = companyDetail.actions
export default companyDetail.reducer
