import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {

  const [resources, setResources] = useState([]);

// useEffect(() => {function(variable)}, [variable // whatever this changes, run this function!])
// useEffect can only return a cleanup function or nothing!
// example of immediate function: 

/*
  useEffect(
    () => {
      (async (resource) => {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
      })(resource);
  }, [resource])
*/

  const fetchResource = async (resource) => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;