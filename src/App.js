import * as React from "react";
import { Button, Container, Text, Center } from "@chakra-ui/react";
import useStore from "./stores/zustand";

function Board() {
  // const squares = Array(9).fill(null);
  const squares = useStore((state) => state.squares);
  const setSquares = useStore((state) => state.setSquares);
  // const [squares, setSquares] = React.useState(Array(9).fill(null));
  const nextValue = useStore((state) => state.nextValue);
  const setNextValue = useStore((state) => state.setNextValue);
  // const [nextValue, setNextValue] = React.useState('');
  const winner = useStore((state) => state.winner);
  const setWinner = useStore((state) => state.setWinner);
  // const [winner, setWinner] = React.useState('');
  const status = useStore((state) => state.status);
  const setStatus = useStore((state) => state.setStatus);
  // const [status, setStatus] = React.useState('Click to start')

  function selectSquare(square) {
    const currentBoard = squares.map((item, i) => {
      if (i === square && !item) {
        const nextValue = calculateNextValue(squares);
        setNextValue(nextValue);
        return nextValue;
      } else {
        return item;
      }
    });
    setSquares(currentBoard);

    const value = calculateWinner(currentBoard);
    if (value) {
      setWinner(value);
    }
    // setWinner(calculateWinner(currentBoard))
    // setStatus(calculateStatus(winner, squares, nextValue));
    setStatus(calculateStatus(value, squares, calculateNextValue(squares)));
    console.log(calculateStatus(winner, squares, nextValue));

  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue("O");
    setWinner("");
    setStatus("Click to start");
  }

  function renderSquare(i) {
    return (
      <Button
        isDisabled={winner}
        className="square"
        size="md"
        colorScheme="cyan"
        borderRadius="0px"
        height="150px"
        width="150px"
        border="2px"
        borderColor="blue.500"
        fontSize="150px"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </Button>
    );
  }

  return (
    <div>
      <Container>
        <Center>
          <Text fontSize="5xl">{status}</Text>
        </Center>
        <Center>
          <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
        </Center>
        <Center>
          <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
        </Center>
        <Center>
          <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </Center>
        <Center>
          <Button
            boxShadow="dark-lg"
            size="md"
            mt="10px"
            height="48px"
            width="200px"
            colorScheme="blue"
            border="2px"
            borderColor="cyan"
            onClick={restart}
          >
            Restart
          </Button>
        </Center>
      </Container>
    </div>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
