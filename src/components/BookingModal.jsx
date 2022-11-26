import { authContext } from "../context/AuthProvider";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookingModal = ({ device, setDevice }) => {
  // console.log(device);
  const { user } = useContext(authContext);
  const { name, resalePrice } = device;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const device = form.device.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = {
      user: name,
      name,
      email,
      phone,
    };
    console.log(booking);
    setDevice(null);
  };
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl text-teal-500  font-bold">{name}</h3>
          <form onSubmit={handleBooking}>
            <div>
              <input
                name="name"
                type="text"
                value={user.displayName}
                className="input mt-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Email Address"
                className="input mt-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="price"
                value={name}
                className="input mb-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="device"
                value={resalePrice}
                className="input mb-2 mt-2 input-bordered input-info w-full max-w-xs"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Enter Number"
              className="input mb-2 input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              name="location"
              placeholder="Metting Location"
              className="input mt-2 input-bordered input-primary w-full max-w-xs"
            />
            <br />
            <button
              type="submit"
              value="submit"
              className="btn mt-3  btn-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
