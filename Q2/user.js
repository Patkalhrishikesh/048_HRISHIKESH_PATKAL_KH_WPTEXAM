const mysql = require("mysql");
const Promise = require("bluebird");
const { query } = require("express");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "message",
};

//    checking database connection ..

async function connectionCheck() {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  await Connection.endAsync();
  console.log("data base connection check successfully ...!");
}

//  connectionCheck();

async function addmsg(msg) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  let sql = `insert into messaget(message) values(?)`;
  await Connection.queryAsync(sql, [msg.message]);
  await Connection.endAsync();
  console.log("message added successfully...!");
}

const msg = {
  message: "hi hrishikesh...",
};

//  checking of msg adding in database
//   addmsg(msg);

async function showmsg(msg) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  let sql = `select * from messaget`;
  const list = await Connection.queryAsync(sql, []);
  await Connection.endAsync();
  console.log("message selection  successfully...!");
  console.log(list);
  return list;
}

//   showmsg();

module.exports = { showmsg, addmsg };
