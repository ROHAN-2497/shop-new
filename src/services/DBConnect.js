const DbConnect = async () => {


    try {
        const uri = "mongodb+srv://xrohaislam373:iPiwswvgIKbY1VRF@cluster0.6j6ktbt.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {

    }

}
export default DbConnect 









// pass: iPiwswvgIKbY1VRF
// user name: xrohaislam373