import React from 'react';
import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    Launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <h2>Test</h2>
      {/* {data.Launches.map((launch, index) => (
        <h2 key={index}>{launch.flight_number}</h2>
      ))} */}
    </div>
  );
};

export default Launches;
