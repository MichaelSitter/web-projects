/**
  * <h1>{{packageName}}</h1>
  * 
  * This package came with pre-installed auto documentation powered by Api-Extractor.
  * This content in particular can be modified by finding the <b>\@packageDocumentation</b> annotation & edit this comment!
  * 
  * TSDoc markup must use HTML; for example:
  * 
  * <ol>
  * <li>Ordered</li>
  * <li>lists</li>
  * <li>use</li>
  * <li>tags!</li>
  * </ol>
  * 
  * Adding emphasis can be done using <b>bold</b> or <i>italic</i>, or any other supported HTML tag!
  * 
  * The "code" tag is very useful for adding code samples!
  * <code>
  *   import myModule from './index'
  *   myModule('foo')
  * </code>
  * 
  * Use header tags to organize your content! 
  * 
  * <h2>Sub-content section!</h2>
  * 
  * @packageDocumentation
  */

import { MyClass } from './MyClass'

export { MyClass } from './MyClass'

/**
 * Echo formatter options.
 * @public
 */
export interface EchoOpts {
  /**
   * Enable SHOUT mode.
   */
  isShout?: boolean
  /**
   * Enable echo... echo..... echo..... mode.
   */
  isEchoy?: boolean
}

/**
 * Fancy async printer method. Check out {@link MyClass}.
 * @param s - input string.
 * @param opts - formatter options
 * @returns Promise which resolves to formatted string value.
 * @public
 */
export const echoAsync = async function(s: string, opts?: EchoOpts): Promise<string> {
  const c = new MyClass()
  let workingString = s
  if (opts?.isShout) {
    workingString = c.shout(s)
  }
  if (opts?.isEchoy) {
    workingString = c.echo(s)
  }
  return workingString
}
