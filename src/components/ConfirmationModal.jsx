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
          {/* <p className="py-4 rounded-none text-red-800 font-bold">
            {message} !
          </p> */}
          <div className="modal-action">
            <label
              onClick={() => {
                deleteProduct(modalData);
              }}
              htmlFor="confirmation modal"
              className="btn rounded-none w-1/3 bg-red-800 text-white btn-outline"
            >
              {deleteButton}
            </label>
            <button
              onClick={cancelDelete}
              className="btn rounded-none w-1/3 bg-green-800 text-white btn-outline"
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
