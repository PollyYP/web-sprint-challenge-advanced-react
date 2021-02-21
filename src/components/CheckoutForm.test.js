import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);

  // Assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  // Arrange
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByRole("button", { value: /submit/i });

  //Act - type into the form, filling out all fields of the form, then submit
  userEvent.type(firstNameInput, "Polly");
  userEvent.type(lastNameInput, "Yospan");
  userEvent.type(addressInput, "536 Monet Dr");
  userEvent.type(cityInput, "Rockville");
  userEvent.type(stateInput, "MD");
  userEvent.type(zipInput, "20850");
  userEvent.click(checkoutButton);

  //Assert - make sure that the customer shipping details we created is displayed in the message
  expect(firstNameInput).toBeInTheDocument("Polly");
  expect(lastNameInput).toBeInTheDocument("Yospan");
  expect(addressInput).toBeInTheDocument("536 Monet Dr");
  expect(cityInput).toBeInTheDocument("Rockville");
  expect(stateInput).toBeInTheDocument("MD");
  expect(zipInput).toBeInTheDocument("20850");
});
