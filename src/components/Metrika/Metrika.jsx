import React from 'react'
import { YMInitializer } from 'react-yandex-metrika';
 
class Metrika extends React.Component {
  render() {
    return (
      <div>
          <YMInitializer accounts={[81498076]} />
      </div>
    );
  }
};
export default Metrika