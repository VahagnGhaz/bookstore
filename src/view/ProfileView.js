import React, { Component } from 'react';
import { Input, Form, Button, Avatar, Icon, Upload} from 'antd';
import '../css/profile.css';
import profile from "../assets/prof-pic.jpg"

const { Dragger } = Upload;
const FormItem = Form.Item;

class ProfileForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  validateName = (rule, value, callback) => {
    const re = /^[a-zA-Z\s]*$/;
    if (!re.test(value)) {
      callback('Name must only contain letters and spaces');
    } else {
      callback();
    }
  };

  validateSurname = (rule, value, callback) => {
    const re = /^[a-zA-Z\s]*$/;
    if (!re.test(value)) {
      callback('Surname must only contain letters and spaces');
    } else {
      callback();
    }
  };

  render() {
  const { getFieldDecorator } = this.props.form;
//   const { avatarUrl } = this.state;

  const uploadProps = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: this.handleAvatarChange,
  };

  return (
    <Form onSubmit={this.handleSubmit} className="profile-form">
      <div className="form-header">My Profile</div>
      <div className="name-surname-field">
        <FormItem className="form-field" label="Name">
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: 'Please input your name' },
              { validator: this.validateName },
            ],
          })(<Input placeholder="Enter your name" style={{ width: '45%' }} />)}
        </FormItem>
        <FormItem className="form-field" label="Surname">
          {getFieldDecorator('surname', {
            rules: [
              { required: true, message: 'Please input your surname' },
              { validator: this.validateSurname },
            ],
          })(<Input placeholder="Enter your surname" style={{ width: '45%' }} />)}
        </FormItem>
      </div>
      <FormItem className="form-field" label="Twitter">
        {getFieldDecorator('twitter', {
          rules: [{ type: 'url', message: 'Please enter a valid URL' }],
        })(<Input placeholder="Enter your Twitter URL" style={{ width: '100%' }} />)}
      </FormItem>
      <FormItem className="form-field" label="Avatar">
        <Avatar size={164} shape = {'square'} src={profile} icon={<Icon type="user" />} className="avatar-preview" />
        
      </FormItem>
      <div className="avatar-upload-button">
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <Icon type="upload" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Dragger>
        </div>
      <FormItem className="form-field" label="Notes">
        {getFieldDecorator('notes')(<Input.TextArea rows={4} placeholder="Enter any notes here" />)}
      </FormItem>
     
      <Button  type="primary" htmlType="submit" className="submit-button" style={{marginRight: '10px'}} >
      Save
</Button>
<Button  className="cancel-button" onClick={this.handleReset}>
  Cancel
</Button>
    
    </Form>
  );
}
}

export default Form.create()(ProfileForm);