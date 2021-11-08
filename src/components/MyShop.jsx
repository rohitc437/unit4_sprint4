   
import { useState } from "react";
import "./MyShop.css";
function MyShop() {
  const [data, setData] = useState({
    title: "",
    out: false
  });
  const [current, setCurrent] = useState([]);
  const [order, setOrder] = useState([]);
  const [list, setList] = useState(true);
  const myChnage = (e) => {
    const { name, value, checked, type } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const myCurrent = () => {
    setCurrent([...current, data]);
  };
  const myOrder = () => {
    setOrder([...order, data]);
  };

  const myList = () => {
    setList(!list);
  };

  const myMove = (e) => {
    let index;
    for (let i = 0; i < order.length; i++) {
      if (e === order[i]) {
        index = i;
      }
    }
    // let v = order.splice(index, 1);
    setCurrent([...current, order.splice(index, 1)[0]]);
  };

  const handleDelete = (e) => {
    let index;
    for (let i = 0; i < order.length; i++) {
      if (e === order[i]) {
        index = i;
      }
    }
    order.splice(index, 1);
  };
  const handleDeletea = (e) => {
    let index;
    for (let i = 0; i < current.length; i++) {
      if (e === order[i]) {
        index = i;
      }
    }
    current.splice(index, 1);
  };

  return (
    <div>
      <div className="input-section">
        <input
          className="input"
          type="text"
          name="list"
          placeholder="Enter the item"
          onChange={myChnage}
        />
        <button className="current" onClick={myCurrent}>
          Add to Current List
        </button>
        <button className="order" onClick={myOrder}>
          Add to Order list
        </button>
      </div>
      <div className="button">
        <button className="buttonStyle" onClick={myList}>
          {list ? "Show order list" : "show Current list"}
        </button>
      </div>
      <div className="show-data">
        {list ? (
          <div>
            <h1>Current item</h1>
            <hr />
            {current.map((e) => (
              <div>
                {e.Checkbox ? (
                  <div className="out">
                    <h2>out of stock</h2>
                    <p>{e.list}</p>
                    <button
                  onClick={(e) => {
                    handleDeletea(e);
                  }}
                >
                  Delete
                </button>
                  </div>
                ) : (
                  <div className="d">
                    <p>{e.list}</p>
                    <span>out of Stock</span>
                    <input
                      type="checkbox"
                      name="Checkbox"
                      onChange={myChnage}
                    />
                    <button
                  onClick={(e) => {
                    handleDeletea(e);
                  }}
                >
                  Delete
                </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>Order item</h1>
            <hr />
            {order.map((e) => (
              <div className="d">
                <p>{e.list}</p>
                <button
                  onClick={(e) => {
                    myMove(e);
                  }}
                >
                  Move
                </button>
                <button
                  onClick={(e) => {
                    handleDelete(e);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export { MyShop };