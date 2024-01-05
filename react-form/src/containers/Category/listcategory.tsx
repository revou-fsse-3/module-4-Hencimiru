import  { useEffect, useState } from "react";

const CategoryList = () => {
  const [listCategory, setListCategory] = useState();

  const getListCategory = async () => {
    const response = await fetch(
      "https://mock-api.arikmpt.com/api/category?page=1&name=mock category",
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setListCategory(data);
    }
  };
  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <div>
      category
      {JSON.stringify(listCategory)}
    </div>
  );
};

export default CategoryList;
