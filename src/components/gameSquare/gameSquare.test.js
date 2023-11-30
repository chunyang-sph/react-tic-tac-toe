import GameSquare from "./gameSquare"
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Game Square", () => {
	test("When player1 click appear X", () => {
		const gameSquareId = 1
		render(
			<GameSquare
				id={gameSquareId}
				changeTurn={() => {}}
				turn={true}
				markSquare={() => {}}
				winner={false}
				reset={false}
			/>
		)

		// check there is no appear X and no O appear
		expect(screen.queryByText("X")).toBeNull()
		expect(screen.queryByText("O")).toBeNull()

		const gameSquare = screen.getByTestId(`square${gameSquareId}`)
		act(() => {
			userEvent.click(gameSquare)
		})

		// found in game square
		const gameSquareWithX = screen.findByText("X")
		expect(gameSquareWithX).toBeVisibled
		expect(gameSquareWithX).not.toBeNull()

		// no O appear
		expect(screen.queryByText("O")).toBeNull()
	})

	test("When player2 click appear O", () => {
		const gameSquareId = 2
		render(
			<GameSquare
				id={gameSquareId}
				changeTurn={() => {}}
				turn={false}
				markSquare={() => {}}
				winner={false}
				reset={false}
			/>
		)

		// check there is no appear X
		expect(screen.queryByText("O")).toBeNull()
		expect(screen.queryByText("X")).toBeNull()

		const gameSquare = screen.getByTestId(`square${gameSquareId}`)
		act(() => {
			userEvent.click(gameSquare)
		})

		// found in game square
		const gameSquareWithX = screen.findByText("O")
		expect(gameSquareWithX).toBeVisibled
		expect(gameSquareWithX).not.toBeNull()

		expect(screen.queryByText("X")).toBeNull()
	})
})
