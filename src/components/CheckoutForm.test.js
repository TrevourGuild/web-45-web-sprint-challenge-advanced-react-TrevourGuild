import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/react';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.queryByText(/checkout form/i)

    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    const firstNameInput = screen.getByText('First Name:')

    userEvent.type(firstNameInput, 'trevour')

    const lastNameInput = screen.getByText('Last Name:')

    userEvent.type(lastNameInput, 'guild')

    const addressInput = screen.getByText('Address:')

    userEvent.type(addressInput, '1234 marry way')

    const cityInput = screen.getByText('City:')

    userEvent.type(cityInput, 'temecula')

    const stateInput = screen.getByText('State:')

    userEvent.type(stateInput, 'california')

    const zipInput = screen.getByText('Zip:')

    userEvent.type(zipInput, '24587')
});
