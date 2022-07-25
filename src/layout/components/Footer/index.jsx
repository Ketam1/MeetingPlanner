import {
    Footer,
    InfoContainer,
    LeftInfoContainer,
    RightInfoContainer,
    Info,
} from './styles'

const FooterComponent = props => {
  return (
    <Footer>
      <InfoContainer>
        <LeftInfoContainer>
          <Info>About This Site</Info>
          <Info justify>Simple Contact List Manager made for the Bravi selection process</Info>
        </LeftInfoContainer>
        <RightInfoContainer>
          <Info>Designed By:</Info>
          <Info>Guilherme Henrique Correia Sena</Info>
        </RightInfoContainer>
      </InfoContainer>
    </Footer>
  )
}

export default FooterComponent;
