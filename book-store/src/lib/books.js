import { books } from "@/app/data/books";
import { resolve } from "styled-jsx/css";
import { reviews } from "./reviews";

export async function getBooks() {
  //const res = await fetch("https://api.example.com/books");
  //const data = await res.json();
  //return data;

  //Simulate a delay to mimic fetching data from an API  
  await new Promise((resolve) => setTimeout(resolve,1000));
  return books;
}

export async function getBooksID(id) {
  //const res = await fetch("https://api.example.com/books/${id}");
  //const data = await res.json();
  //return data;

  //Simulate a delay to mimic fetching data from an API  
  await new Promise((resolve) => setTimeout(resolve,1000));
  return books.find((book) => book.id === id);
}

export async function getReviewsByBookId(bookId) {
  //const res = await fetch("https://api.example.com/books");
  //const data = await res.json();
  //return data;

  //Simulate a delay to mimic fetching data from an API  
  await new Promise((resolve) => setTimeout(resolve,1000));
  return reviews.filter((review) => review.bookId === bookId);
}


