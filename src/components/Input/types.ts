//в вайле ts прописываем пропс
export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  error?:undefined|string;
  disabled?:boolean; // "?" ставим в пропс, чтобы сделать их необязательными и система не ругалась. Затем добавляем необходимые пропс в наш объект (в скобочки)
}