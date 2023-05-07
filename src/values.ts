
export class Raw {
  constructor(
    public value: any
  ) {}

  public _TYPE = 'raw'
}

export class Float {
  constructor(
    public value: number
  ) {}

  public _TYPE = 'float'
}
