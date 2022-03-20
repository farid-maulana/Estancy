import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';

function App() {
  return (
    <div className='container mx-auto'>
      <InputField type={'email'} id={'email'} name={'email'} placeholder={'Enter your email'}/>
      <InputField type={'password'} id={'password'} name={'password'} placeholder={'Enter your password'}/>
    </div>
  );
}

export default App;
