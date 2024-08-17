/*
  Newsletter Request
  - axios.post
  - redirect


*******************************

  Submit State
  - useNavigation

  1. Newsletter.jsx


*/

import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter' // 1.

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  // 2. send request to server
  try {
    const response = await axios.post(newsletterUrl, data)
    console.log(response)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Newsletter = () => {
  const navigation = useNavigation() // 3.
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          required
          defaultValue='john'
        />
      </div>
      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
          defaultValue='smith'
        />
      </div>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          name='email'
          id='email'
          required
          defaultValue='test@test.com'
        />
      </div>

      {/* 4. */}
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting...' : 'submit'}
      </button>
    </Form>
  )
}

export default Newsletter
