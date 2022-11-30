import React from "react";

const ConfirmationModal = ({
  title,
  deleteProduct,
  deleteSeller,
  modalData,
  message,
  deleteButton,
  cancelDelete,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-red-500 font-bold">{message} !</p>
          <div className="modal-action">
            <label
              onClick={() => {
                deleteProduct(modalData);
              }}
              htmlFor="confirmation modal"
              className="btn btn-warning btn-outline"
            >
              {deleteButton}
            </label>
            <button
              onClick={cancelDelete}
              className="btn btn-success btn-outline"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
