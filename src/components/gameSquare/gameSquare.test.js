import { act, render, screen } from "@testing-library/react"
import GameSquare from "./gameSquare"
import userEvent from "@testing-library/user-event"

describe("When Clicked, x or o appears", () => {
	test("Click on X", () => {
		render(
			<GameSquare
				id={1}
				turn={true}
				changeTurn={() => {}}
				markSquare={() => {}}
			/>
		)

		// when user click on game square
		const gameSquare = screen.queryByText("X")

		act(() => {
			userEvent.click(gameSquare)
		})

		// then x appears on game
		const gameSquareWithX = screen.findByText("x")
		expect(gameSquareWithX).toBeReceived
	})
})
