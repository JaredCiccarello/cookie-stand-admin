import React, { useState } from 'react';
import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';

export default function Main() {
  // Define the onFormSubmit function here or pass it as a prop from a parent component
  const onFormSubmit = (formData) => {
    // Handle form submission logic here
    // For example, you can update the 'data' state with the new entry
    console.log('Form submitted:', formData);
  };

  // Define the 'data' state here and initialize it with an empty array
  const [data, setData] = useState([]);

  return (
    <>
      <div className="container p-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center" style={{ fontFamily: 'Arial' }}>
          Create Cookie Stand
        </h2>
        <CreateForm onFormSubmit={onFormSubmit} />
      </div>

      {/* Render the table only if there is data */}
      {data.length > 0 ? (
        <ReportTable data={data} />
      ) : (
        // Show the "No Cookie Stands Available..." message when there is no data
        <p className="mt-4 text-3xl text-center" style={{ fontFamily: 'Arial' }}>
          No Cookie Stands Available...
        </p>
      )}
    </>
  );
}
