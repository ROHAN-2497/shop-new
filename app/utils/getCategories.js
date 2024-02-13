import { getCategoriesFromDb } from "@/src/services/category.service";

const getCategories = () => {
return getCategoriesFromDb();
}
export default getCategories;