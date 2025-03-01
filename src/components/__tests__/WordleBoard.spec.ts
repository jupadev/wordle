import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  const wordOfTheDay = 'MAIL'
  it('should render victory message when user guess the word of the day', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('MAIL')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain('You Won!')
  })

  it('should render defeat message when user not guess the word of the day', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('WRONG')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain('Best luck next time!')
  })
})
