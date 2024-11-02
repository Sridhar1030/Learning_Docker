import client from './client.js';

async function init() {
    await client.set("name", "Alice")
    await client.set("name:1", "Alice")
    await client.set("name:2", "Bob")
    await client.set("name:3", "Charlie")

    await client.expire("name:3", 10)
    //get all names
    const keys = await client.keys("name:*");
    console.log(keys); // This will log an array of keys

    // Get the values for all the matched keys
    const names = await client.mget(keys);
    console.log(names); // This will log an array of names

    //delete name 4
    await client.del("name:4")

    
    
    const result = await client.get("name:1")
    console.log(result)
}

init()
