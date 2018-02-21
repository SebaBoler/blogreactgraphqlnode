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
            personId: {
                type : GraphQLInt,
                resolve(person) {
                    return person.personId;
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(person) {
                    return person.firstName;
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(person) {
                    return person.lastName; 
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
                    return person.getPost();                
                }
            }
        };    
    }
});

const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'tabela Post',
    fields: () => {
        return {
             postId: {
                 type: GraphQLInt,
                 resolve(post) {
                     return post.postId;
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
    description: 'Person+Post',
    fields: () => {
        return {
            person: {
                type: new GraphQLList(Person),
                // szukanie po id i email
                args: {
                    personId: {
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
            post: {
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