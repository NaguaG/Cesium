import Input from "../Input";

const MaterialInfo = ({ setMaterial, material }) => {
  return (
    <div className="col-span-2 border-solid border-2 border-gray-600 rounded-md p-4  bg-neutral-900">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="mb-2">Name</h1>
          <Input
            onChange={(e) => {
              setMaterial({ ...material, name: e.target.value });
            }}
            value={material.name}
          />
        </div>
        <div>
          <h1 className="mb-2">Color</h1>
          <div className="color-info">
            <div
              style={{ backgroundColor: material.color }}
              className="color-preview"></div>
            <div className="color-input">
              <Input
                onChange={(e) => {
                  setMaterial({
                    ...material,
                    color: e.target.value,
                  });
                }}
                value={material.color}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div>
          <h1 className="mb-2">
            Volume (m<sup>3</sup>)
          </h1>
          <Input
            type="number"
            onChange={(e) => {
              setMaterial({ ...material, volume: e.target.value });
            }}
            value={material.volume}
          />
        </div>
        <div>
          <h1 className="mb-2">
            Cost (USD per m<sup>3</sup>)
          </h1>
          <Input
            type="number"
            onChange={(e) => {
              setMaterial({ ...material, cost: e.target.value });
            }}
            value={material.cost}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div>
          <h1 className="mb-2">Date</h1>
          <Input
            onChange={(e) => {
              setMaterial({ ...material, date: e.target.value });
            }}
            value={material.date}
            type="date"
          />
        </div>
      </div>
    </div>
  );
};

export default MaterialInfo;
