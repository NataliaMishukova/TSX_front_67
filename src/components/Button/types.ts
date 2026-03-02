//так как пропс это объект, то чтобы его протипизировать нужно создать интерфейс
export interface ButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void  //типизируем функцию
  isRed?:boolean;
  disabled?:boolean;
}