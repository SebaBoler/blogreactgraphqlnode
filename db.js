import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';
import config from './config';

const sqldb = config.sqldb;

var Conn = new Sequelize(sqldb.database, sqldb.username, sqldb.password, {
  host: sqldb.server,
  port: sqldb.port,
  dialect: sqldb.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Person = Conn.define('person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

const Post = Conn.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
})

Person.hasMany(Post);
Post.belongsTo(Person);

Conn.sync({ force: true})
 .then(()=>{   
     _.times(10, ()=>{
        return Person.create({
            firstName: Faker.name.firstName(),
             lastName: Faker.name.lastName(),
            email: Faker.internet.email()
        })
        .then( (person) => {
            return person.createPost({
                title: `Ksiązka demo kupiona przez ${person.firstName}`,
                content: 'Przykladowy artykul do ksaizki'
            });
        });
    });
});

export default Conn;