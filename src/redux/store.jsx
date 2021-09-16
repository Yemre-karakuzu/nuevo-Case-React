import { configureStore } from '@reduxjs/toolkit'
import CompanyDetailsReducer from './company/CompanyDetails'
export const store = configureStore({
    reducer: {
        company: CompanyDetailsReducer
    }
})