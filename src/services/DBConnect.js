import { MongoClient, ServerApiVersion } from "mongodb";
/**
 * @type {import("mongodb").Db}
 */
let db;
const DbConnect = async () => {
    if (db) return db;
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6j6ktbt.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db("shopNew")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db;
    } catch (error) {

    }


}
export default DbConnect








