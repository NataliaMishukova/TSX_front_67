export interface feedbackProps {
   like: number; 
    dislike: number;
   
  onLike: () => void;
  onDislike: () => void;
  resetResults: () => void;
}
