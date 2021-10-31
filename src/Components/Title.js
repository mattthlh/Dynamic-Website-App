import React, { useState } from 'react'
import styled from 'styled-components'

const Title = () => {
  const [showButton, setShowButton] = useState(true)

  const Header = styled.h1`
    color: rgb(40, 48, 51);
    font-family: "Playfair Display", serif;
    font-weight: 700;
    margin-bottom: 4rem;
    font-size: 2.5rem;
  `

  const Container = styled.div`
    padding: 3rem 10rem;
    background: rgb(246, 247, 247);
  `

  const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
  `

  const Input = styled.input`
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  `

  return (
    <>
      <Container>
        <Header>
          Hey this is me!
          { showButton
            ? (
              <button
                style={{ position: 'absolute', right: '15%' }}
                onClick={() => setShowButton(false)}
              >
                Edit
              </button>
            )
            : null}
        </Header>
        { !showButton ? (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <Label> Image </Label>
              <Input
                placeholder="Enter Image URL"
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <Label> Description </Label>
              <Input
                placeholder="Enter Description"
              />
            </div>
            <div>
              <button onClick={() => setShowButton(true)}> Save </button>
              <button
                onClick={() => setShowButton(true)}
                style={{ marginLeft: '16px' }}
              >
                Cancel
              </button>
            </div>
          </>
        ) : null}
      </Container>
    </>
  )
}

export default Title
