import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | Node-Bird</title>
      </Head>
      <AppLayout>My Profile</AppLayout>
    </>
  )
}

export default Profile
