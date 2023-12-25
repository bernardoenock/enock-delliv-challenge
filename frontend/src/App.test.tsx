import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./app/store"

jest.mock("react-leaflet")

test("renders App component", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  expect(container).toBeTruthy()
})
