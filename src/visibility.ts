class Visibility {
  public visible: boolean;
  private _private: boolean;
  protected protected: boolean;

  set private(value: boolean) {
    this._private = value;
  }

  get private(): boolean {
    return this._private;
  }
}

class VisibilityChild extends Visibility {
  setProtected() {
    this.protected = true;
  }
}

new Visibility();
