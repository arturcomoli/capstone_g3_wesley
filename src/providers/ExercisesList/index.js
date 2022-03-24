import api from "../../services/api";
import { createContext, useContext, useEffect, useState } from "react";

const ExercisesListContext = createContext();

export const ExercisesListProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@token:KenzieWarmup")) || "";

  const user = JSON.parse(localStorage.getItem("@userInfo:KenzieWarmup")) || "";

  useEffect(() => {
    ListLoader();
  }, []);  

  const ListLoader = async (token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .get("/exercises", options)
      .then((res) => {
        setFullList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const [fullList, setFullList] = useState([]);
  const [filteredList, setFilteredList] = useState(fullList);
  const [userList, setUserList] = useState([]);
  const [update, setUpdate] = useState(true);

  const addToUserList = async (data, toast, user, token) => {
    const { id } = user;
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    delete data.img;
    delete data.id;
    delete data.instructions;
    const newData = { ...data, userId: id, counter: 0, freq: 5 };
    console.log(newData);
    await api
      .post("/userlists", newData, options)
      .then((res) => {
        setUpdate(!update);
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

  // const deleteFromUserList = async (data, toast) => {
  //   const { id } = data;
  //   await api
  //     .delete(`/userlists/${id}`, options)
  //     .then((res) => {
  //       toast({
  //         title: "Exercício deletado com sucesso!",
  //         status: "success",
  //       });
  //     })
  //     .catch((err) =>
  //       toast({
  //         title: "Algo de errado ocorreu!",
  //         status: "error",
  //       })
  //     );
  // };

  const getUserList = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { id } = user;
    await api
      .get(`/users/${id}?_embed=userlists`, options)
      .then((res) => {
        setUserList(res.data.userlists);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      getUserList();
    }
  }, [update]);

  const updateExercise = async (exercise, toast, token) => {
    const { id, freq } = exercise;
    let newCounter = exercise.counter;
    let newExercise = {};
    if (newCounter < freq) {
      newCounter++;
      newExercise = { ...exercise, counter: newCounter };
    }
    if (newCounter === freq) {
      const date = new Date();
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(date);
      newExercise = {
        ...exercise,
        status: true,
        counter: newCounter,
        last: `${formattedDate}`,
      };
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await api
      .put(`/userlists/${id}`, newExercise, options)
      .then((res) => {
        toast({
          title: "Exercício atualizado!",
          status: "success",
        });
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  const filterList = (filterWord) => {
    const newList = fullList.filter((item) => item.category === filterWord);
    setFilteredList(newList);
  };
  return (
    <ExercisesListContext.Provider
      value={{
        // token,
        // user,
        addToUserList,
        // deleteFromUserList,
        getUserList,
        updateExercise,
        fullList,
        filterList,
        filteredList,
        setFilteredList,
        userList,
        setUserList,
        ListLoader,
      }}
    >
      {children}
    </ExercisesListContext.Provider>
  );
};

export const useExercisesListProvider = () => useContext(ExercisesListContext);
