import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Testing(props) {
  const [data, isLoading, hasError] = useJsonFetch(props.url);
  console.log(isLoading);
  return (
    <div>
      <div>Data: {data.status}</div>
      <div>Is Loading: {isLoading.toString()}</div>
      <div>Has Error: {hasError}</div>
    </div>
  )
}
