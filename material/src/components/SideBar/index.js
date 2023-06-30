const SideBar = ({ setMaterial, materials, selectedMaterial }) => {
  return (
    <div className="row-span-3 border-solid border-2 border-gray-600 item-select bg-neutral-900 side-bar-container">
      {materials && materials.length === 0 && (
        <div className="no-materials">NO MATERIALS</div>
      )}
      {materials &&
        materials.map((item, idx) => {
          return (
            <div
              key={idx}
              className="p-1 item-container"
              style={{
                backgroundColor:
                  item._id === selectedMaterial._id ? "#000740" : "",
              }}
              onClick={() => setMaterial(item)}>
              <div
                className="color-preview"
                style={{ backgroundColor: item.color }}
              />
              <div className="item-info">
                <div>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>
                    {item.volume} m<sup>3</sup>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SideBar;
