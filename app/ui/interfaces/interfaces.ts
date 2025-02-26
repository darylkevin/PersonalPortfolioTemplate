import { ReactNode, Dispatch, SetStateAction } from "react";

export interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface FlashCardProps {
  cardIndex: number;
  cardStack: number[];
  cardIsSwiped: boolean;
  setCardIsSwiped: React.Dispatch<React.SetStateAction<boolean>>;
  setCardStack: React.Dispatch<React.SetStateAction<number[]>>;
  topCardIndex: number;
}

export interface CardProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export interface CinemaCardProps {
  cardIndex: number;
}

export interface NavigationMobileProps {
  cardIndex: number;
  putSelectedCardOnTop: (i: number) => void;
  setSelectedExperience: React.Dispatch<React.SetStateAction<number>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
  setSelectedEducation: React.Dispatch<React.SetStateAction<number>>;
}
