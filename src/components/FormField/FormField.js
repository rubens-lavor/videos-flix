import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function FormField({
  // eslint-disable-next-line react/prop-types
  label, type, name, value, onChange,
}) {
  // eslint-disable-next-line react/destructuring-assignment
  const fielId = `id_${name}`;
  const isTextarea = type === "textarea"
  const Tag = isTextarea ? "textarea":"input";
  return (
    <div>
      <label
        htmlFor={fielId}
      >
        {label}
        <Input
          as={Tag}
          id={fielId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.prototype = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};

export default FormField;
