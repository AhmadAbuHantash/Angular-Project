export class ToDo {
  private _id: number;
  private _done: boolean;
  private _description: string;
  private _date: Date;

  constructor(id: number, done: boolean, description: string, date: Date) {
    this._id = id;
    this._done = done;
    this._description = description;
    this._date = date;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter done
   * @return {boolean}
   */
  public get done(): boolean {
    return this._done;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter done
   * @param {boolean} value
   */
  public set done(value: boolean) {
    this._done = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }
}
