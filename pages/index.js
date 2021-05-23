import Background from '../src/styles/Background';
import Section from '../src/styles/Section';
import Text from '../src/styles/Text';
import Container from '../src/styles/Container';
import Login from '../src/styles/Login';
import Button from '../src/styles/Button';
import IconTwitter from '../src/styles/IconTwitter';

export default function Home() {
  return (
    <>
      <Background>
        <Section>
          <Section.MainDiv
            width={'20%'}
            paddingLeft={'2.812rem'}
            alignItems={'center'}
          >
            <Text
              fontSize={'4rem'}
              fontWeight={'bold'}
              fontFamily={'Inria Sans'}
              color={'white'}
              paddingBottom={'7.75rem'}
              textAlign={'center'}
            >
              InfoTag
            </Text>

            
              <Text
                fontSize={'2.25rem'}
                fontWeight={'bold'}
                fontFamily={'Inria Sans'}
                color={'white'}
                marginBottom={'0px'}
                textAlign={'center'}
              >
                Bem-vindo!
              </Text>
  
              <Container
                justifyContent={'center'}
                align={'center'}
                textAlign={'center'}                
              >
                <IconTwitter />
                <Text
                  fontSize={'1.25rem'}
                  fontWeight={'bold'}
                  fontFamily={'Inria Sans'}
                  color={'white'}
                  textAlign={'left'}
                >
                  Faça login com seu Twitter {<br />}
                  para começar
                </Text>
              </Container>
  
              <Container
                display="flex" 
                justifyContent={'center'}
                align={'center'}
                textAlign={'center'}              
              >
                <Login>
                  Fazer login
                </Login>
                <Login.Succeed />
              </Container>

            <Container
              display="flex"
              justifyContent={'center'}
              align={'center'}
              textAlign={'center'}
            >
              <Button
                height={'4.062rem'}
                width={'14.375rem'}
                borderRadius={'5px'}
                backgroundColor={'rgba(112, 67, 197, 0.9)'}
                fontSize={'1.5rem'}
                boxShadow={'0px 0px 5px 1px rgba(0, 0, 0, 0.3)'}
                marginTop={'21.5rem'}
              >
                Documentação
              </Button>

            </Container>

          </Section.MainDiv>

          <Section.MainDiv
            width={'80%'}
            position={'relative'}
          >
            <Container
              position={'relative'}
              top={'33%'}
              left={'45%'}
              width={'43rem'}
              justifyContent={'center'}
              align={'center'}
              textAlign={'center'}
            >
              <Text
                fontSize={'1.375rem'}
                fontWeight={'normal'}
                fontFamily={'Lexend Deca'}
                color={'white'}
                textAlign={'center'}
              >
                InfoTag é uma aplicação que possui integração
                total com o Twitter {<br />}
                {<br />}
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
                  marginTop={'7rem'}
                >
                  Repositório oficial
                </Button>
                
            </Container>

          </Section.MainDiv>

        </Section>

      </Background>
    </>
  );
}
