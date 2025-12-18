import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockProps = {
    availableTimes: { availableTimes: ["17:00", "18:00", "19:00"] },
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test("renders all form fields and the submit button", () => {
    render(<BookingForm {...mockProps} />);

    expect(screen.getByLabelText(/select date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reserve table/i })).toBeInTheDocument();
  });

  test("shows validation errors when fields are touched and left empty", async () => {
    render(<BookingForm {...mockProps} />);
    
    const dateInput = screen.getByLabelText(/select date/i);
    
    fireEvent.blur(dateInput);

    await waitFor(() => {
      expect(screen.getByText(/date is required!/i)).toBeInTheDocument();
    });
  });

  test("calls submitForm with correct values when the form is valid", async () => {
    render(<BookingForm {...mockProps} />);

    fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: "2025-12-25" } });
    fireEvent.change(screen.getByLabelText(/select time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /reserve table/i }));

    await waitFor(() => {
      expect(mockProps.submitForm).toHaveBeenCalledWith({
        date: "2025-12-25",
        time: "18:00",
        guests: 4,
        occasion: "birthday",
      });
    });
  });
});