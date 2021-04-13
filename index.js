const { Client } = require("pg");
const connectString = 'postgresql://sysadmin:123@127.0.0.1/testdb';
const client = new Client({
    connectionString: connectString
});


// const client = new Client({
//     user: "sysadmin",
//     password: "123",
//     host: "127.0.0.1",
//     port: 5432,
//     database: "webstore"
// });

client.connect()
client.query('SELECT * from users', (err, res) => {
    console.log(err, res.rows)
    //    client.end()
})

const insertFunc = async () => {
    try {
        const result = await client.query("INSERT INTO users(id, firstName, lastName) VALUES(2, 'Ahmed', 'Shakeel')");
        console.log(result);
        //client.end();
    } catch (error) {
        console.log(error)
    }
}
insertFunc();

// client.end();
