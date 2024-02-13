const DbConnect = async () => {
    let db;

    try {
        const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.6j6ktbt.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.db("shopNew").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {

    }


}
export default DbConnect








