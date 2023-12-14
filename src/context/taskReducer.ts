import { ColumPlusTasks } from "@/interfaces/Colum";
import { Reducer } from "react";
export interface TaskAction {
      type: string;
      payload?: any;
    }

export const taskReducer: Reducer<ColumPlusTasks[], TaskAction>= (state, action) => {
      switch (action.type) {
            case 'SET_INITIAL_COLUMNS':
                  return action.payload as ColumPlusTasks[];

            case 'ADD_COLUM':
                  return [...state, action.payload as ColumPlusTasks];

            default:
                  return state;
      } 

      return state;
}