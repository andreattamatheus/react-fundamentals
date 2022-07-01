import React, { useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';

//render props
export default function Footer() {
  const { theme, handleToogleTheme} = useContext(ThemeContext);
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={handleToogleTheme} 
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}  
      </button>
    </Container>
  );
}