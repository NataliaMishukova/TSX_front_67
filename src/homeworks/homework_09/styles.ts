import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 100px;
  gap: 30px;
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  width: 600px;
  height: fit-content;
`;

export const ButtonControl = styled.div`
  width: 150px;
`;
export const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
`;
export const Notes = styled.ul`
  display: flex;
  flex-direction: row;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: fit-content;
  border: 2px solid black;
  padding: 30px;
  border-radius: 6px;
`;

export const NotesDesk = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 900px;
  justify-content: space-between;
`;
export const NoteTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;

export const NoteItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  background-color: #fcf75e;
  width: 150px;
  height: 100px;
  list-style: none;
  word-wrap: break-word;
`;
