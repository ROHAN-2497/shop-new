import DbConnect from "./DbConnect"
const getCategoriesFromDb = async () => {
    const db = await DbConnect();
    const categoriesCollection = db.collection("categories");
    return categoriesCollection.find({}).toArray();
}  