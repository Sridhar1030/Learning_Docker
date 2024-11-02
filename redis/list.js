import client from "./client.js";

async function init() {
    await client.rpush("names", "Alice")
    await client.rpush("names", "Bob")
    await client.rpush("names", "Charlie")

    //lpush
    await client.lpush("names", "Dave")
    await client.lpush("names", "Eve")
    await client.lpush("names", "Frank")

    //expire any  key
    

    //get all names
    const names = await client.lrange("names", 0, -1)

    console.log(names)
}
init()