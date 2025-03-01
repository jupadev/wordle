import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  it('should render victory message when user guess the word of the day', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'MAIL' } })
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('MAIL')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain('You Won!')
  })
})
