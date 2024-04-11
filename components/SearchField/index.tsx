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
      className=" flex items-center border border-gray-300 rounded-2xl px-2 py-1 w-[300px]"
      onSubmit={onSubmitHandler}
    >
      <input
        id="book-search"
        name="book-search"
        className="flex-grow outline-none px-2 py-1"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
      <Button
        type="submit"
        className="flex-none ml-2"
        icon={<LiaSearchSolid className="w-6 h-6 text-gray-600" />}
        onClick={() => {}}
      />
    </form>
  );
};
export default SearchField;
