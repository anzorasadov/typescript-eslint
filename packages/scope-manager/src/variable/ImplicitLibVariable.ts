import { ESLintScopeVariable } from './ESLintScopeVariable';
import { Variable } from './Variable';
import { Scope } from '../scope';

/**
 * An variable implicitly defined by the TS Lib
 */
class ImplicitLibVariable extends ESLintScopeVariable implements Variable {
  /**
   * `true` if the variable is valid in a type context, false otherwise
   */
  public readonly isTypeVariable: boolean;

  /**
   * `true` if the variable is valid in a value context, false otherwise
   */
  public readonly isValueVariable: boolean;

  public constructor(
    scope: Scope,
    {
      isTypeVariable,
      isValueVariable,
      name,
      writeable,
    }: {
      isTypeVariable?: boolean;
      isValueVariable?: boolean;
      name: string;
      writeable?: boolean;
    },
  ) {
    super(name, scope);
    this.isTypeVariable = isTypeVariable ?? false;
    this.isValueVariable = isValueVariable ?? false;
    this.writeable = writeable ?? false;
  }
}

export { ImplicitLibVariable };
