import { LiaSearchSolid } from "react-icons/lia";
import Button from "../Button";
import { useState } from "react";
type SearchProps = {
  onSearch: (value: string) => void;
};
const SearchField = ({ onSearch }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchValue);
  };
  return (
    <form
      className=" border-solid border-black border rounded py-1 px-2 w-[300px]"
      onSubmit={onSubmitHandler}
    >
      <input
        id="book-search"
        name="book-search"
        className="outline-none"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
      <Button type="submit" icon={<LiaSearchSolid />} onClick={() => {}} />
    </form>
  );
};
export default SearchField;
