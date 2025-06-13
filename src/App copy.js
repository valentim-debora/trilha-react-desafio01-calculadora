import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      // Evita múltiplos pontos
      if (num === '.' && prev.includes('.')) return prev;

      // Substitui o 0 inicial apenas se o número não for um ponto
      if (prev === '0' && num !== '.') {
        return num;
      }

      return `${prev}${num}`;
    });
  };

  const handlePlusNumbers = () => {
    if(firstNumber === '0' || operation === '') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const plus = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber('0');
      setFirstNumber(String(plus))
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }
  
  const handleTimesNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times))
      setOperation('')
    }
  }
  
  const handleDividedNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const divided = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divided))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      let result;
        switch(operation){
          case '+':
            handlePlusNumbers();
            result = Number(firstNumber) + Number(currentNumber);
            break;
          case '-':
            handleMinusNumbers();
            result = Number(firstNumber) - Number(currentNumber);
            break;
          case 'x':
            handleTimesNumbers();
            result = Number(firstNumber) * Number(currentNumber);
            break;
          case '/':
            handleDividedNumbers();
            result = Number(firstNumber) / Number(currentNumber);
            break;
          default: 
            break;
        }
      setCurrentNumber(String(result));
      setFirstNumber(String(result));
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="c" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="/" onClick={handleDividedNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={handleTimesNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handlePlusNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
