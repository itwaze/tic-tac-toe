import styled from "styled-components";

const BOARD_SIZE = "20em";
const BOARD_GAP = "0.3em";

export const Wrapper = styled.div`
  margin: 0 auto;

  width: ${BOARD_SIZE};
`;

export const StatusHeader = styled.p`
  text-align: center;
  margin-bottom: 0.7em;
`;

export const Deck = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.3em;

  height: ${BOARD_SIZE};
`;

export const SquareBox = styled.div`
  width: calc(${BOARD_SIZE} / 3 - ${BOARD_GAP});
  height: calc(${BOARD_SIZE} / 3 - ${BOARD_GAP});

  flex-grow: 1;

  border: 0.1em solid #ccc;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1em;
`;

export const Marker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 3em;
`;
