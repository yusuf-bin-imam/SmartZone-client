import { authContext } from "../context/AuthProvider";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookingModal = ({ device, setDevice }) => {
  // console.log(device);
  const { user } = useContext(authContext);

  const { name, img, _id, resalePrice } = device;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const photo = form.image.value;
    // const device = form.device.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      userName,
      photo,
      deviceName: name,
      location,
      price,
      email,
      phone,
    };
    // console.log(booking);
    fetch("https://assignment-12-server-lake.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setDevice(null);
          toast.success("Your booking is successfully confirmed");
        }
      });
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
                disabled
                className="input mt-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                value={user.email}
                disabled
                placeholder="Email Address"
                className="input mt-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="image"
                value={img}
                disabled
                className="input mt-2 input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="price"
                value={resalePrice}
                disabled
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
            </button>{" "}
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
