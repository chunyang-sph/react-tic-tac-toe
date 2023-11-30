import GameArea from "./gameArea"
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Game Area", () => {
	const player1 = "p1"
	const player2 = "p2"

	test("Game start, 9 game square in page", () => {
		const { container } = render(
			<GameArea player1={player1} player2={player2} />
		)

		expect(screen.getByText("GAME ON!")).not.toBeNull()

		const gameSquare = container.getElementsByClassName("gameSquare")

		expect(gameSquare).toHaveLength(9)

		// no reset button display
		const hardResetBtn = screen.findByRole("button", {
			value: "Play another Round?",
		})
		const softResetBtn = screen.findByRole("button", {
			value: "Reset Game",
		})

		expect(hardResetBtn.length).toBeUndefined()
		expect(softResetBtn.length).toBeUndefined()
	})
})
