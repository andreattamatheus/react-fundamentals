import React, {Component} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

// export default function Header( { onToogleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button 
//         onClick={onToogleTheme} 
//         type="button"
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌚'}  
//       </button>
//     </Container>
//   );
// }

export default class Header extends Component{
 render(){
    return(
      <ThemeContext.Consumer>
        {( { theme, handleToogleTheme}) => (
            <Container>
            <h1>JStack's Blog</h1>
            <button 
              type="button"
              onClick={handleToogleTheme} 
            >
              {theme === 'dark' ? '🌞' : '🌚'}  
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }


}


// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToogleTheme: PropTypes.func.isRequired
// }


