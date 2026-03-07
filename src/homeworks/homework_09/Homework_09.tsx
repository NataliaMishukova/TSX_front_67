import { v4 } from "uuid";
import { useState, type ChangeEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  PageWrapper,
  NoteItem,
  NoteForm,
  ButtonControl,
  Notes,
  NoteTitle,
  NotesDesk,
  NotesList,
} from "./styles";

// Cоздайте компонент Homework_09 в папке homeworks, в нем должно быть 1 компонент Input и компонент Button
// компонент Input должен быть котролируемым
// в инпут пользователь должен иметь возмодность ввести заметку, например "Сходить в магазин", "Помыть посуду"
// При нажатии на кнопку "Add", заметка введенная в инпуте должна появиться на экране в виде элемента списка, при добавлении новой заметки старая не должна удаляться
// стили и контент на ваше усмотрение
function Homework_09() {
  const [note, setNote] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  console.log(note);

  const onSaveNote = (event: any) => {
    event.preventDefault();
    // prevValue === savedNotes в момент вызова функции setSavedNotes
    setSavedNotes((prevValue: string[]) => {
      console.log(prevValue);
      return [...prevValue, note];
    });
  };

  // Допустим savedNotes = ["Coocking", "Shopping"]
  // Наша задача вернуть новый массив notesList который будет иметь вид(условно говоря) = [<NoteItem>Coocking</NoteItem>, <NoteItem>Shopping</NoteItem>]
  const notesList = savedNotes.map((value: string) => {
    return <NoteItem key={v4()}>{value}</NoteItem>;
  });

  return (
    <PageWrapper>
      <NoteForm onSubmit={onSaveNote}>
        <Input
          id="todo-input"
          name="todo"
          placeholder="Enter your note"
          label="Note"
          value={note}
          onChange={onNoteChange}
        />
        <ButtonControl>
          <Button name="Add" type="submit" />
        </ButtonControl>
      </NoteForm>
      <NotesList>
        <NoteTitle>Your notes</NoteTitle>

        <NotesDesk>
          <Notes>{notesList}</Notes>
        </NotesDesk>
      </NotesList>
    </PageWrapper>
  );
}

export default Homework_09;
