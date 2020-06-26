import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';


const ContentField = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.0);
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
    border: none;
    outline: none;
    outline-color: transparent;
    width: 100%;
`;

const FieldAccountVendor = ({field, setField, editable = true}) => {

    const [ show, setShow ] = useState(false);

    const { title, name, value } = field;

    const handleClickShowModal = () => {
        
        if(show) { return; }
        setShow(true);
    }

    const handleClickShowBtn = () => {

        if(value.trim().length < 6) {
            alert('Mínimo 6 caracteres');
            return;
        }

        setShow(false);
    }

    const handleChangeField = (e) => {
        setField({
            ...field,
            value: e.target.value
        });
    }

    return (
        <ContentField onClick={handleClickShowModal}>


            {
            show
            ? <Fragment>
                <ElementInput
                    disabled={!editable}
                    placeholder={field.placeholder}
                    className={!editable ? 'bg-light' : '' }
                    value={value}
                    onChange={handleChangeField}
                    type="text"
                />
                {/* {
                editable
                ? <button
                    onClick={handleClickShowBtn}
                    className="btn btn-primary p-1"
                >Guardar</button>
                : null
                } */}
            </Fragment>
            
            
            : <ElementLabel>{title}</ElementLabel>
            }

            
        </ContentField>
    );
}

export default FieldAccountVendor;