/**
 * MyClass documentation demo.
 * 
 * @remarks
 * The remarks annotation can be added to any TSDoc comment to add a "Remarks" section to the doc page.
 * 
 * @public
 */
export class MyClass {
  /**
   * The doSomething method does something!
   * 
   * @returns No return value.
   */
  public doSomething(): void {
    console.log('Hello, world!')
  }

  /**
   * The shout method will yell your input string back at you!
   * @param s - string value to shout back.
   * @returns shout value.
   */
  public shout(s: string): string {
    if (s === '') {
      return '*Crickets*'
    }
    return s.toUpperCase()
  }

  /**
   * The echo method is very echoy.
   * @param s - string value to start echoing.
   * @returns the echoy string.
   */
  public echo(s: string): string {
    return `${this.shout(s)}... ${s}... ${s.slice(0, 1)}...`
  }
}
