import React from 'react';
import { useTheme } from 'styled-components'

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout( { 
  onToogleTheme, selectedTheme 
}) {
  const theme = useTheme();
  console.log(theme);
  
  return (
    <>
      <Header 
        onToogleTheme={onToogleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer 
        onToogleTheme={onToogleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
