import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';

function App() {
  return (
    <div className='container mx-auto'>
      <InputField type={'email'} id={'email'} name={'email'} placeholder={'Enter your email'}/>
      <InputField type={'password'} id={'password'} name={'password'} placeholder={'Enter your password'}/>
      <Button value={'Sign In'}/>
    </div>
  );
}

export default App;
