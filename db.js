const { Client } = require("pg");

// Two ways to define connection
// The first one here is called URI

const connectString = 'postgresql://sysadmin:123@127.0.0.1/notes';
let db = new Client({
    connectionString: connectString
});

// This one below is the other way

// const client = new Client({
//     user: "sysadmin",
//     password: "123",
//     host: "127.0.0.1",
//     port: 5432,
//     database: "testdb"
// });

db.connect()
    .then(() => { console.log("connected successfully") })
    .catch((e) => { console.log(e) })


module.exports = db;

// client.query('SELECT * from users', (err, res) => {
//     console.log(err, res.rows)
//     //    client.end()
// })

// const insertFunc = async () => {
//     try {
//         const result = await client.query("INSERT INTO users(id, firstName, lastName) VALUES(2, 'Ahmed', 'Shakeel')");
//         console.log(result);
//         //client.end();
//     } catch (error) {
//         console.log(error)
//     }
// }
// insertFunc();

// client.end();
