class MediaQuery {
  constructor(){
    this.mql = window.matchMedia('(min-width: 768px)');
    // this.mqlTB = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    this.isPC = this.mql.matches;
    // this.isTB = this.mqlTB.matches;

    this._addEvent();
  }

  _checkBreakPoint() {
    this.isPC = this.mql.matches;
    // this.isTB = this.mqlTB.matches;
  }

  _addEvent() {
    this.mql.addEventListener('change', this._checkBreakPoint.bind(this));
    // this.mqlTB.addEventListener('change', this._checkBreakPoint.bind(this));
  }
}

export const mediaQuery = new MediaQuery();