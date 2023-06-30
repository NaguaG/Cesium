import Button from "../Button";
import { TiPlus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Header = ({ onSave, onRemove, setMaterial }) => {
  return (
    <div className="mx-auto lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-blue sm:text-6xl">
        Materials
      </h2>
      <div className="mt-5">
        <Button
          onClick={onSave}
          label="Add"
          className="bg-blue-500 hover:bg-blue-700"
          Icon={<TiPlus className="add-icon" />}
        />
        <Button
          onClick={onRemove}
          label="Delete"
          className="bg-red-500 hover:bg-red-700"
          Icon={<MdDelete className="delete-icon" />}
        />
        <Button
          onClick={() => {
            setMaterial({
              name: "",
              color: "#000",
              volume: 0,
              cost: 0,
              date: new Date().toISOString().split("T")[0],
            });
          }}
          label="New Material"
          className="bg-blue-300 hover:bg-blue-400"
        />
      </div>
    </div>
  );
};

export default Header;
