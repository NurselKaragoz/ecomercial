import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../Store/Actions/productActions";

export default function Pagination({ onClickHandler }) {
  // useEffect(() => {
  //   dispatch(fetchProduct(initialLimit, initialOffset));
  // }, [dispatch]);

  // const onClickHandler = async (limit, offset) => {
  //   try {
  //     dispatch(fetchProduct(limit, offset));
  //     console.log("limit and offset>>>", limit, offset);
  //     setData({ limit, offset });
  //     console.log("setdatapagination=>>>", setData);
  //     const queryParams = new URLSearchParams({
  //       limit: limit,
  //       offset: offset,
  //     });
  //     window.history.replaceState({}, "", `?${queryParams.toString()}`);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //   console.log("datapagination=>>>", data);
  // };

  return (
    <nav aria-label="Page navigation example">
      {/* <ul className="gap-4 flex">
        {pageNumber.map((number) => (
          <li
            key={number}
            className="border-colors-blue300 border-solid cursor-pointer"
            onClick={() => onPageClick(number)}
          >
            <Button>{number}</Button>
          </li>
        ))}
      </ul> */}
      <div>
        <button
          className="border-solid bg-colors-green"
          onClick={() => onClickHandler()}
        >
          Fetch Data
        </button>
      </div>
    </nav>
  );
}
