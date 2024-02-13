import { getCategoriesFromDb } from "@/src/services/category.service";
import {cache} from 'react'
const getCategories = () => {
return getCategoriesFromDb();
}
export default getCategories;