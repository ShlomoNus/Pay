import { useEffect, useState } from "react";
import axios from "axios";
import { DropResult } from "react-beautiful-dnd";

import { PicType } from "../types";
export default function usePics(id?: number) {
  const [pics, setPics] = useState<PicType[]>([]);

  async function fetchPics() {
    const { data } = await axios.get<PicType[]>(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=12`
    );

    setPics(data);
  }
  useEffect(() => {
    fetchPics();
  }, [id]);

  useEffect(() => {}, [pics]);

  function deletePic(id: number) {
    const picsCopy = structuredClone(pics);
    const index = pics.findIndex((pic) => pic.id === id);

    picsCopy.splice(index, 1);
    setPics(picsCopy);
  }

  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;
    const newPics = Array.from(pics);
    const [reorderedPic] = newPics.splice(result.source.index, 1);
    newPics.splice(result.destination.index, 0, reorderedPic);
    setPics(newPics);
  }

  return { pics, deletePic, handleDragEnd };
}
