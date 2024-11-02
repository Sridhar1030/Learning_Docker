import client from "./client.js";

const res1 = await client.lpush('bikes:repairs', 'bike:1');
console.log(res1);  // 1

const res2 = await client.lpush('bikes:repairs', 'bike:2');
console.log(res2);  // 2

const res3 = await client.rpop('bikes:repairs');
console.log(res3);  // bike:1

const res4 = await client.rpop('bikes:repairs');
console.log(res4);  // bike:2


const res5 = await client.lpush('bikes:repairs', 'bike:1');
console.log(res5);  // 1

const res6 = await client.lpush('bikes:repairs', 'bike:2');
console.log(res6); // 2

const res7 = await client.lpop('bikes:repairs');
console.log(res7);  // bike:2

const res8 = await client.lpop('bikes:repairs');
console.log(res8);  // bike:1


const res9 = await client.llen('bikes:repairs');
console.log(res9); // 0


const res10 = await client.lpush('bikes:repairs', 'bike:1');
console.log(res10);  // 1

const res11 = await client.lpush('bikes:repairs', 'bike:2');
console.log(res11);  // 2

const res12 = await client.lmove('bikes:repairs', 'bikes:finished', 'LEFT', 'LEFT');
console.log(res12);  // 'bike:2'

const res13 = await client.lrange('bikes:repairs', 0, -1);
console.log(res13);  // ['bike:1']

const res14 = await client.lrange('bikes:finished', 0, -1);
console.log(res14);  // ['bike:2']


const res15 = await client.rpush('bikes:repairs', 'bike:1');
console.log(res15);  // 1

const res16 = await client.rpush('bikes:repairs', 'bike:2');
console.log(res16);  // 2

const res17 = await client.lpush('bikes:repairs', 'bike:important_bike');
console.log(res17);  // 3

const res18 = await client.lrange('bikes:repairs', 0, -1);
console.log(res18);  // ['bike:important_bike', 'bike:1', 'bike:2']


const res19 = await client.rpush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res19);  // 3

const res20 = await client.lpush(
  'bikes:repairs', ['bike:important_bike', 'bike:very_important_bike']
);
console.log(res20);  // 5

const res21 = await client.lrange('bikes:repairs', 0, -1);
console.log(res21);  // ['bike:very_important_bike', 'bike:important_bike', 'bike:1', 'bike:2', 'bike:3']


const res22 = await client.rpush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res22);  // 3

const res23 = await client.rpop('bikes:repairs');
console.log(res23);  // 'bike:3'

const res24 = await client.lpop('bikes:repairs');
console.log(res24);  // 'bike:1'

const res25 = await client.rpop('bikes:repairs');
console.log(res25);  // 'bike:2'

const res26 = await client.rpop('bikes:repairs');
console.log(res26);  // None


const res27 = await client.lpush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res27);  // 5

const res28 = await client.ltrim('bikes:repairs', 0, 2);
console.log(res28);  // true

const res29 = await client.lrange('bikes:repairs', 0, -1);
console.log(res29);  // ['bike:5', 'bike:4', 'bike:3']


const res27eol = await client.rpush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res27eol);  // 5

const res28eol = await client.ltrim('bikes:repairs', -3, -1);
console.log(res28eol);  // 'OK'

const res29eol = await client.lrange('bikes:repairs', 0, -1);
console.log(res29eol);  // ['bike:3', 'bike:4', 'bike:5']


const res31 = await client.rpush('bikes:repairs', ['bike:1', 'bike:2']);
console.log(res31);  // 2

const res32 = await client.brpop('bikes:repairs', 1);
console.log(res32);  // { key: 'bikes:repairs', element: 'bike:2' }

const res33 = await client.brpop('bikes:repairs', 1);
console.log(res33);  // { key: 'bikes:repairs', element: 'bike:1' }

const res34 = await client.brpop('bikes:repairs', 1);
console.log(res34);  // null


const res35 = await client.del('new_bikes');
console.log(res35); // 0

const res36 = await client.lpush('new_bikes', ['bike:1', 'bike:2', 'bike:3']);
console.log(res36); // 3


const res37 = await client.set('new_bikes', 'bike:1');
console.log(res37);  // 'OK'

const res38 = await client.type('new_bikes');
console.log(res38);  // 'string'

try {
  const res39 = await client.lpush('new_bikes', 'bike:2', 'bike:3');
  // redis.exceptions.ResponseError:
  // [ErrorReply: WRONGTYPE Operation against a key holding the wrong kind of value]
}
catch(e){
  console.log(e);
}


await client.lpush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res36);  // 3

const res40 = await client.exists('bikes:repairs')
console.log(res40);  // true

const res41 = await client.lpop('bikes:repairs');
console.log(res41);  // 'bike:3'

const res42 = await client.lpop('bikes:repairs');
console.log(res42);  // 'bike:2'

const res43 = await client.lpop('bikes:repairs');
console.log(res43);  // 'bike:1'

const res44 = await client.exists('bikes:repairs');
console.log(res44);  // 0


const res45 = await client.del('bikes:repairs');
console.log(res45);  // 0

const res46 = await client.llen('bikes:repairs');
console.log(res46);  // 0

const res47 = await client.lpop('bikes:repairs');
console.log(res47);  // null


const res48 = await client.lpush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res48);  // 5

const res49 = await client.ltrim('bikes:repairs', 0, 2);
console.log(res49);  // 'OK'

const res50 = await client.lrange('bikes:repairs', 0, -1);
console.log(res50);  // ['bike:5', 'bike:4', 'bike:3']

