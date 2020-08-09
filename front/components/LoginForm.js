import React, { useState, useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

const LoginForm = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const onchangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])
  const onchangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          type="text"
          value={id}
          onChange={onchangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onchangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href={'/signup'}>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  )
}

export default LoginForm
