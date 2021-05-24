import Container from "../styles/Container";
import Text from '../styles/Text';
import Image from '../styles/Image';
import nodata from '../images/nodata.png';

export default function DatabaseDefault() {
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
        height={'30rem'}
        width={'47rem'}
        backgroundColor={'#FFFFFF'}
        textAlign={'center'}
        border={'1px solid rgba(82, 82, 82, 0.5)'}
        borderRadius={'5px'}
      >
        <Text
          color={'#525252'}
          fontFamily={'Inria Sans'}
          fontStyle={'normal'}
          fontWeight={'bold'}
          fontSize={'36px'}
        >
          Ops! Parece que não há nenhum dado salvo
        </Text>

        <Text
          color={'#525252'}
          fontFamily={'Lexend Deca'}
          fontStyle={'normal'}
          fontWeight={'normal'}
          fontSize={'22px'}
        >
          Para adicionar hashtags siga os passos:
          <br />
          procure por uma hashtag e depois é só clicar no botão Salvar
        </Text>

        <Image
          src={nodata}
          height={'17rem'}
          width={'17rem'}
          opacity={'45%'}
        />

      </Container>

      </Container>
    </>
  );
}
