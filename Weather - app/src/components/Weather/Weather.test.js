// import { getByText } from "@testing-library/dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Weather from "../Weather/index";
import { weatherService } from "../../Service/Weather";

jest.mock("../../Service/Weather/index.js");

test("should render Weather App", () => {
  const { getByText } = render(<Weather />);

  expect(getByText("Weather App")).not.toBeUndefined();
  expect(getByText("Add New City")).not.toBeUndefined();
});

test("should add Weather", async () => {
  weatherService.mockResolvedValue("Baku");
  const { getByText, getByLabelText, getByTestId } = render(<Weather />);

  fireEvent.change(getByLabelText("Add new City"), {
    target: { value: "Baku" },
  });
  fireEvent.click(getByText("Add New City"));

  expect(getByTestId("weatherId")).not.toBeUndefined();
  await waitFor(() => {
    expect(getByTestId("weatherId").textContent).toEqual(
      expect.stringMatching(/baku/gi)
    );
  });
});
