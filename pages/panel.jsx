import Background from '../src/styles/Background';
import Section from '../src/styles/Section';
import Navbar from '../src/styles/Navbar';
import Sidebar from '../src/styles/Sidebar';
import Search from '../src/styles/Search';
import Analyze from '../src/components/Analyze';
import Database from '../src/components/Database';
import analyze from '../src/images/analyze.png';
import database from '../src/images/database.png';

export default function Home() {
    return (
        <>
          <Background>
            <Section>
              <Section.MainDiv
                width={'69.444%'}
              >
                <Navbar>
                  <Search
                   height={'2.125rem'}
                   width={'16.812rem'}
                   backgroundColor={'rgba(196, 196, 196, 0.1)'}
                   marginTop={'1.625rem'}
                   marginLeft={'6.875rem'}
                  >
                  </Search>

                  <Navbar.Loggout>
                  </Navbar.Loggout>
                </Navbar>

                <Sidebar>
                  <Sidebar.Item 
                    top={'35%'}
                  >
                    <img height="60px" width="60px" src={analyze} />
                  </Sidebar.Item>

                  <Sidebar.Item
                    top={'38%'}
                  >
                    <img height="60px" width="60px" src={database} />
                  </Sidebar.Item>

                </Sidebar>

                <Section.MainDiv
                  height={'91.3%'}
                  backgroundColor={'#EEEEEE'}
                  marginLeft={'4.687rem'}
                >
                  <Analyze />
                  
                </Section.MainDiv>

              </Section.MainDiv>

            </Section>

          </Background>
        </>
    );
}
