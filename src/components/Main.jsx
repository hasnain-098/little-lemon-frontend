import { useReducer } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import dish_1 from "../assets/dish_1.jpg";
import dish_3 from "../assets/dish_3.jpg";
import './Main.css'

const Main = () => {

    const seededRandom = (seed) => {
        let m = 2 ** 35 - 31;
        let a = 185852;
        let s = seed % m;
        return function () {
            s = (s * a) % m;
            return s / m;
        };
    };

    const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            result.push(i + ':00');
            
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = (formData) => {
        return true;
    };

    const initialState = {
        availableTimes: fetchAPI(new Date())
    };

    const updateTimes = (state, action) => ({
        availableTimes: fetchAPI(new Date(action))
    });

    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <Routes>
            <Route path="/" element={
                <section>
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                        <Link to={"/booking"}>
                            <button aria-label="On Click">Reserve Table</button>
                        </Link>
                    </div>
                    <div>
                        <img src={dish_1} alt="dish 1" />
                        <img src={dish_3} alt="dish 3" />
                    </div>
                </section>
            } />
            <Route path="/booking" element={
                <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm} />
            }
            />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;