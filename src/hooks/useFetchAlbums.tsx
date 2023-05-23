import axios from "axios";
import { useEffect, useState } from "react";
import { User, Hash, Album, RowAlbum } from "../types";

export default function useFetchAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {

    getAlbums();

       }, []);
  async function getAlbums() {

    const { data: users } = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    const hash = users.reduce((userObject, currentUser) => {
      const { id, name, email } = currentUser;
      userObject[id] = { name, email };
      return userObject;
    }, {} as Hash);

    const { data: rowAlbums } = await axios.get<RowAlbum[]>(
      "https://jsonplaceholder.typicode.com/albums"
    );

    const albums = rowAlbums.map((a) => {
      const { userId, ...rest } = a;
      return { ...rest, ...hash[userId] };
    });

    setAlbums(albums);
  }

  return albums;
}
