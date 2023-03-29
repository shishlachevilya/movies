import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { InputBase, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};
      if (!values.listName) {
        errors.listName = 'Required';
      }
      return errors;
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
          <Field
            name="listName"
            render={({ input, meta }) => (
              <>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Put the list name"
                  inputProps={{ 'aria-label': 'put list name' }}
                  {...input}
                />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </>
            )}
            autoComplete={false}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <ArrowOutwardIcon />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);

SelectedMoviesForm.propTypes = propTypes;

export default SelectedMoviesForm;
