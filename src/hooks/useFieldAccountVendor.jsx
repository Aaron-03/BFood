import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";

const ContentField = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
    color: dimgray;
    cursor: pointer;

    &:hover {
        
        border: 1px solid var(--custom-blue);
        color: var(--custom-blue);
    }
`;

const ElementLabel = styled.label`
    font-size: 12pt;
    font-weight: bold;
    margin: 0px;
    letter-spacing: 0.1rem;
    cursor: pointer;
`;

const ElementInput = styled.input`
    padding: 0.2rem;
    width: 100%;
`;

const useFieldAccountVendor = (Title) => {

    const [ show, setShow ] = useState(false);
    const [ field, setField ] = useState({
        title: Title,
        name: '',
        value: ''
    });

    const { title, name, value } = field;

    const handleClickShowModal = () => {
        
        if(show) { return; }
        setShow(true);
    }

    const handleClickShowBtn = () => {

        

        if(value.trim() !== '') {
            return;
        }

        setShow(false);
    }

    const handleChangeField = (e) => {
        e.preventDefault();
        setField({
            ...field,
            value: e.target.value
        });
    }

    const FieldAccountVendor = () => {
        return (
            <ContentField onClick={handleClickShowModal}>
                {
                show
                ? <Fragment>
                    <ElementInput type="text" />

                    <button
                        onClick={handleClickShowBtn}
                        className="btn btn-primary p-1"
                    >Guardar</button>
                </Fragment>
                
                
                : <ElementLabel>{title}</ElementLabel>
                }

                
            </ContentField>
        );
    }

    return [ FieldAccountVendor ];
}
 
export default useFieldAccountVendor;