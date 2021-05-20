import Background from '../src/styles/Background';
import Section from '../src/styles/Section';
import Text from '../src/styles/Text';
import Container from '../src/styles/Container';
import Login from '../src/styles/Login';
import Button from '../src/styles/Button';

export default function Home() {
  return (
    <>
      <Background>
        <Section>
          <Section.MainDiv
            width={'50%'}
          >
            <Text
              fontSize={'4rem'}
              fontWeight={'bold'}
              fontFamily={'Inria Sans'}
              color={'white'}
            >
              InfoTag
            </Text>

            <Text
              fontSize={'2.25rem'}
              fontWeight={'bold'}
              fontFamily={'Inria Sans'}
              color={'white'}
            >
              Bem-vindo!
            </Text>

            <Container>
              <Text.Icon />
              <Text
                fontSize={'1.25rem'}
                fontWeight={'bold'}
                fontFamily={'Inria Sans'}
                color={'white'}
              >
                Faça login com seu Twitter
                para começar
              </Text>
            </Container>

            <Container>
              <Login>
                Fazer login
              </Login>
              <Login.Succeed />
            </Container>

            <Button
              height={'4.062rem'}
              width={'14.375rem'}
              borderRadius={'5px'}
              backgroundColor={'rgba(112, 67, 197, 0.9)'}
              fontSize={'1.5rem'}
              boxShadow={'0px 0px 5px 1px rgba(0, 0, 0, 0.3)'}
            >
              Documentação
            </Button>

          </Section.MainDiv>

          <Section.MainDiv
            width={'50%'}
          >
            <Text
              fontSize={'1.375rem'}
              fontWeight={'normal'}
              fontFamily={'Lexend Deca'}
              color={'white'}
            >
              InfoTag é uma aplicação que possui integração
              total com o Twitter

              Você poderá buscar por hashtags,
              analisar tweets (com IBM Watson)
              e muito mais!
            </Text>

            <Button
              height={'4.062rem'}
              width={'21.25rem'}
              borderRadius={'50px'}
              backgroundColor={'#0043C6'}
              fontSize={'1.5rem'}
              boxShadow={'0px 0px 10px 3px rgba(0, 67, 198, 0.45)'}
            >
              Repositório oficial
            </Button>
          </Section.MainDiv>

        </Section>
      </Background>
    </>
  );
}
