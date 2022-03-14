import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("checkbox-2 checked then checkbox-3 checked then checkbox-1 one should be disabled", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("checkbox-2"));
    fireEvent.click(screen.getByTestId("checkbox-3"));

    const checkbox1 = screen.getByTestId("checkbox-1");

    expect(checkbox1).toBeDisabled();
  });

  describe("checkbox 1", () => {
    test("if no checkboxes checked and check first one it should disable the other two checkboxes", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("checkbox-1"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).toBeChecked();
      expect(checkbox2).not.toBeChecked();
      expect(checkbox3).not.toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).toBeDisabled();
      expect(checkbox3).toBeDisabled();
    });

    it("if no", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("checkbox-1"));
      fireEvent.click(screen.getByTestId("checkbox-1"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox2).not.toBeChecked();
      expect(checkbox3).not.toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
  });

  describe("two checkboxes", () => {
    it("if checkbox-2 has been checked first and checkbox-1 has been checked next, checkbox-3 should be not disabled", () => {
      render(<App />);
      fireEvent.click(screen.getByTestId("checkbox-2"));
      fireEvent.click(screen.getByTestId("checkbox-1"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).toBeChecked();
      expect(checkbox2).toBeChecked();
      expect(checkbox3).not.toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
    it("if checkbox-2 has been checked first and checkbox-3 has been checked next, checkbox-1 should be disabled", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("checkbox-2"));
      fireEvent.click(screen.getByTestId("checkbox-3"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox2).toBeChecked();
      expect(checkbox3).toBeChecked();

      expect(checkbox1).toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
    it("if checkbox-2 has been unclick that checkbox-3 has been still checked , checkbox-1 should be not disabled", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("checkbox-2"));
      fireEvent.click(screen.getByTestId("checkbox-2"));
      fireEvent.click(screen.getByTestId("checkbox-3"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox2).not.toBeChecked();
      expect(checkbox3).toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
    it("if checkbox-3 has been unclick that checkbox-2 has been still checked , checkbox-1 should be not disabled", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("checkbox-3"));
      fireEvent.click(screen.getByTestId("checkbox-3"));
      fireEvent.click(screen.getByTestId("checkbox-2"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox2).toBeChecked();
      expect(checkbox3).not.toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
  });
  describe("checkbox-3", () => {
    it("if checkbox-3 has been checked first and checkbox-1 has been checked next, checkbox-2 should be not disabled", () => {
      render(<App />);
      fireEvent.click(screen.getByTestId("checkbox-3"));
      fireEvent.click(screen.getByTestId("checkbox-1"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).toBeChecked();
      expect(checkbox3).toBeChecked();
      expect(checkbox2).not.toBeChecked();

      expect(checkbox1).not.toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
    it("if checkbox-3 has been checked first and checkbox-2 has been checked next, checkbox-1 should be disabled", () => {
      render(<App />);
      fireEvent.click(screen.getByTestId("checkbox-3"));
      fireEvent.click(screen.getByTestId("checkbox-2"));

      const checkbox1 = screen.getByTestId("checkbox-1");
      const checkbox2 = screen.getByTestId("checkbox-2");
      const checkbox3 = screen.getByTestId("checkbox-3");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox3).toBeChecked();
      expect(checkbox2).toBeChecked();

      expect(checkbox1).toBeDisabled();
      expect(checkbox2).not.toBeDisabled();
      expect(checkbox3).not.toBeDisabled();
    });
  });
});
