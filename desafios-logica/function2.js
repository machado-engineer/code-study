function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database = ${databaseName}`);
}

createStringConnection("db_users", "kalani", "1234");