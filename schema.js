const {
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
} = require('graphql');

//API documentation:  https://docs.spacexdata.com/

//Create TYPE

// Rocket Type
const RocketType = GraphQLObjectType({
  name: 'Rocket',
  fields: {
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  },
});

//Launch Type

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: {
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  },
});

//Root Query
const RootQuery = new GraphQLObjectType({});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
