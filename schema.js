import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from "graphql";
import db from './db';

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'tabela Person',
    fields: () => {
        return {
            id: {
                type : GraphQLInt,
                resolve(person) {
                    return person.id;
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(person) {
                    return person.firstName;
                }
            },
            email: {
                type: GraphQLString,
                resolve(person) {
                    return person.email;
                }
            },
            posts: {
                type: new GraphQLList(Post),
                resolve(person) {
                    return person.getPosts();                
                }
            }
        };    
    }
});

const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'Tabela Post',
    fields: () => {
        return {
             id: {
                 type: GraphQLInt,
                 resolve(post) {
                     return post.id;
                 }
             },
             title: {
                 type: GraphQLString,
                 resolve(post) {
                     return post.title;
                 }
             },
             content: {
                 type: GraphQLString,
                 resolve(post) {
                     return post.content;
                 }
             }
        }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'rootQuery moje',
    fields: () => {
        return {
            people: {
                type: new GraphQLList(Person),
                // szukanie po id i email
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    email: {
                        type: GraphQLString
                    },
                },
                resolve(root, args) {
                    return db.models.person.findAll({where: args});
                }
            },
            posts: {
                type: new GraphQLList(Post),
                resolve(root,args) {
                    return db.models.post.findAll({where: args});
                }
            }
        };
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;