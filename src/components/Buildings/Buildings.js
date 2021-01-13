import React, {  useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getBuildings as getBuildingsAction } from "../../redux/actions/buildingActions";
import modalTypes from "../../redux/types/modalTypes";
import styles from "./building.module.css";

const Buildings = ({
  buildings,
  isLoading,
  error,
  showModal,
  getBuildings,

}) => {
  useEffect(() => {
    getBuildings();
  }, [getBuildings]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_BUILDING);
  };

  const showDeleteModal = (buildingId) => {
    showModal(modalTypes.DELETE_BUILDING, { id: buildingId });
  };

  const showUpdateModal = (buildingId) => {
    showModal(modalTypes.UPDATE_BUILDING, { id: buildingId });
  };

  return (
    <div className={styles.buildingContainer}>
      <button onClick={() => showAddModal()}>
        Add building
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Installed Boilers</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.customerId}</td>
              <td>{item.customerName}</td>
              <td>{item.installedBoilers}</td>
              <td>
                <button style={btnStyleDel} onClick={()=>showDeleteModal(item.id)}>
                  X
                </button>
              </td>
              <td>
                <button
                  style={btnStyleEdit}
                  onClick={()=>(showUpdateModal(
                    item,
                    item.id,
                    item.name,
                    item.address,
                    item.phone,
                    item.customerId,
                    item.customerName
                  ))}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const btnStyleEdit = {
  background: "#193c78",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
const btnStyleDel = {
  background: "#dc8a2a",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
      getBuildings: getBuildingsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.buildings.isLoading,
    error: state.buildings.error,
    buildings: state.buildings.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
