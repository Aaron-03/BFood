import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { CustomCheckbox } from '../components/ui/Fields';
import { useEffect } from 'react';


const useCategoriesChecks = (categories) => {

    const [ categoriesSelected, setCategoriesSelected ] = useState([]);

    const handleChangeCheck = (e, categoryId) => {
        categories.map(cat => {
            if(cat.id === categoryId) {
                return cat.check = e.target.checked;
            }
            return cat;
        });

        setCategoriesSelected(
            categories.filter(cat => cat.check === true)
        );
    }

    const ListCategories = () => {

        return (
            <div>
                {
                categories.map(category => (
                    <InputGroup key={category.id} className="ml-3">
                        <CustomCheckbox
                            checked={category.check}
                            onChange={(e) => handleChangeCheck(e, category.id)}
                            type="checkbox"
                            className="mr-2 mb-3"
                        />
                        <span>{category.name}</span>
                    </InputGroup>
                ))
                }
            </div>
        );
    }

    return [ ListCategories, categoriesSelected ];
}
 
export default useCategoriesChecks;