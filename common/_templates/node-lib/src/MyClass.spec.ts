import { MyClass } from './MyClass'

describe('MyClass', () => {
  describe('doSomething', () => {
    it('should not throw', () => {
      const myC = new MyClass()
      expect(() => myC.doSomething()).not.toThrow()
    })
  })

  describe('shout', () => {
    it('should uppercase inputs', () => {
      const say = 'hi everyone!'
      const myC = new MyClass()
      const res = myC.shout(say)
      expect(res).toBe(say.toUpperCase())
    })
  })

  describe('echo', () => {
    it('should do something cool with the input', () => {
      const say = 'hello!'
      const myC = new MyClass()
      const res = myC.echo(say)
      expect(res).toBe('HELLO!... hello!... h...')
    })
  })
})
