"use client";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect } from "react";
import { SortableItem } from "@/components/ui/SortableItem";
import { useNotes } from "@/hooks/useNotes";
import Card from "@/components/ui/Card";

const Board = () => {
  const { notes, loadNotes } = useNotes();
  useEffect(() => {
    loadNotes();
  }, []);

  const { handleDragEnd } = useNotes();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={notes} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-4 overflow-y-scroll">
          <div className="flex flex-col justify-start items-center">
            {/* {notes.map((props) => (
              <Card
                key={props.id}
                id={props.id}
                title={props.title}
                content={props.title}
              />
            ))} */}
          </div>
        </div>
      </SortableContext>
{/*       <SortableContext items={notes} strategy={verticalListSortingStrategy}>
        {notes.map((props) => (
          <Card
            key={props.id}
            id={props.id}
            title={props.title}
            content={props.title}
          />
        ))}
      </SortableContext> */}
    </DndContext>
  );
};

export default Board;
{
  /* <SortableItem key={id} id={id} /> */
}
