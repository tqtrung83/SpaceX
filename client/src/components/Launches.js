import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  return (
    <>
      <h1 className='display-4 my-3'>Launches</h1>
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        console.log(error)
      ) : (
        data.launches.map((launch, index) => (
          <LaunchItem key={index} launch={launch} />
        ))
      )}
    </>
  );
};

export default Launches;
