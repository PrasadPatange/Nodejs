const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    // console.log(db);

    // insert single data :
    // const result = await db.insert(
    //     { name:'real c11',brand:'realme',price:100,category:'mobile'}
    //     );
    
    // insert multiple data : use array
    const result = await db.insert(
        [
        { name:'oppo1',brand:'oppo',price:100,category:'mobile'},
        { name:'oppo2',brand:'oppo',price:110,category:'mobile'},
        { name:'oppo3',brand:'oppo',price:120,category:'mobile'}
        ]
        );

        // console.log(result);
        if(result.acknowledged){
            console.log("Data Inserted")
        }
}
insert();