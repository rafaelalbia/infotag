import Button from '../styles/Button';
import Container from '../styles/Container';
import Text from '../styles/Text';
import Search from '../styles/Search';
import Image from '../styles/Image';
import search from '../images/search.png';

export default function Analyze() {
  return (
    <>
      {/* Inserir lógica - Início */}

      <Container
        display={'column'}
        textAlign={'center'}
        paddingTop={'10px'}
      >
        <Text
          fontSize={'2.25rem'}
          fontWeight={'bold'}
          fontFamily={'Inria Sans'}
          color={'#525252'}
          marginTop={'6.812rem'}
        >
          Digite a hashtag que deseja procurar
        </Text>

        <Search
          height={'2.437rem'}
          width={'22.687rem'}
        >
        </Search>

       </Container>

      {/* Inserir lógica - Final */}

    </>
  )
}

// <Container
//   paddingTop={'3rem'}
//   paddingLeft={'2.187rem'}
//   paddingBottom={'3.125rem'}
//   borderBottom={'2px solid rgba(82, 82, 82, 0.2)'}
// >
// <Text
//   color={'#525252'}
//   fontFamily={'Lexend Deca'}
//   fontStyle={'normal'}
//   fontWeight={'normal'}
//   fontSize={'22px'}
// >
//   Você procurou pela hashtag "#qualquercoisa”
//   <br /><br /><br />
//   De acordo com sua procura, já conseguimos analisar alguns tweets
//   <br /><br /><br />
//   Veja qual foi o sentimento relacionados aos tweets
//   (de acordo com sua procura pela hashtag)
// </Text>
// 
// </Container>
//
// <Container
// textAlign={'center'}
// >
// <Text
//   color={'#525252'}
//   fontFamily={'Inria Sans'}
//   fontStyle={'normal'}
//   fontWeight={'bold'}
//   fontSize={'36px'}
// >
//   Sentimentos
// </Text>
//
// </Container>
// <Container
//   display={'flex'}
//   justifyContent={'center'}
// >
// <Container
//   height={'20rem'}
//   width={'40.625rem'}
//   backgroundColor={'#FFFFFF'}
//   textAlign={'center'}
//   border={'1px solid rgba(82, 82, 82, 0.5)'}
//   borderRadius={'5px'}
// >
//   <Container
//     display={'grid'}
//     gridTemplateColumns={'33% 33% 33%'}
//     borderBottom={'1px solid rgba(82, 82, 82, 0.5)'}
//   >
//     <Text
//       width={'100%'}
//       color={'#525252'}
//       fontFamily={'Lexend Deca'}
//       fontStyle={'normal'}
//       fontWeight={'normal'}
//       fontSize={'22px'}
//     >
//       Posição
//     </Text>
//
//     <Text
//       width={'100%'}
//       color={'#525252'}
//       fontFamily={'Lexend Deca'}
//       fontStyle={'normal'}
//       fontWeight={'normal'}
//       fontSize={'22px'}
//     >
//       Sentimento
//     </Text>
//
//     <Text
//       width={'100%'}
//       color={'#525252'}
//       fontFamily={'Lexend Deca'}
//       fontStyle={'normal'}
//       fontWeight={'normal'}
//       fontSize={'22px'}
//     >
//       Relevância
//     </Text>
//
//   </Container>
//
//   <Container
//     display={'grid'}
//     gridTemplateColumns={'33% 33% 33%'}
//   >
//   </Container>
//
// </Container>
//
// </Container>
//
// <Container
// display={'flex'}
// justifyContent={'center'}
// paddingTop={'1.5rem'}
// >
// <Button
//   height={'4.062rem'}
//   width={'14.375rem'}
//   borderRadius={'5px'}
//   backgroundColor={'rgba(112, 67, 197, 0.9)'}
//   fontSize={'1.5rem'}
//   boxShadow={'0px 0px 5px 1px rgba(0, 0, 0, 0.3)'}
// >
//   Salvar hashtag
// </Button>
//
// </Container>
