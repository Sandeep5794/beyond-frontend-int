import { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import FilterDropdown from "./FilterDropdown";
import users from "../data/userData";


const UserComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchInput.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });


  return (
    <>
      <div className="max-w-3xl mx-auto p-4 shadow">
        <div className="flex items-center justify-between">
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
          <FilterDropdown statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </div>
        <div className="mt-5 border-t border-gray-200 pt-5">
          <UserList statusData={filteredUsers} />
        </div>
      </div>
    </>
  );
};

export default UserComponent;
