import { commonStructure } from "./commonStructure";

import BASE_URL from "./base_url"

// admin login
export const adminLoginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
}
export const addEmployee=async(body,header)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/add-employee`,body,header)
}