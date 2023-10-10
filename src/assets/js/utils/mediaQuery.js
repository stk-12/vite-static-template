export class MediaQuery {
  constructor(){
    this.mql = window.matchMedia('(max-width: 768px)');
    this.isPC = !this.mql.matches;

    this._addEvent();
  }

  _checkBreakPoint() {
    this.isPC = !this.mql.matches;
  }

  _addEvent() {
    this.mql.addEventListener('change', this._checkBreakPoint.bind(this));
  }
}