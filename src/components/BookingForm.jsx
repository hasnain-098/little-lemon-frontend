import React from "react";
import { useFormik } from "formik";
import './BookingForm.css'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

    const validate = (values) => {
        const errors = {};
        if (!values.date) {
            errors.date = "Date is required!";
        }
        if (!values.time) {
            errors.time = "Time is required!";
        }
        if (values.guests < 1) {
            errors.guests = "At least 1 guest required."
        } else if (values.guests > 10) {
            errors.guests = "No more than 10 guests per table."
        }
        if (!values.occasion) {
            errors.occasion = "Occasion is rquired."
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: 1,
            occasion: "",
        },
        validate: validate,
        validateOnChange: true,
        validateOnBlur: true,
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
            <label htmlFor="date">Select Date </label>
            <input
                id="date"
                name="date"
                type="date"
                onChange={handleDateChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
                <div>{formik.errors.date}</div>
            ) : null}
            <br />

            <label htmlFor="time">Select Time </label>
            <select
                id="time"
                name="time"
                type="time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
            {formik.touched.time && formik.errors.time ? (
                <div>{formik.errors.time}</div>
            ) : null}
            <br />

            <label htmlFor="guests">Number of Guests </label>
            <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.guests}
            />
            {formik.touched.guests && formik.errors.guests ? (
                <div>{formik.errors.guests}</div>
            ) : null}
            <br />

            <label htmlFor="occasion">Occasion </label>
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
            {formik.touched.occasion && formik.errors.occasion ? (
                <div>{formik.errors.occasion}</div>
            ) : null}
            <br />

            <button id="reserve_btn" type="submit">
                Reserve Table
            </button>
        </form>
    );
}

export default BookingForm;