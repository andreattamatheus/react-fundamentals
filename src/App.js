// import React, { useState, useMemo } from 'react';
import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

class App extends Component {
  // Usando o bind para injetar a propriedade para a função
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     theme: 'dark'
  //   }
  //   this.handleToogleTheme = this.handleToogleTheme.bind(this);
  // }

  render(){
    return(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {
            ( { theme }) => (
              <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout/>
              </StyledThemeProvider>
            )
          }
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

// Component como Function 

// function App() {
//   const [theme , setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToogleTheme(){
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout 
//         onToogleTheme={handleToogleTheme}
//         selectedTheme={theme}      
//       />
//     </ThemeProvider>
//   );
// };

export default App;
