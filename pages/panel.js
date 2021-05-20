import Background from '../src/styles/Background';
import Section from '../src/styles/Section';
import Navbar from '../src/styles/Navbar';
import Sidebar from '../src/styles/Sidebar';
import Text from '../src/styles/Text';
import Container from '../src/styles/Container';

export default function Home() {
    return (
        <>
          <Background>
            <Section>
              <Section.MainDiv
                width={'69.444%'}
              >
                <Navbar>
                  <Navbar.Seach
                   height={'2.125rem'}
                   width={'16.812rem'}
                  >
                  </Navbar.Seach>

                  <Navbar.Loggout>
                  </Navbar.Loggout>
                </Navbar>

                <Sidebar>
                </Sidebar>

                <Section.MainDiv
                  height={'91.3%'}
                  backgroundColor={'#EEEEEE'}
                >
                  <Container>
                  <Text
                    fontSize={'2.25rem'}
                    fontWeight={'bold'}
                    fontFamily={'Inria Sans'}
                    color={'#525252'}
                  >
                    Digite a hashtag que deseja procurar
                  </Text>

                  <Navbar.Seach
                    height={'2.437rem'}
                    width={'22.687rem'}
                  >
                  </Navbar.Seach>
                  </Container>
                </Section.MainDiv>

              </Section.MainDiv>
            </Section>
          </Background>
        </>
    );
}