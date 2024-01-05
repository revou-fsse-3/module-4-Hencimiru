import React, { useEffect, useState } from "react";

const CreateCategory = () => {
  const [categoryCreate, setCategoryCreate] = useState();

  const createCategory = async () => {
    const response = await fetch(
      "https://mock-api.arikmpt.com/api/category/create",
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setCategoryCreate(data);
    }
  };
  useEffect(() => {
    createCategory();
  }, []);

  return <div>create category
     {JSON.stringify(createCategory)}</div>;
};

export default CreateCategory;
