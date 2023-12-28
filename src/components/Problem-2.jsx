import { useState, useEffect } from 'react';

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);



const fetchContacts = async (country = '', page = 1) => {
    try {
      const response = await fetch(
        `https://contact.mediusware.com/api/contacts?country=${country}&page=${page}`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
      return [];
    }
  };
  

const handleOpenModalA = () =>{

}

const handleOpenModalB = () =>{
  
}
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleOpenModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleOpenModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

           
    </div>
  );
};

export default Problem2;
