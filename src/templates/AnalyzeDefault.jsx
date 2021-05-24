import Container from  '../styles/Container';
import Text from '../styles/Text';
import Search from '../styles/Search';
import search from '../images/search.png';

export default function AnalyzeDefault() {
  return (
    <>

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
          placeholder={'Pesquisar por hashtag'}
          height={'2.437rem'}
          width={'22.687rem'}
        >
        </Search>

      </Container>

    </>
  );
}
