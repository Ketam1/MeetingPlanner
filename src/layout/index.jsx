import React from 'react';
import {
    PageLayout,
    PageHeader,
    PageAside,
    PageMain,
    PageFooter
} from './styles'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const AppLayout = ({children, items}) => {
  return (
  	<PageLayout>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageAside> 
        <Sidebar items={items}/>
      </PageAside>
      <PageMain>{children}</PageMain>
      <PageFooter>
        <Footer />
      </PageFooter>
    </PageLayout>
  );
};

export default AppLayout;