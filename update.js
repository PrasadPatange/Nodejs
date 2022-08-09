const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
    // console.log(data);
    // update single data :
    // let result = await data.updateOne(
    //     { name:'oppo' },{
    //         $set : { name : 'IPhone', price:200}
    //     }
    // )
    // update multipe data :
    let result = await data.update(
        { name:'oppo' },{
            $set : { name : 'IPhone', price:200}
        }
    )
    console.log(result);
}

updateData();