import App from "./pages/app"
import { expect, test} from '@jest/globals'
import { render, screen } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */

 describe('Home', () => {
    it('renders a heading', () => {
      render(<App />)
      const heading = document.getElementById('test')
      expect(heading).toBeInTheDocument()
    })
  })