import React from "react";
import { useFormik } from "formik";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: 1,
            occasion: "",
        },
        onSubmit: values => {
            submitForm(values)
        },
    });

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        formik.setFieldValue("date", selectedDate);
        dispatch(selectedDate);
        formik.setFieldValue("time", "");
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="date">Select Date</label>
            <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date}
            />

            <label htmlFor="time">Select Time</label>
            <select
                id="time"
                name="time"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.time}
                disabled={!formik.values.date}
            >
                <option value="">Select a time</option>
                {availableTimes.availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={10}
                onChange={formik.handleChange}
                value={formik.values.guests}
            />       

            <label htmlFor="occasion">Occasion</label>
            <select 
                name="occasion" 
                id="occasion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.occasion}>
                
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
            </select>      

            <button id = "reserve_btn" type="submit">
                Reserve Table
            </button>
        </form>
    );
}

export default BookingForm;