export class MediaQuery {
  constructor(){
    this.mql = window.matchMedia('(max-width: 768px)');

    this.isPC = null;

    this._checkBreakPoint(this.mql);
    this._addEvent();
  }

  _checkBreakPoint(mql) {
    if(mql.matches) {
      this.isPC = false;
    } else {
      this.isPC = true;
    }
  }

  _addEvent() {
    this.mql.addEventListener('change', this._checkBreakPoint.bind(this));
  }
}