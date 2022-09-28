import React, { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { JokeProps, Query } from "../../types";
import { base } from "../utils/api";

export const deafultJoke = {
  icon_url: "",
  id: "",
  url: "",
  value: "",
};

export const defaultQuery = {
  result: [{ ...deafultJoke }],
  total: 0,
};

export const AppContext = createContext({
  loading: true,
  categories: [] as string[],
  setLoading: (state: boolean) => {},
  joke: deafultJoke,
  loadingJoke: true,
  getJoke: (category: string) => {},
  searching: false,
  setSearching: (state: boolean) => {},
  searchValue: "",
  setSearchValue: (value: string) => {},
  query: defaultQuery,
  setQuery: (result: Query) => {},
  error: "",
  reset: () => {},
});

type Props = {
  children: ReactNode | ReactElement;
};

const AppContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(true) as [boolean, (state: boolean) => {}];
  const [loadingJoke, setLoadingJoke] = useState<boolean>(true) as [
    boolean,
    (state: boolean) => {}
  ];
  const [categories, setCategory] = useState<string[]>([]);
  const [joke, setJoke] = useState<JokeProps>({ ...deafultJoke });
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState<Query>({ ...defaultQuery }) as [Query, (value: Query) => {}];
  const [error, setError] = useState("");

  const getJoke = (category: string) => {
    setLoadingJoke(true);
    base(`/random?category=${category}`)
      .then((joke: JokeProps) => {
        setJoke({
          ...joke,
          icon_url: "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png",
        });
        setLoadingJoke(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingJoke(false);
      });
  };

  const queryJoke = () => {
    setLoading(true);
    base(`/search?query=${searchValue})`)
      .then((res) => {
        setLoading(false);
        if (res.error) {
          const err = res.message.split(":")[1].trim();
          setError(err.charAt(0).toLocaleUpperCase() + err.slice(1));
          setQuery({ ...defaultQuery });
        } else {
          setQuery(res);
          setError("");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const reset = () => {
    setError("");
    setQuery({ ...defaultQuery });
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue) {
      queryJoke();
    } else {
      reset();
    }
  }, [searchValue]);

  useEffect(() => {
    base("/categories").then((res) => {
      setCategory(res);
      setLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        categories,
        setLoading,
        loadingJoke,
        joke,
        getJoke,
        searching,
        setSearching,
        searchValue,
        setSearchValue,
        query,
        setQuery,
        error,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
