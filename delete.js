const dbConnect = require('./mongodb');

const deleteData = async () =>{
    let data = await dbConnect();
    // console.log(data);
    // delete single data :
    let result = await data.deleteOne({name:'M 40'});
    // delete multiple data :
    // let result = await data.deleteMany({name:'IPhone'});
    console.log(result);
    if(result.acknowledged){
        console.log("Data Deleted")
    }
}
deleteData();