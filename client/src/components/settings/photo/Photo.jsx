import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_user_photo } from '../../../redux/selectors/user';

import StepOne from './step_one/Step_One';
import StepTree from './step_tree/Step_Tree';
import StepTwo from './step_two/Step_Two';
import Title from '../../common/title/Title';
import Select from './select/Select';

import StyledPhoto from './Styled_Photo';

const Photo = ({ photo }) => {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState(null);

  // Clear URL CDU
  useEffect(() => {
    return () => {
      file.map(i => URL.revokeObjectURL(i.preview))
    }
  },[file]);


  return (
    <StyledPhoto>
      <div className='photo'>
          <Title text='Photo Upload' />
        <div className='row no-gutters'>
          <div className='col-12 col-sm-4'>
            <StepOne setFile={setFile} />
          </div>
          <div className='col-12 col-sm-4'>
            <StepTwo setImage={setImage} file={file} />
          </div>
          <div className='col-12 col-sm-4'>
            <StepTree file={file} image={image} setFile={setFile} setImage={setImage} />
          </div>
        </div>
        <div className='row no-gutters'>
          {
            ['',''].map((i, index) => <Select key={index} url={i} index={index} />)
          }
        </div>
      </div>
    </StyledPhoto>
  )
};

Photo.propTypes = {
  photo: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  photo: state_user_photo
});

export default connect( mapStateToProps, {  } )(Photo);