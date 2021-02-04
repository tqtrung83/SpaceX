const {
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
} = require('graphql');

//Create TYPE

//Launch Type

// https://docs.spacexdata.com/

//Root Query
const RootQuery = new GraphQLObjectType({});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
