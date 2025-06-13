import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [shouldResetCurrent, setShouldResetCurrent] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      if (shouldResetCurrent) {
        setShouldResetCurrent(false);
        return num === '.' ? '0.' : num;
      }
    
      if (num === '.' && prev.includes('.')) return prev;
      if (prev === '0' && num !== '.') return num;
      return `${prev}${num}`;
    });
  };

  const handleCalculation = () => {
    const first = Number(firstNumber);
    const current = Number(currentNumber);
    let result = 0;

    switch (operation) {
      case '+':
        result = first + current;
        break;
      case '-':
        result = first - current;
        break;
      case 'x':
        result = first * current;
        break;
      case '/':
        result = current === 0 ? 'Erro' : first / current;
        break;
      default:
        return;
    }
    setCurrentNumber(String(result));
    setFirstNumber(String(result));
    setOperation('');
    return result;
  }

  const handleOperation = (op) => {
    if (operation && currentNumber !== '0') {
      handleCalculation();
    } else {
      setFirstNumber(currentNumber);
    }

    setOperation(op);
    setShouldResetCurrent(true);
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation && currentNumber !== '0') {
      handleCalculation();
      setShouldResetCurrent(true);
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
          <Button label="/" onClick={() => handleOperation('/')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={() => handleOperation('x')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
