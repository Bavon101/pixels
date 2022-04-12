import React from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailsPage() {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  console.log(id);

  return (
    <div>DetailsPage</div>
  );
}
