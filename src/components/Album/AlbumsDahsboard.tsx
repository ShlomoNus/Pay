import { useState } from "react";
import AlbumItem from "./AlbumItem";
import {  VStack, Wrap } from "@chakra-ui/react";
import useFetchAlbums from "../../hooks/useFetchAlbums";
import {v4 as uuid} from 'uuid'
import { Pagination } from "../Pagination";


export default function AlbumsDahsboard() {

  const albums = useFetchAlbums()

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(albums.length / itemsPerPage);

  const displayedData = albums.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  const AlbumItems = displayedData.map((albumInfo) => {
    return <AlbumItem key={uuid()} {...albumInfo} />;
  });

  return (
      <VStack justify='space-between'>
      <Wrap m='2' h='80%'>{AlbumItems}</Wrap>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
      </VStack>
  );
}
