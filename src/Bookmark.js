import styled from 'styled-components/macro'

export default styled.div`
  position: absolute;
  border: 15px solid ${props => props.color};
  border-bottom-color: transparent;
  top: -5px;
  right: 30px;
  width: 0;
`
