import React from "react";
import { Plus } from 'react-bootstrap-icons';

function NewContactButton({ setIsAdding }) {
    return (
        <div className="button-container">
            <button className = "button-new" onClick={ e => setIsAdding(true) }>
                <Plus size={16} />
            </button>  
        </div>
    );
  }
  
  export default NewContactButton;