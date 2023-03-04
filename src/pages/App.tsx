import logo from '@assets/logo.svg';
import Image from '@components/Image';
import Layout from '@components/Layout';

function App() {
  return (
    <Layout>
      <Image src={logo} className="App-logo" alt="logo" />
    </Layout>
  );
}

export default App;
