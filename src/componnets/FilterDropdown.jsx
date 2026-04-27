const FilterDropdown = ({ statusFilter, setStatusFilter }) => {
  return (
    <>
      <div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </>
  );
};

export default FilterDropdown;
