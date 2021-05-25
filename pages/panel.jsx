import { useState } from 'react';
import Background from '../src/styles/Background';
import Section from '../src/styles/Section';
import Navbar from '../src/styles/Navbar';
import Sidebar from '../src/styles/Sidebar';
import Search from '../src/styles/Search';
import Analyze from '../src/templates/Analyze';
import Database from '../src/templates/Database';
import AnalyzeDefault from '../src/templates/AnalyzeDefault';
import DatabaseDefault from '../src/templates/DatabaseDefault';
import analyzeImage from '../src/images/analyze.png';
import databaseImage from '../src/images/database.png';
import useAuth from '../src/hooks/useAuth';
import Container from '../src/styles/Container';

export default function Panel() {

  const [ hashtag, setHashtag ] = useState();
  const [ analyze , setAnalyze ] = useState(true);
  const [ database , setDatabase ] = useState(false);

  const { loading, signout } = useAuth();

  function showAnalyze() {
    setAnalyze(true);
    setDatabase(false);
  }

  function showDatabase() {
    setAnalyze(false);
    setDatabase(true);
  }

  return (
      <>
        <Background>
          <Section>
            <Section.MainDiv
              width={'69.444%'}
            >
              <Navbar>
                <Search
                  onSubmit={(searchEvent) => setHashtag(searchEvent.target.value)}
                  placeholder={'Pesquisar por hashtag'}
                  height={'2.125rem'}
                  width={'16.812rem'}
                  backgroundColor={'rgba(196, 196, 196, 0.1)'}
                  marginTop={'1.625rem'}
                  marginLeft={'6.875rem'}
                >
                </Search>

                <Navbar.Loggout onClick={() => signout()}>
                </Navbar.Loggout>
              </Navbar>

              <Sidebar>
                {
                  analyze ?
                    <Sidebar.Enabled
                      top={'35%'}
                    >
                      <img height="60px" width="60px" src={analyzeImage} />
                    </Sidebar.Enabled>
                  :
                    <Sidebar.Item
                      onClick={showAnalyze}
                      top={'35%'}
                    >
                      <img height="60px" width="60px" src={analyzeImage} />
                    </Sidebar.Item>
                }

                {
                  database ?
                    <Sidebar.Enabled
                    top={'38%'}
                  >
                    <img height="60px" width="60px" src={databaseImage} />
                  </Sidebar.Enabled>
                  :
                  <Sidebar.Item
                    onClick={showDatabase}
                    top={'38%'}
                  >
                    <img height="60px" width="60px" src={databaseImage} />
                  </Sidebar.Item>
                }

              </Sidebar>

              <Section.MainDiv
                height={'91.3%'}
                backgroundColor={'#EEEEEE'}
                marginLeft={'4.687rem'}
              >
                {
                  analyze &&
                  <Analyze />
                }
                {
                  database &&
                  <Database />
                }
                  
              </Section.MainDiv>

            </Section.MainDiv>

          </Section>

        </Background>
      </>
  );
}
