import React from 'react';

import { Container } from './styles';

export default function Footer( { onToogleTheme, selectedTheme }) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={onToogleTheme} 
        type="button"
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}  
      </button>
    </Container>
  );
}