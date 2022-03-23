import api from "../../services/api";
import { createContext, useContext, useEffect, useState } from "react";

const ExercisesListContext = createContext();

export const ExercisesListProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@token:KenzieWarmup"));

  const user = JSON.parse(localStorage.getItem("@user:KenzieWarmup"));

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const ListLoader = async () => {
    await api
      .get("/exercises", options)
      .then((res) => {
        setFullList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ListLoader();
  });

  const [fullList, setFullList] = useState([]);
  const [filteredList, setFilteredList] = useState(fullList);

  const addToUserList = async (data, toast) => {
    const { id } = user;
    const newData = { ...data, userId: id };
    await api
      .post("/userlists", newData, options)
      .then((res) => {
        toast({
          title: "Exercício cadastrado com sucesso!",
          status: "success",
        });
      })
      .catch((err) =>
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        })
      );
  };

  const deleteFromUserList = async (data, toast) => {
    const { id } = data;
    await api
      .delete(`/userlists/${id}`, options)
      .then((res) => {
        toast({
          title: "Exercício deletado com sucesso!",
          status: "success",
        });
      })
      .catch((err) =>
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        })
      );
  };

  const getUserList = async () => {
    const { id } = user;
    const response = await api.get(`/users/${id}?_embed=userlists`, options);
    const exercisesList = response.userlists;
    return exercisesList;
  };

  const filterList = (filterWord) => {
    const newList = fullList.filter((item) => item.category === filterWord);
    setFilteredList(newList);
  };

  return (
    <ExercisesListContext.Provider
      value={{
        token,
        user,
        addToUserList,
        deleteFromUserList,
        getUserList,
        fullList,
        filterList,
        filteredList,
        setFilteredList,
      }}
    >
      {children}
    </ExercisesListContext.Provider>
  );
};

export const useExercisesListProvider = () => useContext(ExercisesListContext);
