class Repository{
    findAll(){
        console.log("find all repositories");
    }
}

class MongoDbRepository extends Repository{
    findAll() {
        console.log("find all repositories by mongodb");
    }
}

class PostgresRepository extends Repository{
    findAll(){
        console.log("find all repositories by postgres");
    }
}

const db1 = new PostgresRepository();
db1.findAll();

const db2 = new MongoDbRepository();
db2.findAll();