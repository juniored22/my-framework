## Commands

create atbale migration OCM
```
    // Schrma
    sequelize migration:create --name=create-users  

    // Run schema create table definide in schema
    sequelize db:migrate 

    //seeders 
    sequelize-cli seed:generate --name demo-user 

    // run seeders
    sequelize-cli db:seed:all
```

## Sequelize ROW query

https://sequelize.org/master/manual/raw-queries.html

```
    const [results, metadata] = await connection.query("SELECT * FROM  users ");
```

### Mongodb

```
DEBUG=http NOSQL=true nodemon index.js
```