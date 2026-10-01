import { fireEvent, render, screen } from "@testing-library/react";
import { LikesProvider } from "../context/LikesContext";
import LikeButton from "./LikeButton";
import { describe, it, expect } from "vitest";

describe("LikeButton", () => {
  it("increases the number of likes when clicked", () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    );

    const button = screen.getByRole("button", { name: /like/i });

    fireEvent.click(button);

    expect(button.textContent).toContain("Like (1)");
  });
});