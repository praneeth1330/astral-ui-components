import React, { useState } from 'react';
import {
    TextField,
    Textarea,
    Select,
    Radio,
    CheckboxGroup,
    DatePicker,
    Button,
    Checkbox,
    OtpInput
} from '@cloudwick/astral-ui';
import { Link } from 'react-router-dom';
const validateOtp = (value) => {
    return value !== '1234';
};

const FormComponent = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        hobbies: [],
        country: '',
        dateOfBirth: '',
        about: '',
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Form Submitted Successfully!');

        // Reset form values to empty
        setFormData({
            name: '',
            email: '',
            password: '',
            gender: '',
            hobbies: [],
            country: '',
            dateOfBirth: '',
            about: '',
            otp: '' // If you have an OTP field, include it here
        });
    };

    return (
        <div className=''>
        <div className="">
        </div>
        <div className="max-w-lg mx-auto p-6  rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Registration Form</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium  mb-2">Name</label>
                    <TextField
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium  mb-2">Email</label>
                    <TextField
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full"

                    />
                </div>


                <div>
                    <label className="block text-sm font-medium  mb-2">Password</label>
                    <TextField
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        className="w-full"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium  mb-2">Gender (radio with sizes)</label>
                    <div className="adp-space-y-8 space-x-4">
                        <Radio
                            name="gender"
                            value="male"
                            size="sm"
                            label="Male"
                            onChange={() => handleChange('gender', 'male')}
                            checked={formData.gender === 'male'}
                        />
                        <Radio
                            name="gender"
                            value="female"
                            size="md"
                            label="Female"
                            onChange={() => handleChange('gender', 'female')}
                            checked={formData.gender === 'female'}
                        />
                        <Radio
                            name="gender"
                            value="other"
                            size="lg"
                            label="Other"
                            onChange={() => handleChange('gender', 'other')}
                            checked={formData.gender === 'other'}
                        />
                    </div>
                </div>


                <label className=" text-sm font-medium  mb-2 flex gap-4">Hobbies</label>
                <div className='flex gap-3'>
                    <CheckboxGroup
                        size='sm'
                        options={[
                            { value: 'reading', label: 'Reading' },
                            { value: 'traveling', label: 'Traveling' },
                            { value: 'gaming', label: 'Gaming' },
                            { value: 'sports', label: 'Sports', }
                        ]}
                        value={formData.hobbies}
                        onChange={(value) => handleChange('hobbies', value)}
                    />
                    <CheckboxGroup
                        size='md'
                        options={[
                            { value: 'reading', label: 'Reading' },
                            { value: 'traveling', label: 'Traveling' },
                            { value: 'gaming', label: 'Gaming' },
                            { value: 'sports', label: 'Sports', }
                        ]}
                        value={formData.hobbies}
                        onChange={(value) => handleChange('hobbies', value)}
                    />
                    <CheckboxGroup
                        size='lg'
                        disabled
                        options={[
                            { value: 'reading', label: 'Reading' },
                            { value: 'traveling', label: 'Traveling' },
                            { value: 'gaming', label: 'Gaming' },
                            { value: 'sports', label: 'Sports', }
                        ]}
                        value={formData.hobbies}
                        onChange={(value) => handleChange('hobbies', value)}
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium  mb-2">Country</label>
                    <Select
                        placeholder="Select your country"
                        options={[
                            { value: 'india', label: 'India' },
                            { value: 'usa', label: 'USA' },
                            { value: 'canada', label: 'Canada' },
                            { value: 'australia', label: 'Australia' }
                        ]}
                        value={formData.country}
                        onChange={(value) => handleChange('country', value)}
                        className="w-full"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium  mb-2">Date of Birth</label>
                    <DatePicker
                        onChange={(date) => handleChange('dateOfBirth', date)}
                        selected={formData.dateOfBirth}
                        
                    />
                </div>
                Hide code
                <div className="adp-space-y-8">
                    <Checkbox variant="filled" label="filled" size='sm' />
                    <br />
                    <Checkbox variant="outline" label="outline" size='md' />
                    <br />
                    <Checkbox variant="filled-circle" label="filled-circle" size='lg' />
                    <br />
                    <Checkbox variant="outline-circle" label="outline-circle" />
                    <br />
                    <Checkbox variant="outline-circle" label="outline-circle" disabled />
                </div>
                <OtpInput
                    onChange={(value) => handleChange('otp', value)}
                    onBlur={() => validateOtp(otp)}
                    onFocus={() => setError('')}
                    otpLength={4}
                    regexValidation="[A-Z0-9]"
                    error={!validateOtp(formData.otp)}
                    label="Enter OTP"
                />

                <div>
                    <label className="block text-sm font-medium  mb-2">About You</label>
                    <Textarea
                        placeholder="Tell us something about yourself"
                        value={formData.about}
                        onChange={(e) => handleChange('about', e.target.value)}
                        className="w-full"
                    />
                </div>



                <Button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
                >
                    Submit
                </Button>

            </form>


        </div>
        </div>
    );
};

export default FormComponent;
