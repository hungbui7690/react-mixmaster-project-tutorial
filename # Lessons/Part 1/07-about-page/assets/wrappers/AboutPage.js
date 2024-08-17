import styled from 'styled-components'

const Wrapper = styled.div`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;

  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`

export default Wrapper
