import { RootState } from "@/store/store";
import { IUser } from "@/types/IUser";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListUser } from "./fetchListUser";

export function useIndex() {
  const listUser = useSelector((state: RootState) => state.listUser.list);
  const dispatch = useDispatch();
  const router = useRouter();

  const [searchText, setSearchText] = useState<string>("");
  const [searchedList, setSearchedList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  function onPressList(data: IUser) {
    router.navigate({
      pathname: "/detail",
      params: {
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body,
      },
    });
  }

  function onPressSearch() {
    if (searchText) {
      setIsSearch(true);
      const filtered = listUser.filter((e) => e.title.includes(searchText));
      setSearchedList(filtered);
    } else {
      setIsSearch(false);
    }
  }

  useEffect(() => {
    dispatch(fetchListUser());
  }, []);

  return {
    actions: {
      onPressList,
      setSearchText,
      onPressSearch,
    },
    states: {
      listUser: isSearch ? searchedList : listUser,
      searchText,
    },
  };
}
