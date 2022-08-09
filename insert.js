const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    // console.log(db);

    // insert single data :
    const result = await db.insert(
        { name:'real c11',brand:'realme',price:100,category:'mobile'}
        );
        // console.log(result);
        if(result.acknowledged){
            console.log("Data Inserted")
        }
}
insert();