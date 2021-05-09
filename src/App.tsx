import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ProductConfigurator from './components/ProductConfigurator';

function App() {
  return (
    <Fragment>
       <CssBaseline />
        <Container>
          <ProductConfigurator />
      </Container>
    </Fragment>
  );
}

export default App;
