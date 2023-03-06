import React, { Fragment } from 'react'
import Layout from '../components/masterLayout/Layout'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <Fragment>
      <Layout>
        <Login />
      </Layout>
    </Fragment>
  )
}

export default LoginPage