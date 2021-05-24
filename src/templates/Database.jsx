import Container from "../styles/Container";
import Text from "../styles/Text";
import Button from '../styles/Button';

export default function Database() {
  return (
    <>
      <Container
        paddingTop={'3rem'}
        paddingLeft={'4.062rem'}
        paddingBottom={'2.687rem'}
      >
        <Text
          color={'#525252'}
          fontFamily={'Inria Sans'}
          fontStyle={'normal'}
          fontWeight={'bold'}
          fontSize={'36px'}
        >
          Banco de dados
        </Text>

        <Text
          color={'#525252'}
          fontFamily={'Lexend Deca'}
          fontStyle={'normal'}
          fontWeight={'normal'}
          fontSize={'22px'}
        >
          Aqui é onde ficam as hashtags que você salvou
        </Text>

      </Container>

      <Container
        display={'flex'}
        justifyContent={'center'}
      >
        
        <Container
          display={'grid'}
          height={'30rem'}
          width={'47rem'}
          backgroundColor={'#FFFFFF'}
          border={'1px solid rgba(82, 82, 82, 0.5)'}
          borderRadius={'5px'}
          gridTemplateColumns={'50% 50%'}
          paddingLeft={'1.875rem'}
          paddingRight={'1.875rem'}
        >

          <Text
            color={'#525252'}
            font-family={'Lexend Deca'}
            font-style={'normal'}
            font-weight={'normal'}
            font-size={'22px'}
          >
            #qualquercoisa
          </Text>

          <Container
            display={'flex'}
            justifyContent={'end'}
          >
            <Button
              height={'2.125rem'}
              width={'5.375rem'}
              marginTop={'1.125rem'}
              backgroundColor={'#6D3EC7'}
              borderRadius={'8px'}
            >
              Carregar
            </Button>
          </Container>

        </Container>

      </Container>

    </>
  );
}
