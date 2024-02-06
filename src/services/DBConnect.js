const DbConnect = () => {

  
    try {
        const uri = "mongodb+srv://xrohaislam373:iPiwswvgIKbY1VRF@cluster0.6j6ktbt.mongodb.net/?retryWrites=true&w=majority";
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    } catch (error) {
        
    }

}










// pass: iPiwswvgIKbY1VRF
// user name: xrohaislam373