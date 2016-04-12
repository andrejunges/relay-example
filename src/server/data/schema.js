import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const GROUP = {
  users: [
    { "id": "1", "name": "Eduardo", "lastName": "Rost",      "addresses": [{ "id":"1", "street":"rua bento",   "number":"123" }] },
    { "id": "2", "name": "Renan",   "lastName": "Santos",    "addresses": [{ "id":"2", "street":"rua alfredo", "number":"456" }, { "id": "3", "street":"rua melo", "number": "543" }] },
    { "id": "3", "name": "Fabiano", "lastName": "Menegussi", "addresses": [{ "id":"4", "street":"rua afonso",  "number":"789" }] },
    { "id": "4", "name": "Andre",   "lastName": "Junges",    "addresses": [{ "id":"5", "street":"rua cabral",  "number":"0"   }] }
  ],
};

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    id: { type: GraphQLString },
    street: { type: GraphQLString },
    number: { type: GraphQLInt }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    addresses: { type: new GraphQLList(AddressType) }
  })
});

const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    users: {type: new GraphQLList(UserType)},
  }),
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      group: {
        type: GroupType,
        resolve: () => GROUP,
      },
    }),
  }),
});
